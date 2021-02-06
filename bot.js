const bancho = require("bancho.js");
const config = require("dotenv").config().parsed;

const client = new bancho.BanchoClient({
    username: config.username.replace(/\s/g, "_"),
    password: config.password,
});

module.exports = {
    sendMaps,
    client,
};

async function sendMaps(maps, to, progressFn = null) {
    if (!client.isConnected())
        throw new Error("client not connected");

    if (typeof to !== "string" || to.length === 0)
        throw new Error("invalid user");

    if (typeof progressFn !== "function")
        progressFn = function() {};

    let next = 0;
    while (next < maps.length)
        await new Promise((resolve) => {
            setTimeout(async () => {
                // console.log(maps[next++].toString());

                await client.getUser(to.replace(/\s/g, "_")).sendMessage(maps[next++].toString());
                
                try {
                    progressFn(next / maps.length);
                } catch (ex) {
                    console.error("progress fn failed");
                    console.trace(ex);
                }

                resolve();
            }, 5000);
        });
}

const start_bot = async () => {
    try {
        await client.connect();
    } catch (ex) {
        console.error(ex);
    }
};

start_bot();
