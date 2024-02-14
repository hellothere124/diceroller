var interval;
var spin;
var player1;
var player2;
var player3;
var player4;

function rollDiceLevel1() {
    var randomNumber = Math.floor(Math.random() * 6)

    if (randomNumber == 0) {
        document.getElementById("randomImage").setAttribute("src", "images/level1_1.png")
    }
    else if (randomNumber == 1) {
        document.getElementById("randomImage").setAttribute("src", "images/level1_2.png")
    }
    else if (randomNumber == 2) {
        document.getElementById("randomImage").setAttribute("src", "images/level1_3.png")
    }
     else if (randomNumber == 3) {
        document.getElementById("randomImage").setAttribute("src", "images/level1_4.png")
    }
    else if (randomNumber == 4) {
        document.getElementById("randomImage").setAttribute("src", "images/level1_5.png")
    }
     else if (randomNumber == 5) {
        document.getElementById("randomImage").setAttribute("src", "images/level1_6.png")
    }
}

function rollDiceLevel2() {
    var randomNumber = Math.floor(Math.random() * 6)

    if (randomNumber == 0) {
        document.getElementById("randomImage").setAttribute("src", "images/level2_1.png")
    }
    else if (randomNumber == 1) {
        document.getElementById("randomImage").setAttribute("src", "images/level2_2.png")
    }
    else if (randomNumber == 2) {
        document.getElementById("randomImage").setAttribute("src", "images/level2_3.png")
    }
     else if (randomNumber == 3) {
        document.getElementById("randomImage").setAttribute("src", "images/level2_4.png")
    }
    else if (randomNumber == 4) {
        document.getElementById("randomImage").setAttribute("src", "images/level2_5.png")
    }
     else if (randomNumber == 5) {
        document.getElementById("randomImage").setAttribute("src", "images/level2_6.png")
    }
}

function rollDiceLevel3() {
    var randomNumber = Math.floor(Math.random() * 6)

    if (randomNumber == 0) {
        document.getElementById("randomImage").setAttribute("src", "images/level3_1.png")
    }
    else if (randomNumber == 1) {
        document.getElementById("randomImage").setAttribute("src", "images/level3_2.png")
    }
    else if (randomNumber == 2) {
        document.getElementById("randomImage").setAttribute("src", "images/level3_3.png")
    }
     else if (randomNumber == 3) {
        document.getElementById("randomImage").setAttribute("src", "images/level3_4.png")
    }
    else if (randomNumber == 4) {
        document.getElementById("randomImage").setAttribute("src", "images/level3_5.png")
    }
     else if (randomNumber == 5) {
        document.getElementById("randomImage").setAttribute("src", "images/level3_6.png")
    }
}
function autoRoll() {
    spin = document.getElementById("spin").value
    player1 = document.getElementById("player1").value
    player2 = document.getElementById("player2").value
    player3 = document.getElementById("player3").value
    player4 = document.getElementById("player4").value

    var counter = 0;

    interval = setInterval(function() {

        if (counter % 4 == 0) document.getElementById("playerName").innerHTML = player1

        if (counter % 4 == 1) document.getElementById("playerName").innerHTML = player2

        if (counter % 4 == 2) document.getElementById("playerName").innerHTML = player3

        if (counter % 4 == 3) document.getElementById("playerName").innerHTML = player4
        
        if (counter < spin) {
            rollDiceLevel1();
        }
        else if  (counter < (spin*2)) {
            rollDiceLevel2();
        }
        else if  (counter < (spin*3)) {
            rollDiceLevel3();
        }

        counter = counter + 1
    }, 5000);  

   

}

function endRoll() {
    clearInterval(interval);
}