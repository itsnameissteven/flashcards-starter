const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card')
const Deck = require('../src/Deck') 

describe('Deck', function() {
  
  it('should be a function', function() {
    const deck = new Deck() 
    expect(Deck).to.be.a('function')
  });

  it('should be instatiated with a card array', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function", "object"], "object");
    const card2 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
    const deck = new Deck([card1, card2]);
    expect(deck.cards).to.deep.equal([card1, card2]);
  });
  
  it('should count how many cards are in the deck', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function", "object"], "object");
    const card2 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
    const deck = new Deck([card1, card2]);
    expect(deck.countCards()).to.deep.equal(2);
  });
});