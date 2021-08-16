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
const newGame = document.getElementById('newGame');
const rollDice = document.getElementById('rollDice');
const hold = document.getElementById('hold');

//Set Game's variables
let currentPlayer = null;
let diceNumber = null;

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

//New Game Function
newGame.addEventListener('click',() => {
  alert('Nouvelle Partie !');
  resetGame();
  currentPlayer = Math.floor(Math.random()*2);
  StartPlayerPing(currentPlayer);
});

//Small red dot indicate current player turn
const StartPlayerPing = (number) => {
  if(number === 0) {
    alert('Player 1 commence !');
    player1Name.style.fontWeight = 'bold';
  } else {
    alert('Player 2 commence !');
    player2Name.style.fontWeight = 'bold';
  }
  playerTurnIndicator();
};

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
  changePlayer();
  diceNumber = 1;
  displayFace(1);
  endGame();
});

//Change Player
const changePlayer = () => {
  if(currentPlayer === 1) {
    currentPlayer = 0;
  } else {
    currentPlayer = 1;
  }
  StartPlayerPing(currentPlayer);
  playerTurnIndicator();
  resetCurrentScore();
};

//Current player turn indicator
const playerTurnIndicator = () => {
  if(currentPlayer !== 1) {
    player1Name.style.fontWeight = 'bold';
    player2Name.style.fontWeight = 'normal';
  } else {
    player2Name.style.fontWeight = 'bold';
    player1Name.style.fontWeight = 'normal';
  }
};

//End Game Condition
const endGame = () => {
  if(parseInt(player1Score.innerHTML) >= 100){
    alert('Le joueur 1 gagne la partie');
    rollDice.style.display = 'none';
    hold.style.display = 'none';
  } else if(parseInt(player2Score.innerHTML) >= 100) {
    alert('Le joueur 2 gagne la partie');
    rollDice.style.display = 'none';
    hold.style.display = 'none';
  }
}

