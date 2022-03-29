let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], 
  [2, 4, 6]
]

let board, turn, winner

let boardEl = document.querySelector('.board');
let sqEls = document.querySelectorAll('.square')


boardEl.addEventListener('click', makeMove)

function makeMove(evt) {
  let idx = evt.target.id
  board[idx] = player;
  console.log(idx)
  board.forEach(function(sq, idx) {
    // if 1 = X || -1 = O
    if(board[idx] === 1) {
      sqEls[idx].textContent = "X"
    }
    if(board[idx] === -1) {
      sqEls[idx].textContent = "O"
    }
    if(board[idx] === 0) {
      sqEls[idx].textContent = ""
    }
  })
  winner = getWinner()
  render()
  player *= -1;
}

function render() {
  if (winner === 1) {
    return document.querySelector('h2').innerText = 'Player 1 Won!'
  }
  if (winner === -1) {
    return document.querySelector('h2').innerText = 'Player 2 Won!'
  }
  if (winner === 'Tie') {
    return document.querySelector('h2').innerText = 'Tie!'
  }
}
function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if(Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) {
      return winner = board[winningCombos[i][0]]
    }
  }
  if(board.includes(0)) return null;
  return "Tie"
}

function init() {
  board = [
    0, 0, 0, 
    0, 0, 0, 
    0, 0, 0
  ];
  player = 1;
}

init();

// write function to determine if there's a win