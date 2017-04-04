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
  }

}

module.exports = Enclosure;