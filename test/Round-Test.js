const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  
  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should take in a deck of cards', () => {
    const round = new Round();
    expect(round.deck).to.deep.equal(deckOfCards);
  });

  it.skip('should have a default turn value of 0', () => {
    const round = new Round();
    expect(round.turns).to.deep.equal(0)
  })
  
  it.skip('should store incorrect and correct guesses', () => {
    const round = new Round();
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.correctGuesses).to.deep.equal([]);
  });

  describe('Round Methods', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function", "object"], "object");
    const card2 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
    const card3 = new Card(8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function");
    const deckOfCards = new Deck([card1, card2, card3]);
    const round = new Round(deckOfCards);

    it.skip('should return the current card', () => {
      expect(round.returnCurrentCard()).to.deep.equal(card1)
    });

    it.skip('should update turn count', () => {
      round.takeTurn();
      round.takeTurn();
      round.takeTurn();
      expect(round.turns).to.deep.equal(3);
    });

    it.skip('should evaluate answers', () => {
      round.takeTurn('object');
      round.takeTurn()('reduce()');
      round.takeTurn()('callback function');
      expect(round.correctGuesses.length, round.incorrectGuesses.length).to.deep.equal(2, 1);
    });

    it.skip('should store id/s of incorrect answers', () => {
        round.takeTurn()('reduce()');
        expect(round.incorrectGuesses[0].id).to.deep.equal(1);
    });

    it.skip('should give feedback on answers', () => {
      round.takeTurn('object');
      expect(round.takeTurn()).to.deep.equal('correct!');
      round.takeTurn()('reduce()');
      expect(round.takeTurn()).to.deep.equal('incorrect!');
    });

    it.skip('should change current card to next card after turn', () => {
      round.takeTurn('object'); 
      expect(round.returnCurrentCard()).to.deep.equal(card2);
    });

    it.skip('should instantiate a new instance of Turn', () => {
      const turn = round.takeTurn('object');
      expect(turn).to.be.an.instanceOf(Turn);
    });

    it.skip('should calculate the percentage of correct answers', () => {
      round.takeTurn('object');
      round.takeTurn()('reduce()');
      round.takeTurn()('callback function');
      expect(round.calculatePercentaceCorrect()).to.deep.equal(66)
    });

    it.skip('should return a message with percentage correct', () => {
      round.takeTurn('object');
      round.takeTurn()('reduce()');
      round.takeTurn()('callback function');
      expect(round.endRound()).to.deepEqual('Round over you answered 66 % of the questions correctly!');
    });
    
  });
});