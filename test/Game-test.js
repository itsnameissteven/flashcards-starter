const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', () => {
  const game = new Game();

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should instantiate a new Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });
  
  it('should have default values for cards, deck and current round', () => {
    expect(game.cards).to.deep.equal([]);
    expect(game.deck).to.deep.equal({});
    expect(game.currentRound).to.deep.equal({});
  });

  it('should have a start method', () => {
    expect(game.start).to.be.a('function');
  });

  it('should create a new Round', () => {
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round)
  });

  it('should make a new Deck with Cards', () => {
    game.start();
    expect(game.currentRound.deck).to.be.an.instanceOf(Deck)
  });

  it('should create Cards', () => {
    game.start()
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceOf(Card);
  });
});