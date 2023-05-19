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
    Object.values(document.querySelector('body div[id] > div > div'))[1].children[0]._owner.stateNode.state.towers.forEach(tower => {
        tower.stats.dmg = 1e6;
        tower.stats.fireRate = 50;
        tower.stats.ghostDetect = true;
        tower.stats.maxTargets = 1e6;
        tower.stats.numProjectiles &&= 100;
        tower.stats.range = 100;
        if (tower.stats.auraBuffs) for (const buff in tower.stats.auraBuffs) tower.stats.auraBuffs[buff] *= 100;
    });
})();