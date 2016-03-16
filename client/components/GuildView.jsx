TiteeniClicker.Components.GuildView = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      guildData: TiteeniClicker.guilds.findOne({_id: this.props.id.guildId}),
      sponsor: "/Vaadin.png"
    }
  },
  decrementScore(e){
    Meteor.call('decrementScore', this.data.guildData._id);
  },
  incrementScore(e){
    Meteor.call('incrementScore', this.data.guildData._id);
  },
  testForCheating(e){
    e.preventDefault();
    alert("Tämä on klikkeri. Älä paina enteriä senkin kieroilija.")
  },
  render(){
    if(this.data.guildData !== undefined){
      return(
        <div className="guildView">
          <h3>Game sponsored by:</h3>
          <img className="vaadinGame" src={this.data.sponsor}/>
          <div className="guildInfo">
            <h1>{this.data.guildData.guild}</h1>
            <h2 className="guildScore">{this.data.guildData.points}</h2>
            <button className="addScore" onKeyPress={this.testForCheating} onClick={()=> this.incrementScore()}>ZAP</button>
            <button className="decScore" onKeyPress={this.testForCheating} onClick={()=> this.decrementScore()}>ZIP</button>
          </div>
        </div>
      );
    }
    return(
      <div>
        <h1>Loading data...</h1>
      </div>
    )
  }
});
