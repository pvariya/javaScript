let player2
let player1

const pL1 = () => {
    player1 = Math.round(Math.random() * 5) + 1;
    document.getElementById("dice1").innerText = player1;
    console.log(player1);
}
const pL2 = () => {
    player2 = Math.round(Math.random() * 5) + 1;
    document.getElementById("dice2").innerHTML = player2;
    pL3(player1, player2)
}

const pL3 = (player1, player2) => {
    if (player1 === player2) {
        document.getElementById("result").innerText = "Draw"
    }
    else if (player1 < player2) {
        document.getElementById("result").innerText = "Player 2 Wins"
    }
    else {
        document.getElementById("result").innerText = "Player 1 Wins"
    }
}

document.getElementById("btn1").addEventListener("click", pL1)
document.getElementById("btn2").addEventListener("click", pL2)
