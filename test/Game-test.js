const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Game', function() {

  it.skip('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it.skip('it should instantiate a new Game', () => {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it.skip('should have a start method', () => {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });

  it.skip('should create Cards', () => {
    const game = new Game();
    game.start()
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceOf(Card);
  });

  it.skip('should make a new Deck with Cards', () => {
    const game = new Game();
    game.start();
    expect(game.currentRound.deck).to.be.an.instanceOf(Deck)
  });

});