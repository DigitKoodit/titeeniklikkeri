TiteeniClicker.Components.LandingComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      guilds: TiteeniClicker.guilds.find().fetch()
    }
  },
  renderGuildsList(){
    return this.data.guilds.map((guild, i) => {
      return <TiteeniClicker.Components.GuildListView key={guild._id} guild={guild} link={false}/>
    });
  },
  render(){
    return(
      <div className="overView">
        {this.renderGuildsList()}
      </div>
    )
  }
})
