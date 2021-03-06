const deadline = new Date(2016, 3, 19, 21, 0, 0).getTime();

if(Meteor.isClient){
  Meteor.subscribe("guilds");
}

if(Meteor.isServer){
  Meteor.methods({
    incrementScore(guild){
      TiteeniClicker.guilds.update({_id: guild}, {$inc:{points:1}});
      TiteeniClicker.guilds.update({_id: guild}, {$inc:{positives:1}});
    },
    decrementScore(guild){
      TiteeniClicker.guilds.update({_id: guild}, {$inc:{points:-1}});
      TiteeniClicker.guilds.update({_id: guild}, {$inc:{negatives:1}});
    }
  })
}
