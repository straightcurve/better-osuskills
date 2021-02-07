const cheerio = require("cheerio");

module.exports = {
    getMaps,
    bootstrapGetMaps,
};

function getMaps(html) {
    let $ = cheerio.load(html);
    let anchors = $("a").filter((i, elem) => {
        if (elem.attribs.href.startsWith("http://osu.ppy.sh/b/")) return this;

        return null;
    });

    return anchors.map((i, elem) => {
        let name =
            elem.parent.parent.childNodes[0].childNodes[0].childNodes[0].data;
        let skills = elem.parent.parent.childNodes.slice(1);
        let stamina = skills[0].childNodes[0].data;
        let tenacity = skills[1].childNodes[0].data;
        let agility = skills[2].childNodes[0].data;
        let accuracy = skills[3].childNodes[0].data;
        let precision = skills[4].childNodes[0].data;
        let reaction = skills[5].childNodes[0].data;
        let memory = skills[6].childNodes[0].data;

        return {
            name,
            link: elem.attribs.href,
            stamina,
            tenacity,
            agility,
            accuracy,
            precision,
            reaction,
            memory,
            toString: function () {
                return `[${this.link} ${this.name}] (STA ${this.stamina}) (TEN ${this.tenacity}) (AGI ${this.agility}) (ACC ${this.accuracy}) (PRE ${this.precision}) (REA ${this.reaction}) (MEM ${this.memory})`;
            },
        };
    });
}

function bootstrapGetMaps(doc) {
    const ipc = require("electron").ipcRenderer;
    const username = doc.getElementById("username");
    const table = document.querySelector("table").children[1];

    let observer = new MutationObserver((mutations) => {
        let username_value = username.value;
        let html = doc.getHTML(doc.querySelector("html"), true);

        if (username_value.length === 0 || html.length === 0) return;

        ipc.send("send-maps", {
            content: html,
            user: username_value,
        });
    });

    // configuration of the observer:
    let config = {
        childList: true,
    };
    // pass in the target node, as well as the observer options
    observer.observe(table, config);

    doc.getHTML = function (who, deep) {
        if (!who || !who.tagName) return "";
        var txt,
            ax,
            el = doc.createElement("div");
        el.appendChild(who.cloneNode(false));
        txt = el.innerHTML;
        if (deep) {
            ax = txt.indexOf(">") + 1;
            txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
        }
        el = null;
        return txt;
    };

    ipc.on("sent-maps", (e) => {

    });

    ipc.on("log-maps", (e, message) => {
        console.log("Queued up", message.maps);
    });

    doc.getElementById("username").value = localStorage.getItem("username") || "";
    doc.getElementById("username").onchange = () => {
        localStorage.setItem("username", doc.getElementById("username").value);
    };
    $(doc.getElementById("loadPlayer")).trigger("click");
    $(doc.getElementById("findMaps")).trigger("click");
}
