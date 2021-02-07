// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain: ipc, globalShortcut, shell, ipcMain } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const { bootstrapGetMaps } = require("./lib");

/**
 * @type {BrowserWindow}
 */
let modal;

/**
 * @type {BrowserWindow}
 */
let mainWindow;


function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
        },
        titleBarStyle: "hidden",
        title: "better osu!Skills",
        show: false,
    });

    mainWindow.on("page-title-updated", (ev) => {
        ev.preventDefault();
    });

    const training_url = "http://www.osuskills.com/training";
    mainWindow.loadURL(training_url);
    mainWindow.webContents.executeJavaScript(`(${bootstrapGetMaps.toString()})(document)`);
    mainWindow.setMenuBarVisibility(false);

    mainWindow.webContents.on("did-navigate", (ev) => {
        if (!mainWindow.webContents.getURL().includes(training_url))
            return;

        mainWindow.webContents.executeJavaScript(`(${bootstrapGetMaps.toString()})(document)`);
    });

    modal = new BrowserWindow({
        width: 720,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
        },
        titleBarStyle: "hidden",
        frame: false,
    });
    modal.webContents.on("new-window", (ev, url) => {
        ev.preventDefault();

        shell.openExternal(url);
    });

    modal.loadFile(path.join(__dirname, "pages", "initial", "modal.html"));
    modal.show();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    if (!process.env.APPIMAGE) {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();

        return;
    }

    let cfu_modal = new BrowserWindow({
        width: 720,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
        },
        titleBarStyle: "hidden",
        frame: false,
    });

    cfu_modal.loadFile(path.join(__dirname, "pages", "update", "modal.html"));
    cfu_modal.show();

    autoUpdater.autoDownload = true;
    autoUpdater.autoInstallOnAppQuit = true;
    autoUpdater.checkForUpdatesAndNotify({title: "hai", body: "update avaialble"});

    autoUpdater.on("update-not-available", () => {
        createWindow();

        cfu_modal.close();
        cfu_modal.destroy();
        cfu_modal = null;
    });

    autoUpdater.on("update-available", () => {
        cfu_modal.webContents.send("update-available");
    });

    autoUpdater.on("update-downloaded", () => {
        autoUpdater.quitAndInstall();
    });

    globalShortcut.register("CommandOrControl+R", () => {});
    globalShortcut.register("CommandOrControl+Shift+R", () => {});
    // globalShortcut.register("CommandOrControl+Shift+I", () => {});
    globalShortcut.register("F10", () => {});
    globalShortcut.register("F12", () => {});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const { getMaps } = require("./lib");
const { sendMapQueue, connect } = require("./bot");

let sending = false;
let queue = [];
const max_queue_size = 100;

ipc.on("send-maps", async (e, message) => {
    try {
        let maps = getMaps(message.content);
        e.sender.send("log-maps", {
            maps,
        });
        
        queue.push(...maps.slice(0, Math.min(maps.length, max_queue_size - queue.length)));

        if (sending) return;
        sending = true;

        await sendMapQueue(queue, message.user, (progress) => {
            e.sender.send("send-maps-progress", progress);
        });

        e.sender.send("sent-maps");

        sending = false;
    } catch (ex) {
        console.error("Failed get-maps");
        console.trace(ex);

        e.sender.send("sent-maps");

        sending = false;
    }
});

ipc.on("bot-connect", async (e, message) => {
    let error = await connect(message);
    if (error === null) {
        e.sender.send("bot-connect-success", message);
        modal.close();
        mainWindow.show();
    }
    else
        e.sender.send("bot-connect-error", error.toString());
});
