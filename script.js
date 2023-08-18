let gameover = false;

const board = Array(9).fill('');

const gameboard = document.querySelector('.gameboard');
let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};




const checkWin = () => {
    const boxtexts = document.getElementsByClassName('square-text');
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach((e) => {
        if (
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[0]].innerText !== ''
        ) {
            document.querySelector(".turn-for").innerText = `Player ${boxtexts[e[0]].innerText} wins!`;
            gameover = true;
        }
    });
};

const createSquare = (index) => {
    const square = document.createElement('div');
    square.className = 'square';
    gameboard.appendChild(square);

    const squareText = document.createElement('div');
    squareText.className = 'square-text';
    square.appendChild(squareText);

    square.addEventListener("click", () => {
        if (squareText.innerText === '' && !gameover) {
            squareText.innerText = turn;
            squareText.classList.add(turn === "X" ? "x-text" : "o-text");
            turn = changeTurn();
            checkWin();
            if (!gameover) {
                document.querySelector(".turn-for").innerText = `Turn for ${turn}`;
            }
        }
    });
};


const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    const boxtexts = document.getElementsByClassName('square-text');
    for (const boxtext of boxtexts) {
        boxtext.innerText = '';
    }

    gameover = false;
    turn = "X";
    document.querySelector(".turn-for").innerText = `Turn for ${turn}`;

    // Clear win notifications
    document.querySelector(".turn-for").innerText = "Now it's turn for X";
})

board.forEach((item, index) => {
    createSquare(index);
});

