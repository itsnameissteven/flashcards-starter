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
    if (this.currentTurn.evaluateGuess()) {
      this.correctGuesses.push(this.returnCurrentCard());
    } else {
      this.incorrectGuesses.push(this.returnCurrentCard());
    }
    this.turns++;
    return this.currentTurn.giveFeedback();
  }

  calculatePercentageCorrect() {
    return Math.floor((this.correctGuesses.length / this.deck.countCards()) * 100);
  }

  endRound() {
    console.log(`Round over you answered ${this.calculatePercentageCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round