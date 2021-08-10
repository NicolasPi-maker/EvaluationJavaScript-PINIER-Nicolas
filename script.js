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

//Reset game
let resetGame = () => {
  const tableSettings = [player1Score,player2Score,totalDiceRoll1,totalDiceRoll2];
  tableSettings.forEach(element => {
    element.innerHTML = 0;
  });
}

//New Game Function
newGame.addEventListener('click',() => {
  alert('Nouvelle Partie !');
  resetGame();
})

