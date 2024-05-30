const gameBoard = document.querySelector('#gameBoard');
const player = document.querySelector('#player');
const infoDisplay = document.querySelector('#Info-display');

const width = 8;

const startPieces = [
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
];

function createBoard() {
  startPieces.forEach((startPiece, i) => {
    const square = document.createElement('div');
    square.innerHTML = startPiece;

    square.classList.add('square');
    square.setAttribute('square-id', i);

    square.firstElementChild &&
      square.firstElementChild.setAttribute('draggable', 'true');

    const row = Math.floor((63 - i) / 8) + 1;
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? 'beige' : 'brown');
    } else {
      square.classList.add(i % 2 === 0 ? 'brown' : 'beige');
    }
    0;
    if (i <= 15) {
      square.classList.add('black');
    }

    if (i >= 48) {
      square.classList.add('white');
    }

    gameBoard.append(square);
  });
}

createBoard();

const allsquares = document.querySelectorAll('.square');

allsquares.forEach((square) => {
  square.addEventListener('dragstart', dragStart);
  square.addEventListener('dragover', dragOver);
  square.addEventListener('drop', dragDrop);
});

let startPosition;
let draggedElement;

function dragStart(e) {
  startPosition = e.target.parentNode.getAttribute('square-id');
  draggedElement = e.target;
}

function dragOver(e) {
  e.preventDefault();
  console.log(e.target);
}

function dragDrop(e) {
  e.stopPropagation();
  // console.log('dragdrop', e.target);
  e.target.parentNode.append(draggedElement);
}
