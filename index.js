var Word = require('./Word');
var inquirer = require('inquirer');

var wordBank = ['yankees', 'redsox', 'orioles', 'bluejays', 'rays','rangers', 'astros', 'indians', 'athletics', 'mariners', 'whitesox', 'royals', 'angels', 'twins', 'tigers'];
var guesses;
var pickedWords;
var word;
var pickedWord;

function initGame() {
    pickedWords = [];
    console.log('Let\'s play word guess!\n');
    console.log('The theme is: BASEBALL TEAMS!\n');
    console.log('--------------------------');
    playGame();
}

function playGame() {
    pickedWord = '';
    guesses = 15;
    if (pickedWords.length < wordBank.length) {
        pickedWord = getWord();
    }
    else {
        console.log('Homerun! You win!');
        continuePrompt();
    }
    if (pickedWord) {
        word = new Word(pickedWord);
        word.makeLetters();
        makeGuess();
    }
}

function getWord() {
    var rand = Math.floor(Math.random() * wordBank.length);
    var randomWord = wordBank[rand];

    if (pickedWords.indexOf(randomWord) === -1) {
        pickedWords.push(randomWord);
        return randomWord;
    }
    else {
        return getWord();
    }
}

function makeGuess() {
    var checker = [];
    
    inquirer.prompt([
        {
            name: 'guessedLetter',
            message: 'Guess a letter!\n' +
            word.update() +
            '\nGuesses left: ' + guesses + '\n'
        }
    ]).then(function(data) {
        word.letters.forEach(letter => {
        letter.checkLetter(data.guessedLetter);
        checker.push(letter.getCharacter());
        })
        if (guesses > 0 && checker.indexOf('_') !== -1) {
            guesses--;
            if (guesses === 0) {
                console.log('You\'re out! Game over!');
                continuePrompt();
            }
            else {
                makeGuess();
            }
        }
        else {
            console.log('Homerun! You win!');
            console.log(word.update());
            playGame();
        }
    })
}

function continuePrompt() {
    inquirer.prompt([
        {
            name: 'continue',
            type: 'list',
            message: 'Would you like to play again?',
            choices: ['Yes', 'No']
        }
    ]).then(function(data) {
        if (data.continue === 'Yes') {
            initGame();
        }
        else {
            console.log('Thanks for playing!');
        }
    })
}

initGame();