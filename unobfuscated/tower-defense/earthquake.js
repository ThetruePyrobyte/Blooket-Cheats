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
        eventName: "Earthquake",
        event: {
            short: "e",
            color: "#805500",
            icon: "fas fa-mountain",
            desc: "All of your towers get mixed up",
            rate: .02
        },
        buyTowerName: "",
        buyTower: {}
    }, () => stateNode.eventTimeout = setTimeout(() => stateNode.setState({ event: {}, eventName: "" }), 6e3));
    stateNode.tiles.forEach(row => row.forEach((col, i) => col === 3 && (row[i] = 0)));
    let tiles = stateNode.tiles.flatMap((_, y) => _.map((__, x) => __ === 0 && ({ x, y }))).filter(Boolean).sort(() => .5 - Math.random());
    stateNode.towers.forEach(tower => {
        let { x, y } = tiles.shift();
        tower.move(x, y, stateNode.tileSize);
        stateNode.tiles[y][x] = 3;
    });
})();