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
  const tableSettings = [player1Score,player2Score,totalDiceRoll2,totalDiceRoll1];
  tableSettings.forEach(element => {
    element.innerHTML = 0;
  });
  displayFace(1);
}

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

//Roll Dice
rollDice.addEventListener('click',() => {
  let min = 1;
  let max = 6;
  diceNumber = Math.floor(Math.random()*(max - min + 1) + min);
  if(currentPlayer === 0) {
    totalDiceRoll1.innerHTML++;
  } else {
    totalDiceRoll2.innerHTML++;
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
}

//Hold
hold.addEventListener('click',() => {
  if(currentPlayer === 0) {
    player1Score.innerHTML =  parseInt(player1Score.innerHTML) + diceNumber;
  } else {
    player2Score.innerHTML = parseInt(player2Score.innerHTML) + diceNumber;
  }
  changePlayer();
  diceNumber = 1;
  displayFace(1);
})

//Change Player
const changePlayer = () => {
  if(currentPlayer === 0) {
    currentPlayer = 1;
  } else {
    currentPlayer = 0;
  }
  StartPlayerPing(currentPlayer);
}














