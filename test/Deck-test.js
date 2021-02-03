const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card')
const Deck = require('../src/Deck') 

describe('Deck', () => {
  const card1 = new Card(124, "What is the worst part of front end coding?", ["javaScript", "html", "css", "refactoring"], "css");
  const card2 = new Card(52, "What is Steven\'s favorite meal of the day?", ["breakfast", "lunch", "dinner"], "breakfast");

  it('should be a function', () => { 
    expect(Deck).to.be.a('function');
  });

  it('should be instatiated with a card array', () => {
    const deck = new Deck([card1, card2]);
    expect(deck.cards).to.deep.equal([card1, card2]);
  });
  
  it('should count how many cards are in the deck', () => {
    const deck = new Deck([card1, card2]);
    expect(deck.countCards()).to.deep.equal(2);
  });
});