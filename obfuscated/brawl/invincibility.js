/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tinvincibility.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");for(const e of Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e=>e.callbackContext?.toString().includes("invulnerableTime")))e.collideCallback=()=>{}})();