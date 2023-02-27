const secretNumber = Math.floor(Math.random() * (30 - 0 + 1) + 0);
var guessedNumber = prompt("Hi traveler, let's play a game. Guess a number from 0 to 30 and win a big prize. You only have 3 attempts");

for (i = 0; parseInt(guessedNumber) !== secretNumber && i < 2; i++) {
    guessedNumber = prompt(`No, ${guessedNumber} it's not the number. You have ${2-i} attempts left`);
}

if (parseInt(guessedNumber) == secretNumber) {
    console.log("Acertou");
    alert(`Congratulations, you did it! The number is ${secretNumber}. You needed ${i+1} attempts.`);
} else {
    alert(`What a shame, I the number I was thinking is ${secretNumber} `)
}