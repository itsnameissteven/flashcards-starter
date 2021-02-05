const Card = require('./Card');
const data = require('./data');
const Round = require('./Round');
const Deck = require('./Deck')
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.cards = [];
    this.deck = {};
    this.currentRound = {};
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    prototypeQuestions.forEach(element => this.cards.push(new Card(element.id, element.question, element.answers, element.correctAnswer)));
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;