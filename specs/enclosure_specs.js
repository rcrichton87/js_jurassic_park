var assert = require('assert');
var Enclosure = require('../enclosure.js');
var Dinosaur = require('../dinosaur.js');

describe('Enclosure', function(){

  var enclosure;
  var trex1;
  var trex2;
  var velociraptor;
  var stegosaurus;

  beforeEach(function(){
    enclosure = new Enclosure();
    trex1 = new Dinosaur("T-Rex", 1);
    trex2 = new Dinosaur("T-Rex", 1);
    velociraptor = new Dinosaur("Velociraptor", 5);
    stegosaurus = new Dinosaur("Stegosaurus", 3);
  })

  it('starts empty', function(){
    assert.strictEqual(0, enclosure.dinosaurs.length);
  })

  it('can add dinosaurs', function(){
    enclosure.addDinosaur(trex1);
    enclosure.addDinosaur(velociraptor);
    assert.strictEqual(2, enclosure.dinosaurs.length);
  })

})