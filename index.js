let guess = Math.floor((Math.random() * 100) + 1); 
console.log(guess);

let attempt = 0;
let chances = 6;
let game_status = 1; 

let hints = document.getElementById('hint'); 
let Chances = document.getElementById('chance');

function check() {
    if (game_status === 1) {
        let value = document.forms[0]['num'].value;
      
        chances--; 
        attempt++;

        if (value < guess) {
            hints.innerHTML = "The number is Lower.";
        } else if (value > guess) {
            hints.innerHTML = "The number is Higher.";
        } else {
            hints.innerHTML = "Correct! ";
            document.getElementById('btnn').innerHTML = 'Reset';
            game_status = 0; 
            return; 
        }

        Chances.innerHTML = "Remaining Chances: " + chances;

        if (chances === 0) {
            hints.innerHTML += `Game over! `;
            document.getElementById('btnn').innerHTML = 'Reset';
            game_status = 0; 
        }
    } else {
        reset();
    }
}

function reset() {
    guess = Math.floor((Math.random() * 100) + 1); 
    console.log(guess);
    attempt = 0;
    chances = 10;
    game_status = 1;
    hints.innerHTML = "Game reset! ";
    Chances.innerHTML = "Remaining Chances: " + chances;
    document.getElementById('btnn').innerHTML = 'Check';
    document.getElementById('num').value= "";
}