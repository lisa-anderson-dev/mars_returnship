let table = document.getElementById("board");
let evenVal = 100;
let oddVal;
for (let i = 0; i < 10; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < 10; j++) {
        let cell = row.insertCell(j)
        if (i % 2 == 0) {
            cell.innerHTML = evenVal;
            evenVal--;
        } 
        else {
            cell.innerHTML = oddVal;
            oddVal++;
        }                 
    }
    if (i % 2 == 0) {
        oddVal = evenVal - 9;
        evenVal -= 10;
    }
}

function rollDie() {
    let number = Math.floor(Math.random() * 6) + 1;
    document.getElementById("message").innerHTML = "You rolled a " + number;
    let dots = document.querySelectorAll(".dot");
    for (let i = 0; i < dots.length; i++) {
        if (number == 1) {
            if (i == 4) {
                dots[i].style.visibility = "visible";
            }
            else {
                dots[i].style.visibility = "hidden";
            }
        }
        else if (number == 2) {
            if (i == 0 || i == 8) {
                dots[i].style.visibility = "visible";
            }
            else {
                dots[i].style.visibility = "hidden";
            }
        }
        else if (number == 3) {
            if (i == 0 || i == 4 || i == 8) {
                dots[i].style.visibility = "visible";
            }
            else {
                dots[i].style.visibility = "hidden";
            }
        }
        else if (number == 4) {
            if (i == 0 || i == 2 || i == 6 || i == 8) {
                dots[i].style.visibility = "visible";
            }
            else {
                dots[i].style.visibility = "hidden";
            }
        }
        else if (number == 5) {
            if (i == 0 || i == 2 || i== 4 || i == 6 || i == 8) {
                dots[i].style.visibility = "visible";
            }
            else {
                dots[i].style.visibility = "hidden";
            }
        }
        else {
            if (i == 0 || i == 2 || i == 3 || i== 5 || i == 6 || i == 8) {
                dots[i].style.visibility = "visible";
            }
            else {
                dots[i].style.visibility = "hidden";
            }
        }
    }
}