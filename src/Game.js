const Card = require('./Card');
const data = require('./data');
const Round = require('./Round');
const Deck = require('./Deck')
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = [];
    prototypeQuestions.forEach(element => cards.push(new Card(element['id'], element['question'], element['answers'], element['correctAnswer'])));
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;