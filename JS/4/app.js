let homes, counter = 0;
let game_board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let zero_counter = 0

homes = document.querySelectorAll('.home');
console.log(homes)

function who_win() {
    for (let i = 0; i < 9; i += 3) {
        if (game_board[i] !== 0 && game_board[i] === game_board[i + 1] && game_board[i] === game_board[i + 2]) {
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (game_board[i] !== 0 && game_board[i] === game_board[i + 3] && game_board[i] === game_board[i + 6]) {
            return true;
        }
    }
    if (game_board[2] !== 0 && game_board[2] === game_board[4] && game_board[2] === game_board[6]) {
        return true;
    }

    if (game_board[0] !== 0 && game_board[0] === game_board[4] && game_board[0] === game_board[8]) {
        return true;
    }
    return false;
}

homes.forEach(value => {
    value.addEventListener('click', function(e) {
        const index = e.target.getAttribute("index");
        if (game_board[index] === 0) {
            if (counter % 2 === 0) {
                value.textContent = "X";
                value.style.color = "blue";
                counter += 1;
                game_board[index] = 1;
            } else {
                value.textContent = "O";
                value.style.color = "red";
                counter += 1;
                game_board[index] = 2;
            }
        }

        winner = who_win();
        if (winner) {
            if (counter % 2 === 0) { alert("O won the game") } else { alert("X won the game") }
            homes.forEach(element => {
                element.textContent = "";
                for (let i = 0; i < 9; i++) {
                    game_board[i] = 0;
                }
            });
        }


        for (let i = 0; i < 9; i++) {
            if (game_board[i] === 0) {
                zero_counter += 1;
            }
        }

        if (zero_counter === 0) {
            alert("Equal")
            homes.forEach(element => {
                element.textContent = "";
                for (let i = 0; i < 9; i++) {
                    game_board[i] = 0;
                }
            });
        } else {
            zero_counter = 0;
        }
    });
});