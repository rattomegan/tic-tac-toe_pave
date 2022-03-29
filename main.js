const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], 
  [2, 4, 6]
];

let board, player, winner;

let boardEl = document.querySelector('.board');
let sqEls = document.querySelectorAll('.square');
let textEl = document.querySelector('h2');

boardEl.addEventListener('click', makeMove);
document.querySelector('button').addEventListener('click', init);

function makeMove(evt) {
  // clear text element before next move
  textEl.textContent = ''
  // get index of square that's clicked
  let idx = evt.target.id
  if (!board[idx]) {
    board[idx] = player;
  } else {
    textEl.textContent = 'Pick another square'
  }
  winner = getWinner();
  render();
  player *= -1;
}

function render() {
  // display token
  board.forEach(function(sq, idx) {
    if(board[idx] === 1) sqEls[idx].textContent = "X";
    if(board[idx] === -1) sqEls[idx].textContent = "O";
    if(board[idx] === 0) sqEls[idx].textContent = "";
  });
  // display winner
  if (winner === 1) return textEl.textContent = 'Player 1 Won!';
  if (winner === -1) return textEl.textContent = 'Player 2 Won!';
  if (winner === 'Tie') return textEl.textContent = 'Tie!';
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if(Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) {
      return winner = board[winningCombos[i][0]]
    }
  };
  if(board.includes(0)) return null;
  return "Tie";
};

function init() {
  textEl.textContent = ''
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  player = 1;
  winner = null;
  render();
};

init();
