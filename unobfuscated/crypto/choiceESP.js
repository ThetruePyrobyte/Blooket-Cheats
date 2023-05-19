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
    let { stateNode } = Object.values(document.querySelector('body div[id] > div > div'))[1].children[0]._owner;
    let { text } = stateNode.state.choices[0];
    let chest = document.querySelector('[class^=styles__feedbackContainer___]');
    if (chest.children.length <= 4) {
        let choice = document.createElement('div')
        choice.style.color = "white";
        choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
        choice.style.fontSize = "2em";
        choice.style.display = "flex";
        choice.style.justifyContent = "center";
        choice.style.marginTop = "675px";
        choice.innerText = text;
        chest.append(choice);
    }
})();