Meteor.publish("guilds",function(){
  return TiteeniClicker.guilds.find();
});
