const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.numOfTurns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
    this.currentTurn = {};
    this.begginningTime = new Date()
  }

  returnCurrentCard() {
    return this.deck.cards[this.numOfTurns];
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.returnCurrentCard());
    if (this.currentTurn.evaluateGuess()) {
      this.correctGuesses.push(this.returnCurrentCard());
    } else {
      this.incorrectGuesses.push(this.returnCurrentCard());
    }
    this.numOfTurns++;
    return this.currentTurn.giveFeedback();
  }

  calculatePercentageCorrect() {
    return Math.floor((this.correctGuesses.length / this.deck.countCards()) * 100);
  }

  calculateTimeElapsed() {
  const endTime = new Date();
  const elapsedSeconds = (endTime - this.begginningTime) / 1000 
  const minutes = Math.floor(elapsedSeconds / 60)
  const seconds = Math.round(elapsedSeconds % 60);
  return `${minutes} minutes and ${seconds} seconds`
  }

  endRound() {
    return `Round over you answered ${this.calculatePercentageCorrect()}% of the questions correctly in ${this.calculateTimeElapsed()}!`;
  }
}

module.exports = Round