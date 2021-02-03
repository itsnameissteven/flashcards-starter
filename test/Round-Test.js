const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function", "object"], "object");
  const card2 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
  const card3 = new Card(8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function");
  
  
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should take in a deck of cards', () => {
    const deckOfCards = new Deck([card1, card2, card3]);
    const round = new Round(deckOfCards);
    expect(round.deck).to.deep.equal(deckOfCards);
  });

  it('should have a default turn value of 0', () => {
    const deckOfCards = new Deck([card1, card2, card3]);
    const round = new Round(deckOfCards);
    expect(round.turns).to.deep.equal(0)
  });
  
  it('should store incorrect and correct guesses', () => {
    const deckOfCards = new Deck([card1, card2, card3]);
    const round = new Round(deckOfCards);
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.correctGuesses).to.deep.equal([]);
  });

  describe('Round Methods', function() {

    it('should return the current card', () => {
      const deckOfCards = new Deck([card1, card2, card3]);
      const round = new Round(deckOfCards);
      expect(round.returnCurrentCard()).to.deep.equal(card1)
    });

    it('should instantiate a new instance of Turn', () => {
      const deckOfCards = new Deck([card1, card2, card3]);
      const round = new Round(deckOfCards);
      round.takeTurn('object');
      expect(round.currentTurn).to.be.an.instanceOf(Turn);
    });

    it('should update turn count', () => {
      const deckOfCards = new Deck([card1, card2, card3]);
      const round = new Round(deckOfCards);
      round.takeTurn();
      round.takeTurn();
      round.takeTurn();
      expect(round.turns).to.deep.equal(3);
    });

    it('should evaluate answers', () => {
      const deckOfCards = new Deck([card1, card2, card3]);
      const round = new Round(deckOfCards);
      round.takeTurn('object');
      round.takeTurn('reduce()');
      round.takeTurn('callback function');
      expect(round.correctGuesses.length, round.incorrectGuesses.length).to.deep.equal(2, 1);
    });

    it('should store id/s of incorrect answers', () => {
      const deckOfCards = new Deck([card1, card2, card3]);
      const round = new Round(deckOfCards);
      round.takeTurn('reduce()');
      expect(round.incorrectGuesses[0].id).to.deep.equal(1);
    });

    it('should give feedback on answers', () => {
      const deckOfCards = new Deck([card1, card2, card3]);
      const round = new Round(deckOfCards);
      const turn1 = round.takeTurn('object');
      const turn2 = round.takeTurn('reduce()');
      expect(turn1).to.deep.equal('correct!');
      expect(turn2).to.deep.equal('incorrect!');
    });

    it('should change current card to next card after turn', () => {
      const deckOfCards = new Deck([card1, card2, card3]);
      const round = new Round(deckOfCards);
      round.takeTurn('object'); 
      expect(round.returnCurrentCard()).to.deep.equal(card2);
    });

    it('should calculate the percentage of correct answers', () => {
      const deckOfCards = new Deck([card1, card2, card3]);
      const round = new Round(deckOfCards);
      round.takeTurn('object');
      round.takeTurn('reduce()');
      round.takeTurn('callback function');
      expect(round.calculatePercentageCorrect()).to.deep.equal(66)
    });

    it.skip('should return a message with percentage correct', () => {
      const deckOfCards = new Deck([card1, card2, card3])
      const round = new Round(deckOfCards);
      round.takeTurn('object');
      round.takeTurn('reduce()');
      round.takeTurn('callback function');
      expect(round.endRound()).to.deep.equal('Round over you answered 66% of the questions correctly!');
    });
    
  });
});