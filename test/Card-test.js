const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');

describe('Card', () => {
  const card = new Card(22, 'What is the best food to eat?', ['salad', 'fried rice', 'pizza'], 'pizza');

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  }); 
  
  it('should have a unique id', () => {
    expect(card.id).to.deep.equal(22);
  });

  it('should store a question', () => {
    expect(card.question).to.deep.equal('What is the best food to eat?');
  });  

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['salad', 'fried rice', 'pizza']);
  });  

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.deep.equal('pizza');
  });
});