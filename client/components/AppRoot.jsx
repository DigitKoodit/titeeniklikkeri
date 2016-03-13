TiteeniClicker.Components.AppRoot = React.createClass({
  componentWillMount(){
    console.log("Approot will mount");
  },
  render(){
    return(
      <div>
        {this.props.yield}
        <TiteeniClicker.Components.Footer />
      </div>
    );
  }
});
