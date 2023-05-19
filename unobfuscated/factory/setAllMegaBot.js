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
    Object.values(document.querySelector('body div[id] > div > div'))[1].children[0]._owner.stateNode.setState({
        blooks: new Array(10).fill({
            name: "Mega Bot",
            color: "#d71f27",
            class: "🤖",
            rarity: "Legendary",
            cash: [8e4, 43e4, 42e5, 62e6, 1e9],
            time: [5, 5, 3, 3, 3],
            price: [7e6, 12e7, 19e8, 35e9],
            active: false,
            level: 4,
            bonus: 5.5
        })
    });
})();