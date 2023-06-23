/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(async () => {
    let interval = setInterval(async () => {
        try {
            let { stateNode } = Object.values(document.querySelector('body div[id] > div > div'))[1].children[0]._owner;
            let clients = await stateNode.props.liveGameController.getDatabaseRef("c");
            let c = {};
            let bareClients = {};
            clients.on("value", value => {
                const clients = value.val() || {};
                const joined = [];
                for (const client in clients) if (!c[client]) {
                    joined.push(client);
                    bareClients[client.replace(/[0-9]/g, '')] = (bareClients[client.replace(/[0-9]/g, '')] || 0) + 1;
                }
                c = clients;
                for (const client of joined) {
                    if (c[client].g || bareClients[client.replace(/[0-9]/g, '')] > 1) {
                        stateNode.props.liveGameController.blockUser(client);
                        bareClients[client.replace(/[0-9]/g, '')]--;
                    }
                }
            });
            clearInterval(interval)
        } catch {}
    }, 1000);
})();