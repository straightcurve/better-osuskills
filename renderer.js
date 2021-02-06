// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const content = document.getElementById("osu-skills-page-content");
const user = document.getElementById("user");
const send = document.getElementById("send");
const sending = document.getElementById("sending");
const progress = document.getElementById("progress");

send.onclick = () => {
    let username = user.value;
    let html = content.value;

    if (username.length === 0 || html.length === 0)
        return;

    send.toggleAttribute("disabled");
    sending.toggleAttribute("hidden");

    ipc.send("send-maps", {
        content: html,
        user: username,
    });
};

const ipc = require('electron').ipcRenderer;
ipc.on("send-maps-progress", (e, value) => {
    setProgress(value);
});

ipc.on("sent-maps", (e) => {
    sending.toggleAttribute("hidden");
    send.toggleAttribute("disabled");
});

function setProgress(value) {
    progress.style.width = `${value * 100}%`;
}
