function play() {
    const home = document.getElementById('home-screen');
    home.classList.add('hidden');
    const play = document.getElementById('play');
    play.classList.remove('hidden');
    continueGame();
}

function continueGame() {
    const randomAlpha = getRandom();
    const displayAlpha = document.getElementById('display');
    displayAlpha.innerText = randomAlpha;
     
}
function getRandom() {
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = alphaString.slice('');
    const random = Math.random()*25;
    const i = Math.round(random);
    
    let result = alpha[i];

    return result;
    
}
