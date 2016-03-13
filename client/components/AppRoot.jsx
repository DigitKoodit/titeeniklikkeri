AppRoot = React.createClass({
  componentWillMount(){
    console.log("Approot will mount");
  },
  render(){
    return(
      <div>
        {this.props.yield}
        <Footer />
      </div>
    );
  }
});
