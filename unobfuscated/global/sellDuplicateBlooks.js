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
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
        axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a,
        { sellBlook } = Object.values(webpack.c).find(x => x.exports.a?.sellBlook).exports.a;
    axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { unlocks } }) => {
        let blooks = Object.entries(unlocks).filter(x => x[1] > 1);
        if (confirm(`Are you sure you want to sell your dupes?`)) {
            let now = Date.now();
            for (const [blook, amount] of blooks) await sellBlook({ blook, numToSell: amount - 1 });
            alert(`(${Date.now() - now}ms) Results:\n${blooks.map(([blook, amount]) => `    ${blook} ${amount - 1}`).join(`\n`)}`);
        }
    }).catch((e) => (alert('There was an error user data!'), console.info(e)));
})();