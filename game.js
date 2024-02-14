function play() {
    const home = document.getElementById('home-screen');
    home.classList.add('hidden');
    const play = document.getElementById('play');
    play.classList.remove('hidden');
    const scoreDisplay = document.getElementById('score');
    const lifeDisplay = document.getElementById('life');
    scoreDisplay.innerText = '0';
    lifeDisplay.innerText = '3';

    continueGame();
}
function gameOver() {
    const play = document.getElementById('play');
    play.classList.add('hidden');
    const score = document.getElementById('scoreSection');
    score.classList.remove('hidden');
    
    
}
function playAgain() {
    const home = document.getElementById('home-screen');
    home.classList.add('hidden');
    const play = document.getElementById('play');
    play.classList.remove('hidden');
    const score = document.getElementById('scoreSection');
    score.classList.add('hidden');
    const scoreDisplay = document.getElementById('score');
    const lifeDisplay = document.getElementById('life');
    scoreDisplay.innerText = '0';
    lifeDisplay.innerText = '3';
    
}

function continueGame() {
    const randomAlpha = getRandom();
    const displayAlpha = document.getElementById('display');
    displayAlpha.innerText = randomAlpha;
    selectID(randomAlpha);
     
}

 
function keyPress (e) {
    const press = e.key;
    const alpha = document.getElementById('display').innerText.toLowerCase();
    const element = document.getElementById(alpha);
    const scoreDisplay = document.getElementById('score');
    const getScore = parseInt(scoreDisplay.innerText);
    const lifeDisplay = document.getElementById('life');
    const getLife = parseInt(lifeDisplay.innerText);
    const pointDisplay = document.getElementById('point');

   

    if (alpha === press) {
        element.classList.remove('bg-blue-300');
        let score = getScore + 5;
        if (score < 0) {
            score = 0;
        }
        scoreDisplay.innerText = score;
        pointDisplay.innerText = score;
        
          continueGame();
    }
    else if (press === 'Escape') {
        gameOver();
    }
    else{

        let score = getScore - 5;
        let life = getLife - 1;
        if (score < 0) {
            score = 0;
        }
        scoreDisplay.innerText = score;
        lifeDisplay.innerText = life;
        pointDisplay.innerText = score;
        console.log(life);
        if (life < 0) {
            
            gameOver();
      }
    }
  
}

document.addEventListener('keyup', keyPress);

function getRandom() {
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = alphaString.slice('');
    const random = Math.random()*25;
    const i = Math.round(random);
    let result = alpha[i];
    return result;
}
function selectID(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add('bg-blue-300');
}
