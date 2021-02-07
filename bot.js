const bancho = require("bancho.js");

let client;

module.exports = {
    sendMapQueue,
    sendMaps,
    client,
    connect,
};

async function sendMapQueue(queue, to, progressFn = null) {
    if (!client || !client.isConnected())
        throw new Error("client not connected");

    if (typeof to !== "string" || to.length === 0)
        throw new Error("invalid user");

    if (typeof progressFn !== "function")
        progressFn = function() {};

    while (queue.length)
        await new Promise((resolve) => {
            let map = queue.shift();

            setTimeout(async () => {
                // console.log(map.toString());

                await client.getUser(to.replace(/\s/g, "_")).sendMessage(map.toString());
                
                try {
                    progressFn(-(0 - queue.length) / queue.length);
                } catch (ex) {
                    console.error("progress fn failed");
                    console.trace(ex);
                }

                resolve();
            }, 5000);
        });
}

async function sendMaps(maps, to, progressFn = null) {
    if (!client || !client.isConnected())
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

async function connect({ username, password }) {
    client = new bancho.BanchoClient({
        username: username.replace(/\s/g, "_"),
        password: password,
    });

    try {
        await client.connect();
        return client;

    } catch (ex) {

        console.error(ex);
        return ex;
    }
}
