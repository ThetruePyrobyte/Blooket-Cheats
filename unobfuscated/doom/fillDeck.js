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
    let i = document.createElement('iframe');
    document.body.append(i);
    window.alert = i.contentWindow.alert.bind(window);
    i.remove();
    if (window.location.pathname == "/tower/map") {
        const { a: artifacts, c: allCards } = webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache["gvfT"].exports;
        const { stateNode } = Object.values(document.querySelector('body div[id] > div > div'))[1].children[0]._owner;
        stateNode.props.tower.artifacts = Object.keys(artifacts);
        stateNode.props.tower.cards = Object.entries(allCards).map(([blook, card]) => ({ ...card, blook, strength: 20, charisma: 20, wisdom: 20 }));
        try { stateNode.props.addTowerNode(); } catch { }
        stateNode.setState({ showDeck: false });
    } else alert("You need to be on the map to run this cheat!");
})();