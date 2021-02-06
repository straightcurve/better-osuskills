const cheerio = require("cheerio");

module.exports = {
    getMaps,
};

function getMaps(html) {
    let $ = cheerio.load(html);
    let anchors = $("a").filter((i, elem) => {
        if (elem.attribs.href.startsWith("http://osu.ppy.sh/b/"))
            return this;

        return null;
    });

    return anchors.toArray().map(elem => {
        let name = elem.parent.parent.childNodes[0].childNodes[0].childNodes[0].data;
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
            toString: function() {
                return `[${this.link} ${this.name}] (STA ${this.stamina}) (TEN ${this.tenacity}) (AGI ${this.agility}) (ACC ${this.accuracy}) (PRE ${this.precision}) (REA ${this.reaction}) (MEM ${this.memory})`;
            },
        };
    });
}
