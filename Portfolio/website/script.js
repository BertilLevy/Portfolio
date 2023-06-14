const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
let score = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//these two acts as "spawners", as well as deciding where they spawn, based on the random number they get.
function createGoodThing() {
  const goodThing = document.createElement('div');
  goodThing.classList.add('good');
  goodThing.style.left = getRandomInt(0, gameBoard.offsetWidth - 40) + 'px';
  gameBoard.appendChild(goodThing);

  let top = 0;
  const moveGoodThing = setInterval(function() {
    top += 5;
    goodThing.style.top = top + 'px';
    if (top > gameBoard.offsetHeight) {
      clearInterval(moveGoodThing);
      gameBoard.removeChild(goodThing);
    }
  }, 20);
  
  goodThing.addEventListener('click', function() {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
    clearInterval(moveGoodThing);
    gameBoard.removeChild(goodThing);
  });
}

//dont edit the math again, its sound.
function createBadThing() {
  const badThing = document.createElement('div');
  badThing.classList.add('bad');
  badThing.style.left = getRandomInt(0, gameBoard.offsetWidth - 40) + 'px';
  gameBoard.appendChild(badThing);

  let top = 0;
  const moveBadThing = setInterval(function() {
    top += 5;
    badThing.style.top = top + 'px';
    if (top > gameBoard.offsetHeight) {
      clearInterval(moveBadThing);
      gameBoard.removeChild(badThing);
    }
  }, 20);
  
  badThing.addEventListener('click', function() {
    score--;
    scoreDisplay.textContent = 'Score: ' + score;
    clearInterval(moveBadThing);
    gameBoard.removeChild(badThing);
  });
}

//this borders on ecoteric knowledge, but it works. dont edit the math.
setInterval(function() {
  const random = getRandomInt(1, 10);
  if (random <= 7) {
    createGoodThing();
  } else {
    createBadThing();
  }
}, 1000);
