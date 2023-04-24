const board = document.querySelector('.board');
const restartButton = document.getElementById('restart');
let squares = [];
let currentPlayer = 'X';
let gameOver = false;

board.addEventListener('click', handleSquareClick);
restartButton.addEventListener('click', restartGame);

init();

function init() {
	squares = Array.from(document.querySelectorAll('.square'));
	gameOver = false;
	currentPlayer = 'X';
	squares.forEach(square => {
		square.classList.remove('disabled');
		square.classList.remove('x');
		square.classList.remove('o');
		square.textContent = '';
	});
}

function handleSquareClick(event) {
	if (gameOver) return;
	let clickedSquare = event.target;
	if (clickedSquare.classList.contains('disabled')) return;
	clickedSquare.classList.add(currentPlayer.toLowerCase());
	clickedSquare.textContent = currentPlayer;
	checkForWinner();
	switchPlayers();
}

function checkForWinner() {
	let winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < winningCombinations.length; i++) {
		let [a, b, c] = winningCombinations[i];
		if (
			squares[a].classList.contains(currentPlayer.toLowerCase()) &&
			squares[b].classList.contains(currentPlayer.toLowerCase()) &&
			squares[c].classList.contains(currentPlayer.toLowerCase())
		) {
			gameOver = true;
			squares[a, b, c].forEach(index => {
        squares[index].classList.add('disabled');
      });
      alert(`${currentPlayer} wins!`);
      break;
    }
  }
  if (!gameOver && squares.every(square => square.classList.contains('disabled'))) {
    gameOver = true;
    alert(`It's a tie!`);
  }

		[a, b, c].forEach(index => {
			squares[index].classList.add('disabled');
		});
		alert(`${currentPlayer} wins!`);
		break;
	}

if (!gameOver && squares.every(square => square.classList.contains('disabled'))) {
	gameOver = true;
	alert(`It's a tie!`);
}


function switchPlayers() {
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function restartGame() {
init();
}