const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.returnCurrentCard());
    if (this.currentTurn.evaluateGuess()){
      this.correctGuesses.push(this.returnCurrentCard());
    } else{
      this.incorrectGuesses.push(this.returnCurrentCard());
    };
    this.turns++
    return this.currentTurn.giveFeedback()
  }
}

module.exports = Round