let player = "X";
let grid = new Array(9).fill("-");

function markSquare(button) {
    let mark = player == "X" ? "X" : "O";
    let location = Number(button.id) - 1;
    if (grid[location] != "-") {
        alert("This square is already marked.  Please select another.");
    }
    else {
        grid[location] = mark;
        document.getElementById(button.id).innerHTML = mark;
        let squares;
        
        if (checkRow(location) || checkCol(location) || checkDiag(location)) {
            alert("Player " + player + " won!");
            document.getElementById("status").innerHTML = "Game over: <span class='highlight'>Player " + player + " won</span>";
            squares = document.querySelectorAll(".gridSq");
            for (e of squares) {
                e.disabled = true;
            }
        }
        else if (!grid.some((e) => e == "-")) {
            alert("It is a draw!");
            document.getElementById("status").innerHTML = "Game over: <span class='highlight'>Draw</span>";
            squares = document.querySelectorAll(".gridSq");
            for (e of squares) {
                e.disabled = true;
            }
        }
        else {
            player = player == "X" ? "O" : "X";
            document.getElementById("status").innerHTML = "Game in progress: <span class='highlight'>Player " + player + "\'s turn</span>";
        }
    }
}

function checkRow(location) {
    let start = location - location % 3;
    let row = grid.slice(start, start + 3);
    let result = row.every((e) => e == row[0]);
    if (result) {
        document.getElementById(start + 1).style.backgroundColor = "#a8ccc0";
        document.getElementById(start + 2).style.backgroundColor = "#a8ccc0";
        document.getElementById(start + 3).style.backgroundColor = "#a8ccc0";
    }
    return result;
}

function checkCol(location) {
    let start = location % 3;
    let col = [grid[start], grid[start + 3], grid[start + 6]];
    let result = col.every((e) => e == col[0]);
    if (result) {
        document.getElementById(start + 1).style.backgroundColor = "#a8ccc0";
        document.getElementById(start + 4).style.backgroundColor = "#a8ccc0";
        document.getElementById(start + 7).style.backgroundColor = "#a8ccc0";
    }
    return result;
}

function checkDiag(location) {
    if (location % 2 == 1) return false;
    let diag, result;
    if (location % 4 == 0) {
        diag = [grid[0], grid[4], grid[8]];
        result = diag.every((e) => e == diag[0]);
        if (result) {
            document.getElementById("1").style.backgroundColor = "#a8ccc0";
            document.getElementById("5").style.backgroundColor = "#a8ccc0";
            document.getElementById("9").style.backgroundColor = "#a8ccc0";
            return result;
        }
    }
    if (location == 4 || location % 4 == 2) {
        diag = [grid[2], grid[4], grid[6]];
        result = diag.every((e) => e == diag[0]);
        if (result) {
            document.getElementById("3").style.backgroundColor = "#a8ccc0";
            document.getElementById("5").style.backgroundColor = "#a8ccc0";
            document.getElementById("7").style.backgroundColor = "#a8ccc0";
            return result;
        }
    }
    return false;
}

function restartGame() {
    player = "X";
    grid = new Array(9).fill("-");
    document.getElementById("status").innerHTML = "Game started: <span class='highlight'>Player X goes first</span>";
    let squares = document.querySelectorAll(".gridSq");
    for (e of squares) {
        e.innerHTML = "";
        e.style.backgroundColor = "";
        e.disabled = "";
    }
}


