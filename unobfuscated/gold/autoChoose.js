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
    try {
        let { stateNode } = Object.values(document.querySelector('body div[id] > div > div'))[1].children[0]._owner;
        if (stateNode.state.stage === "prize") {
            const players = Object.entries(await new Promise(r => stateNode.props.liveGameController.getDatabaseVal("c", c => c && r(c))) || []).filter(x => x[0] != stateNode.props.client.name).sort((a, b) => b[1].g - a[1].g)[0]?.[1]?.g || 0;
            let max = 0; index = -1;
            for (let i = 0; i < stateNode.state.choices.length; i++) {
                const { type, val } = stateNode.state.choices[i];
                let value = stateNode.state.gold;
                switch (type) {
                    case "gold": value = stateNode.state.gold + val || stateNode.state.gold; break;
                    case "multiply":
                    case "divide": value = Math.round(stateNode.state.gold * val) || stateNode.state.gold; break;
                    case "swap": value = players || stateNode.state.gold;
                    case "take": value = stateNode.state.gold + players * val || stateNode.state.gold;
                }
                if ((value || 0) <= max) continue;
                max = value, index = i + 1;
            }
            document.querySelector(`div[class^='styles__choice${index}']`).click();
        }
    } catch { }
})();