const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {
  
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a user guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
  });
  
  it('should instantiate with a class of Card', function() {
    const card = new Card(8, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean");
    const turn = new Turn('object', card);
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it('should have a return guess method', function() {
    const card = new Card(8, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean");
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.deep.equal('object');
  });

  it('should return card', function() {
    const card = new Card(8, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean");
    const turn = new Turn('array', card);
    expect(turn.returnCard()).to.deep.equal({id: 8, question: "What does the callback function for find() return?", answers: ["boolean", "array", "object"], correctAnswer: "boolean"});
  });

  it('should evaluate guess', function() {
    const card = new Card(8, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean");
    const turn = new Turn('boolean', card);
    expect(turn.evaluateGuess()).to.deep.equal(true);
  });

  it('it should give positive feedback', function() {
    const card = new Card(8, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean");
    const turn = new Turn('boolean', card);
    expect(turn.giveFeedback()).to.deep.equal('correct!');
  });

  it('should give negative feeback', function() {
    const card = new Card(8, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean");
    const turn = new Turn('array', card) ;
    expect(turn.giveFeedback()).to.deep.equal('incorrect!');
  });
});