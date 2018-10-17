// Require Letter.js file
var Letter = require('./Letter');

// Word constuctor
// =============================================================================
var Word = function(word) {
    this.word = word;
    this.letters = [];

    this.makeLetters = function() {
        var wordArray = this.word.split('');
        for (var i = 0; i < wordArray.length; i++) {
            var newLetter = new Letter(wordArray[i]);
            this.letters.push(newLetter);
        }
    }

    this.makeGuess = function(guess) {
        this.letters.forEach(letter => {
            letter.checkLetter(guess);
        });
    }

    this.update = function() {
        var printedWord = '';
        this.letters.forEach(letter => {
            printedWord += letter.getCharacter() + ' ';
        });
        return printedWord;
    }
}

module.exports = Word;