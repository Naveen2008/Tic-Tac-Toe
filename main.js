let board = ['', '', '', '', '', '', '', '', ''];
let player1 = 'X';
let player2 = 'O';
let currentPlayer = 1;
let player1Wins;
let player2Wins;
let gameCounter = 0;
 let player1Score = 0;
 let player2Score = 0;
document.getElementById('ply1').style.backgroundColor = '#00917c';
function clicked(index) {
    if (board[index] != '' || player1Wins || player2Wins) {
        return;
    }

    if (currentPlayer === 1) {
        document.getElementById('0' + (index + 1)).innerHTML = player1;
        board[index] = player1;
        currentPlayer = 2;
        document.getElementById('ply2').style.backgroundColor = '#00917c';
        document.getElementById('ply1').style.backgroundColor = 'rgb(207, 21, 21)';
    } else if (currentPlayer === 2) {
        document.getElementById('0' + (index + 1)).innerHTML = player2;
        board[index] = player2;
        currentPlayer = 1;
        document.getElementById('ply1').style.backgroundColor = '#00917c';
        document.getElementById('ply2').style.backgroundColor = 'rgb(207, 21, 21)';

    }
    console.log(board.includes(''));
    if (!board.includes('')) {
        document.getElementById('message').innerHTML = "It's a Draw ¯\_(ツ)_/¯";
    }
    findWinner();
};

function findWinner() {
    let player1Pattern = [];
    let player2Pattern = [];
    let winPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === player1) {
            player1Pattern.push(i);
        }
        if (board[i] === player2) {
            player2Pattern.push(i);
        }
    };

    for (let i = 0; i < winPositions.length; i++) {
        player1Wins = true;
        player2Wins = true;
        for (let j = 0; j < winPositions[i].length; j++) {
            let winPosition = winPositions[i];
            player1Wins = player1Wins && player1Pattern.includes(winPosition[j]);
            player2Wins = player2Wins && player2Pattern.includes(winPosition[j]);
        }
        if (player1Wins) {
            document.getElementById('message').innerHTML = "Player X Wins 🏆";
            player1Score++;
            document.getElementById('player1').innerHTML = player1Score;
            return;
        }
        if (player2Wins) {
            document.getElementById('message').innerHTML = "Player O Wins 🏆";
            player2Score++;
            document.getElementById('player2').innerHTML = player2Score;
            return;
        }
    }

};
function restart() {
    document.getElementById('01').innerHTML = '';
    document.getElementById('02').innerHTML = '';
    document.getElementById('03').innerHTML = '';
    document.getElementById('04').innerHTML = '';
    document.getElementById('05').innerHTML = '';
    document.getElementById('06').innerHTML = '';
    document.getElementById('07').innerHTML = '';
    document.getElementById('08').innerHTML = '';
    document.getElementById('09').innerHTML = '';
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 1;
    document.getElementById('message').innerHTML = '';
    document.getElementById('message').innerHTML = '';
    player1Wins = undefined;
    player2Wins = undefined;
};
