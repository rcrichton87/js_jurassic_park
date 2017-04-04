var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("T-Rex", 1);
  })

  it('has a type', function(){
    assert.strictEqual("T-Rex", dinosaur.type);
  })

  it('has a number of children per year', function(){
    assert.strictEqual(1, dinosaur.childrenPerYear);
  })

})