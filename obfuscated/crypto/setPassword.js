/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tsetPassword.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");var o=document.createElement("iframe"),o=(document.body.append(o),window.prompt=o.contentWindow.prompt.bind(window),o.remove(),prompt("What do you want to set your password to?")),e=Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner["stateNode"];e.setState({password:o}),e.props.liveGameController.setVal({path:"c/".concat(e.props.client.name),val:{b:e.props.client.blook,p:o,cr:e.state.crypto}})})();