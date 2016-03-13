// Write your package code here!
if(Meteor.isServer){
  Meteor.startup(function(){
    if(TiteeniClicker.guilds.find().fetch().length === 0){
      console.log("Initializing the guilds into empty database");
      let guilds = ["TiTe", "Digit", "Cluster", "Date", "TiK", "OTiT"]
      guilds.map(function(guild){
        TiteeniClicker.guilds.insert({
          guild: guild,
          points: 0,
          positives: 0,
          negatives: 0
        });
      });

    }else{
      console.log("Guilds were initialized beforehand.");
    }
    console.log("Coughing this engine on the road.");
  });
}
