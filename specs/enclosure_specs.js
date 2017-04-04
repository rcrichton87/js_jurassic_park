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

  it('can remove all dinosaurs of a type', function(){
    enclosure.addDinosaur(trex1);
    enclosure.addDinosaur(trex2);
    enclosure.addDinosaur(velociraptor);
    enclosure.removeType("T-Rex");
    assert.strictEqual(1, enclosure.dinosaurs.length);
  })

  it('can get all dinosaurs with offspring count > 2', function(){
    enclosure.addDinosaur(trex1);
    enclosure.addDinosaur(velociraptor);
    enclosure.addDinosaur(stegosaurus);
    assert.strictEqual(2, enclosure.getFastBreedingDinosaurs().length);
  })

  it('can work out how many dinosaurs after a year, starting with one', function(){
    enclosure.addDinosaur(stegosaurus);
    assert(4, enclosure.numberOfDinosaursAfterYears(1) );
  })

  it('can work out how many dinosaurs after two years, starting with one dinosaur', function(){
    enclosure.addDinosaur(stegosaurus);
    assert(16, enclosure.numberOfDinosaursAfterYears(2) );
  })

  it('can work out how many dinosaurs after two years, starting with two dinosaurs', function(){
    enclosure.addDinosaur(stegosaurus);
    enclosure.addDinosaur(trex1);
    assert(20, enclosure.numberOfDinosaursAfterYears(2) );
  })

})