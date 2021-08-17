//Players name
let player1Name = document.getElementById('player1Name');
let player2Name = document.getElementById('player2Name');

//Players score
let player1Score = document.getElementById('player1Score');
let player2Score = document.getElementById('player2Score');

//Players current total number dice roll
let totalDiceRoll1 = document.getElementById('totalDiceRoll1');
let totalDiceRoll2 = document.getElementById('totalDiceRoll2');

//Menu items
const newGame = document.getElementsByClassName('newGame');
const rollDice = document.getElementById('rollDice');
const hold = document.getElementById('hold');

//red Dot
let redDot1 = document.getElementById('redDot1');
let redDot2 = document.getElementById('redDot2');

//Modal display end game player win
let myModal = new bootstrap.Modal(document.getElementById('winnerModal'),);
let winnerText = document.getElementById('winnerText');

//Set Game's variables
let currentPlayer = null;
let diceNumber = null;

//New Game Function
for(let i =0;i < newGame.length;i++) {
  newGame[i].addEventListener('click',() => {
    resetGame();
    currentPlayer = Math.floor(Math.random()*2);
    StartPlayerPing(currentPlayer);
  });
}

//Reset game
const resetGame = () => {
  resetGlobalScore();
  resetCurrentScore();
  displayFace(1);
  rollDice.style.display = 'block';
  hold.style.display = 'block';
};

//Reset all global score
const resetGlobalScore = () => {
  let tableGlobalScore = [player1Score,player2Score];
  tableGlobalScore.forEach(globalScore => {
    globalScore.innerHTML = 0;
  })
};

//Reset all current score
const resetCurrentScore = () => {
  let tableCurrentScore = [totalDiceRoll2,totalDiceRoll1];
  tableCurrentScore.forEach(currentScore => {
    currentScore.innerHTML = 0;
  })
};

//indicate current player turn
const StartPlayerPing = (number) => {
  if(number === 0) {
    alert(`Nouvelle partie, Player ${number+1} Commence !`);
  } else {
    alert(`Nouvelle partie, Player ${number+1} Commence !`);
  }
  playerTurnIndicator();
};

//Roll Dice
rollDice.addEventListener('click',() => {
  let min = 1;
  let max = 6;
  diceNumber = Math.floor(Math.random()*(max - min + 1) + min);
  if(currentPlayer === 0) {
    totalDiceRoll1.innerHTML = parseInt(totalDiceRoll1.innerHTML) + diceNumber;
  } else {
    totalDiceRoll2.innerHTML = parseInt(totalDiceRoll2.innerHTML) + diceNumber;
  }
  displayFace(diceNumber);
  if(diceNumber === 1) {
    changePlayer();
  }
});

//Dice Faces display
const imgDice = document.getElementById('diceFace');
const diceFaceUrlTable = [
  'images/images/Dice1.png',
  'images/images/Dice2.png',
  'images/images/Dice3.png',
  'images/images/Dice4.png',
  'images/images/Dice5.png',
  'images/images/Dice6.png'
];

//Roll Dice Faces Display function
const displayFace = (diceNumber) => {
  imgDice.getAttribute("src");
  imgDice.setAttribute("src",diceFaceUrlTable[diceNumber -1]);
};

//Hold
hold.addEventListener('click',() => {
  if(currentPlayer === 0) {
    player1Score.innerHTML =  parseInt(player1Score.innerHTML) + parseInt(totalDiceRoll1.innerHTML);
  } else {
    player2Score.innerHTML = parseInt(player2Score.innerHTML) + parseInt(totalDiceRoll2.innerHTML);
  }
  endGame();
  diceNumber = 1;
  displayFace(1);
  changePlayer();
});

//Change Player
const changePlayer = () => {
  if(currentPlayer === 1) {
    currentPlayer = 0;
  } else {
    currentPlayer = 1;
  }
  playerTurnIndicator();
  resetCurrentScore();
};

//Current player turn indicator
const playerTurnIndicator = () => {
  if(currentPlayer !== 1) {
    redDot2.style.display = 'none'
    redDot1.style.display = 'inline-block'
    player1Name.style.fontWeight = 'bold';
    player2Name.style.fontWeight = 'normal';
  } else {
    player2Name.style.fontWeight = 'bold';
    player1Name.style.fontWeight = 'normal';
    redDot1.style.display = 'none'
    redDot2.style.display = 'inline-block'
  }
};

//End Game Condition
const endGame = () => {
  if(parseInt(player1Score.innerHTML) >= 100) {
    winnerText.innerHTML = `Player 1 remporte la partie avec ${player1Score.innerHTML} points !`;
    endGameDisplay();
  } else if(parseInt(player2Score.innerHTML) >= 100) {
    winnerText.innerHTML = `Player 2 remporte la partie avec ${player2Score.innerHTML} points !`;
    endGameDisplay();
  }
}

//End game display function
const endGameDisplay = () => {
  rollDice.style.display = 'none';
  hold.style.display = 'none';
  myModal.show();
}