const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', () => {
  const card = new Card(6, "The mountains are greater than the ocean?", ["true", "false"], "true");

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a user\'s guess', () => {
    const turn = new Turn('false');
    expect(turn.guess).to.deep.equal('false');
  });
  
  it('should instantiate with a class of Card', () => {
    const turn = new Turn('false', card);
    expect(turn.card).to.be.an.instanceOf(Card);
    expect(turn.card).to.equal(card);
  });

  it('should have a return guess method', () => {
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.deep.equal('object');
  });

  it('should return card', () => {
    const turn = new Turn('false', card);
    expect(turn.returnCard()).to.deep.equal({id: 6, question: "The mountains are greater than the ocean?", answers: ["true", "false"], correctAnswer: "true"});
  });

  it('should evaluate guess', () => {
    const turn1 = new Turn('false', card);
    const turn2 = new Turn('true', card);
    expect(turn1.evaluateGuess()).to.deep.equal(false);
    expect(turn2.evaluateGuess()).to.deep.equal(true);
  });

  it('it should give positive feedback', () => {
    const turn = new Turn('true', card);
    expect(turn.giveFeedback()).to.deep.equal('correct!');
  });

  it('should give negative feeback', () => {
    const turn = new Turn('false', card);
    expect(turn.giveFeedback()).to.deep.equal('incorrect!');
  });
});