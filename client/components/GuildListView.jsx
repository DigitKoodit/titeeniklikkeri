TiteeniClicker.Components.GuildListView = React.createClass({
  render(){
    if(this.props.link){
      return(
        <div>
          <a href={"/guilds/"+this.props.guild._id}>{this.props.guild.guild} pisteet tällä hetkellä: {this.props.guild.points} id: {this.props.guild._id}</a>
        </div>
      );
    }
    return(
      <div>
        <p>{this.props.guild.guild} pisteet tällä hetkellä: {this.props.guild.points} id: {this.props.guild._id}</p>
      </div>
    );
  }
})
