// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain: ipc } = require("electron");
const path = require("path");
const { bootstrapGetMaps } = require("./lib");

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            // webviewTag: true,
        },
    });

    // and load the index.html of the app.
    // mainWindow.loadFile("index.html");
    mainWindow.loadURL("http://www.osuskills.com/training");
    console.log(`(${bootstrapGetMaps.toString()})(document)`);
    mainWindow.webContents.executeJavaScript(`(${bootstrapGetMaps.toString()})(document)`, function (result) {
        console.log(result);
    });

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
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
const { sendMaps } = require("./bot");

let sending = false;

ipc.on("send-maps", async (e, message) => {
    if (sending) return;

    sending = true;

    try {
        let maps = getMaps(message.content);
    
        await sendMaps(maps, message.user, (progress) => {
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
