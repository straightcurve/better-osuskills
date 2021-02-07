// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const username = document.getElementById("username");
const password = document.getElementById("password");
const send = document.getElementById("send");
const sending = document.getElementById("sending");
const error_content = document.getElementById("error");
const ipc = require('electron').ipcRenderer;

username.value = localStorage.getItem("bot.username") || "";
password.value = localStorage.getItem("bot.password") || "";

send.onclick = () => {
    let _username = username.value;
    let _password = password.value;

    if (_username.length === 0 || _password.length === 0)
        return;

    send.toggleAttribute("disabled");
    sending.toggleAttribute("hidden");
    error_content.toggleAttribute("hidden", true);

    localStorage.setItem("bot.username", _username);
    localStorage.setItem("bot.password", _password);

    ipc.send("bot-connect", {
        username: _username,
        password: _password,
    });
};

ipc.on("bot-connect-error", (ev, error) => {
    if (error.includes("Bancho Auth failed"))
        error_content.innerHTML = "Please double-check your credentials or get them from the link below.";
    else
        error_content.innerHTML = `Unknown error.. ${error}`;

    error_content.toggleAttribute("hidden", false);
    sending.toggleAttribute("hidden");
    send.toggleAttribute("disabled");
});

send.click();
