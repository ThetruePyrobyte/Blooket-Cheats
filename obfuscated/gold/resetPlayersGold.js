/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tresetPlayersGold.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");var e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove();let o=prompt("Who's gold would you like to reset?"),{props:t,state:l}=Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner["stateNode"];stateNode.props.liveGameController.getDatabaseVal("c",e=>{e&&Object.keys(e).map(e=>e.toLowerCase()).includes(o.toLowerCase())&&t.liveGameController.setVal({path:"c/".concat(t.client.name),val:{b:t.client.blook,g:l.gold,tat:o+":swap:0"}})})})();