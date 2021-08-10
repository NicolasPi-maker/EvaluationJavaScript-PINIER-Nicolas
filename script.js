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
  const tableSettings = [player1Score,player2Score,totalDiceRoll1,totalDiceRoll2];
  tableSettings.forEach(element => {
    element.innerHTML = 0;
  });
}

//New Game Function
newGame.addEventListener('click',() => {
  alert('Nouvelle Partie !');
  resetGame();
  currentPlayer = Math.floor(Math.random()*2);
  currentPlayerPing(currentPlayer);
});

//Small red dot indicate current player turn
const currentPlayerPing = (number) => {
  if(number === 0) {
    alert('Player 1 commence !');

  } else {
    alert('Player 2 commence !');
  }
}

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

//Roll Dice Display function
const displayFace = (dicenumber) => {
  imgDice.getAttribute("src");
  imgDice.setAttribute("src",diceFaceUrlTable[diceNumber -1]);
}

//Roll Dice
rollDice.addEventListener('click',() => {
  let min = 1;
  let max = 6;
  diceNumber = Math.floor(Math.random()*(max - min + 1) + min);
  displayFace(diceNumber);
});

//Change Player
const changePlayer = () => {
  if(currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  currentPlayerPing(currentPlayer);
}













