var Dinosaur = require('./dinosaur.js');

var Enclosure = function(){
  this.dinosaurs = [];
}

Enclosure.prototype = {

  addDinosaur: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  },

  removeType: function(typeToRemove){
    var dinosaursToRemove = [];
    for(var i = 0; i < this.dinosaurs.length; i++){
      if(this.dinosaurs[i].type === typeToRemove){
        dinosaursToRemove.push(this.dinosaurs[i])
      }
    }
    for(var i = 0; i < dinosaursToRemove.length; i++){
      var indexToRemove = dinosaursToRemove[i];
      this.dinosaurs.splice(indexToRemove, 1);
    }
  },

  getFastBreedingDinosaurs: function(){
    var fastBreedingDinosaurs = [];
    for(var i = 0; i < this.dinosaurs.length; i++){
      if(this.dinosaurs[i].childrenPerYear > 2){
        fastBreedingDinosaurs.push(this.dinosaurs[i]);
      }
    }
    return fastBreedingDinosaurs;
  },

  numberOfDinosaursAfterYears: function(years){
    var breedingDinosaurs = [];
    
    for(var y = 0; y < years; y++){

      for(var i = 0; i < this.dinosaurs.length; i++){
        breedingDinosaurs.push(this.dinosaurs[i]);
      }

      for(var i = 0; i < breedingDinosaurs.length; i++){
        var breedingDinosaur = breedingDinosaurs[i];
        for(var eggs = 0; eggs < breedingDinosaur.childrenPerYear; eggs++){
          var babyDinosaur = new Dinosaur(breedingDinosaur.type, breedingDinosaur.childrenPerYear);
          this.dinosaurs.push(babyDinosaur);
        }
      }
      return this.dinosaurs;
    }
  }
}

module.exports = Enclosure;