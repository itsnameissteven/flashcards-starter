const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  
  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it.skip('should store a user guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
  });
  
  it.skip('should instantiate with a class of Card', function() {
    const turn = new Turn('object', card);
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it.skip('should have a return guess method', function() {
    const turn = new Turn('string', card);
    expect(turn.returnGuess()).to.deep.equal('string');
  });

  it.skip('should return card', function() {
    const turn = new Turn('array', card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it.skip('should evaluate guess', function() {
    const turn = new Turn('number', card);
    expect(turn.evaluateguess()).to.deep.equal(true);
  });

  it.skip('it should give positive feedback', function() {
    const turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.deep.equal('correct!')
  });

  it.skip('should give negative feeback', function() {
    const turn = new Turn('array', card) 
    expect(turn.giveFeedBack()).to.deep.equal('incorrect!')
  })
});