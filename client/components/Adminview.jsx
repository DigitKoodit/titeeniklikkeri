TiteeniClicker.Components.AdminView = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      guilds: TiteeniClicker.guilds.find().fetch()
    }
  },
  renderGuildsList(){
    return this.data.guilds.map((guild) => {
      return(
        <tr key={guild._id}>
          <td className="guildList_names"><a href={"/guilds/"+guild._id}>{guild.guild}</a>:</td>
          <td>{guild.points}</td>
          <td>{guild.positives}</td>
          <td>{guild.negatives}</td>

        </tr>
      );
    });
  },
  render(){
    return(
      <div className="overView">
        <div className="situationView">
          <h2 className="pointsTitle">Pistetilanne - Tuomaristonäkymä</h2>
          <table className="currentScore">
            <thead>
              <tr>
                <th className="guildList_names">Kilta</th>
                <th>Pisteet</th>
                <th>Positiiviset</th>
                <th>Negatiiviset</th>
              </tr>
            </thead>
            <tbody>
              {this.renderGuildsList()}
            </tbody>
          </table>
        </div>
        <VaadinSponsor/>
      </div>
    )
  }
});
