function play() {
    const home = document.getElementById('home-screen');
    home.classList.add('hidden');
    const play = document.getElementById('play');
    play.classList.remove('hidden');
    const scoreDisplay = document.getElementById('score');
    const lifeDisplay = document.getElementById('life');
    const commentDisplay = document.getElementById('comment');
    const sound = new Audio('../sounds/start.mp3');
    sound.play();
    scoreDisplay.innerText = '0';
    lifeDisplay.innerText = '3';
    commentDisplay.innerText = 'Practice will make you a Pro';

    continueGame();
}
function gameOver() {
    document.removeEventListener('keyup', keyPress);
    const sound = new Audio('../sounds/finish.mp3');
    sound.play();
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
    const commentDisplay = document.getElementById('comment');
    const sound = new Audio('../sounds/start.mp3');
    sound.play();
    scoreDisplay.innerText = '0';
    lifeDisplay.innerText = '3';
    commentDisplay.innerText = 'Practice will make you a Pro';
    document.addEventListener('keyup', keyPress);
}

function continueGame() {
    const randomAlpha = getRandom();
    const displayAlpha = document.getElementById('display');
    displayAlpha.innerText = randomAlpha;
    selectID(randomAlpha);
    document.addEventListener('keyup', keyPress);
     
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
    const commentDisplay = document.getElementById('comment');
   

    if (alpha === press) {
        const sound = new Audio('../sounds/correct.mp3');
        sound.play();
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
        const sound = new Audio('../sounds/wrong.mp3');
        sound.play();
        let score = getScore - 5;
        let life = getLife - 1;
        if (score < 0) {
            
            score = 0;
        }
        scoreDisplay.innerText = score;
        lifeDisplay.innerText = life;
        pointDisplay.innerText = score;

        if (score>30) {
            commentDisplay.innerText = 'You did well, Keep Going ON';
        }
        if (score>60) {
            commentDisplay.innerText = 'Nice Try! Focus More';
        }
        if (score>100) {
            commentDisplay.innerText = 'You crossed the century';
        }
        if (score>150) {
            commentDisplay.innerText = 'You are Master at this Game';
        }
        
        if (score>300) {
            commentDisplay.innerText = 'Sigma exist Damm';
        }
        if (score>500) {
            commentDisplay.innerText = 'OMG! You are breaking my game.';
        }
        if (score>1000) {
            commentDisplay.innerText = 'Bro! >w< Contact Elon Musk';
        }
        if (score>5000) {
            commentDisplay.innerText = 'No Comments for you, I am speechless';
        }
        
        

        
        if (life < 0) {
            
            gameOver();
      }
      
    }
  
}



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
function changeBlueBG() {
    const sound = new Audio('../sounds/change.mp3');
        sound.play();
    const getBG = document.getElementById('bg');
    getBG.classList.remove("bg-[url('images/bg.jpg')]");
    getBG.classList.add("bg-[url('images/blue-bg.jpg')]");
    
}
function changeDarkBG() {
    const sound = new Audio('../sounds/change.mp3');
        sound.play();
    const getBG = document.getElementById('bg');
    getBG.classList.remove("bg-[url('images/blue-bg.jpg')]");
    getBG.classList.add("bg-[url('images/bg.jpg')]");
    
}
