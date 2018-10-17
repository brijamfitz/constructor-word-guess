// Letter constructor
// =============================================================================
var Letter = function(letter) {
    this.letter = letter;
    this.isGuessed = false;

    this.getCharacter = function() {
        if (!this.isGuessed) {
            return '_';
        }
        else {
            return this.letter;
        }
    }
    this.checkLetter = function(char) {
        if (char === this.letter) {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;