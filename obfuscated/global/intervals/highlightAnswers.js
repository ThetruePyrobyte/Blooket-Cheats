/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\thighlightAnswers.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem",""),setInterval(()=>{const{state:t,props:s}=Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner["stateNode"];[...document.querySelectorAll('[class*="answerContainer"]')].forEach((e,o)=>{(t.question||s.client.question).correctAnswers.includes((t.question||s.client.question).answers[o])?e.style.backgroundColor="rgb(0, 207, 119)":e.style.backgroundColor="rgb(189, 15, 38)"})})})();