const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', () => {
  const card1 = new Card(124, "What is the worst part of front end coding?", ["javaScript", "html", "css", "refactoring"], "css");
  const card2 = new Card(52, "What is Steven's favorite meal of the day?", ["breakfast", "lunch", "dinner"], "breakfast");
  const card3 = new Card(6, "The mountains are greater than the ocean?", ["true", "false"], "true");
  const cards = [card1, card2, card3];
  const deckOfCards = new Deck(cards);
  const round = new Round(deckOfCards);

  beforeEach( () => {
    round.numOfTurns = 0;
    round.correctGuesses = [];
    round.incorrectGuesses = [];
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should take in a deck of cards', () => {
    expect(round.deck).to.deep.equal(deckOfCards);
    expect(round.deck).to.be.an.instanceOf(Deck);
  });

  it('should have a default property values', () => {
    expect(round.numOfTurns).to.deep.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.correctGuesses).to.deep.equal([]);
    expect(round.currentTurn).to.deep.equal({});
  });

  describe('Round Methods', () => {

    it('should return the current card', () => {
      expect(round.returnCurrentCard()).to.deep.equal(card1);
    });

    it('should instantiate a new instance of Turn', () => {
      round.takeTurn('html');
      expect(round.currentTurn).to.be.an.instanceOf(Turn);
    });

    it('should update turn count', () => {
      round.takeTurn('css');
      round.takeTurn('dinner');
      round.takeTurn('true');
      expect(round.numOfTurns).to.deep.equal(3);
    });

    it('should evaluate and store correct/ incorrect answers', () => {
      round.takeTurn('css');
      round.takeTurn('dinner');
      round.takeTurn('true');
      expect(round.correctGuesses, round.incorrectGuesses).to.deep.equal([card1, card3], [card2]);
    });

    it('should store ids of incorrect answers', () => {
      round.takeTurn('html');
      expect(round.incorrectGuesses[0].id).to.deep.equal(124);
    });

    it('should give feedback on answers', () => {
      const turn1 = round.takeTurn('css');
      const turn2 = round.takeTurn('lunch');
      expect(turn1).to.deep.equal('correct!');
      expect(turn2).to.deep.equal('incorrect!');
    });

    it('should change current card to next card after turn', () => {
      round.takeTurn('object'); 
      expect(round.returnCurrentCard()).to.deep.equal(card2);
    });

    it('should calculate the percentage of correct answers', () => {
      round.takeTurn('css');
      round.takeTurn('dinner');
      round.takeTurn('true');
      expect(round.calculatePercentageCorrect()).to.deep.equal(66);
    });

    it('should return a message with percentage correct', () => {
      round.takeTurn('css');
      round.takeTurn('dinner');
      round.takeTurn('true');
      expect(round.endRound()).to.deep.equal('Round over you answered 66% of the questions correctly!');
    });
    
  });
});