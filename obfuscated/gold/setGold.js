/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tsetGold.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");var o=document.createElement("iframe"),o=(document.body.append(o),window.prompt=o.contentWindow.prompt.bind(window),o.remove(),Number(parseInt(prompt("How much gold would you like?")))),e=Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner["stateNode"];e.setState({gold:o,gold2:o}),e.props.liveGameController.setVal({path:"c/".concat(e.props.client.name),val:{b:e.props.client.blook,g:o}})})();