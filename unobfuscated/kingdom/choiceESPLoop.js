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
    setInterval(() => {
        let stats = ['materials', 'people', 'happiness', 'gold'];
        let elements = Object.fromEntries([...document.querySelectorAll('[class^=styles__statContainer]')].map((container, i) => [stats[i], container]));
        let { guest: data, phase } = Object.values(document.querySelector('body div[id] > div > div'))[1].children[0]._owner.stateNode.state;
        if (phase == "choice") {
            Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
            Object.entries(data.yes || {}).forEach(x => {
                if (x[0] == 'msg' || !stats.includes(x[0])) return;
                let element = document.createElement('div');
                element.className = 'choiceESP';
                element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                element.innerText = String(x[1])
                elements[x[0]].appendChild(element);
            })
            Object.entries(data.no || {}).forEach(x => {
                if (x[0] == 'msg' || !stats.includes(x[0])) return;
                let element = document.createElement('div');
                element.className = 'choiceESP';
                element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                element.innerText = String(x[1])
                elements[x[0]].appendChild(element);
            })
        }
    });
})();