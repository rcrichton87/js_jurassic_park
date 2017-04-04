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

})