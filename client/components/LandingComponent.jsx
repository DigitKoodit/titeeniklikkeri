TiteeniClicker.Components.LandingComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      guilds: TiteeniClicker.guilds.find().fetch()
    }
  },
  renderGuildsList(){
    return this.data.guilds.map((guild, i) => {
      return <tr key={guild._id}><td className="guildList_names">{guild.guild}:</td><td className="guildList_points">{guild.points}</td></tr>
    });
  },
  render(){
    return(
      <div className="overView">
        <h2 className="pointsTitle">Pisteet:</h2>
        <table className="currentScore">
          <tbody>
            {this.renderGuildsList()}
          </tbody>
        </table>
        <VaadinSponsor/>
      </div>
    )
  }
})
