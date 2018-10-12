var inquirer = require('inquirer');

var Letter = function(str, bool) {
    this.str = str;
    this.bool = bool;

    this.isLetterGuessed = function() {
        
    }
    this.checkGuess = function(letter) {

    }
}

var words = ['brian', 'keith', 'andrew', 'mark', 'huynhmai'];
var chosenWord = words[Math.floor(Math.random() * words.length)];
var blanksAndSuccesses = [];
var count = 0;
var wins = 0;
var numGuesses = 10;
var isLetterInWord = false;
var hasFinished = false;

var wordSplit = chosenWord.split('');
var wordLength = wordSplit.length;

for (var i = 0; i < wordLength; i++) {
    blanksAndSuccesses.push('_');
}

console.log(chosenWord)
console.log(wordSplit);
console.log(wordLength);
console.log(blanksAndSuccesses.join(' '));

var promptUser = function() {

    inquirer.prompt([
        {
            name: 'guessedLetter',
            message: 'Guess a letter!'
        }
    ]).then(function(userInput) {
        for (var j = 0; j < wordLength; j++) {
            if (chosenWord[j] === userInput.guessedLetter) {
                isLetterInWord = true;
                blanksAndSuccesses[j] = userInput.guessedLetter; 
            }
        }
        console.log(blanksAndSuccesses.join(' '));
        promptUser();

        if (wordSplit.toString() === blanksAndSuccesses.toString()) {
            console.log('\nYou win!');
        }
    })

}

promptUser();