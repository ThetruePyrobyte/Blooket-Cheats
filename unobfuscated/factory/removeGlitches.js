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
    stateNode.setState({
        bits: 0,
        ads: [],
        hazards: [],
        color: "",
        lol: false,
        joke: false,
        slow: false,
        dance: false,
        glitch: "",
        glitcherName: "",
        glitcherBlook: ""
    });
    clearTimeout(stateNode.adTimeout);
    clearInterval(stateNode.hazardInterval);
    clearTimeout(stateNode.nightTimeout);
    clearTimeout(stateNode.glitchTimeout);
    clearTimeout(stateNode.lolTimeout);
    clearTimeout(stateNode.jokeTimeout);
    clearTimeout(stateNode.slowTimeout);
    clearTimeout(stateNode.danceTimeout);
    clearTimeout(stateNode.nameTimeout);
})();