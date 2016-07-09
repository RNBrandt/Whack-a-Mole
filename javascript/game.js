// Notes before I begin
// The board will be built using a static image.
// There will be a counter in the upper right hand corner
// The cursor will be shaped like a hammer
// There will be 6 different holes which will always be in the same place.
// At a RANDOM interval between 0 and 1 second, a mole will appear out of one of the Holes.
// If the user hits the mole it will:
   // change it's face to look hurt
   // Increment the counter
// If the User doesn't hit a mole after 0.5 seconds (timing may change)
  // The counter will not increment
  // The face will not change
  // The the mole will disappear.
var score= 0;
var Hole = React.createClass({
  // Proptypes = {

  // },
  getInitialState: function(){
    return {hit: false}
  },
  getInitialState: function(){
    return {molePresent: false}
  },
  makeMole: function(){
    this.setState({molePresent: true});
    console.log(this);
    setTimeout(function(){this.setState({molePresent: false}); this.props.callOut=false;}.bind(this), 5000);
  },
  renderMole: function(){
    return(
      <div className="hole" >
        <Mole></Mole>
      </div>
    );
  },
  renderHole: function(){
    return(
      <div className="hole" onClick={this.makeMole}></div>
    );
  },
  // componentWillMount: function(){
  //   console.log("Made it into the mount")
  //   if (this.props.callOut)
  //     console.log("past callout")
  //     this.makeMole;
  // },
  render: function(){
    console.log("only look after start game button has been pushed")
    if (this.state.molePresent || this.props.callOut){
      return this.renderMole();
    }
    else {
      return this.renderHole();
    }
  }
});

var Mole = React.createClass({
  hit: function(){
    alert('you hit the mole');
  },
  render: function(){
    return(
    <div onClick={
      this.hit
      // this.addScore;
      } className='mole'></div>);
  }
  // addScore: function(counter, i){
  //   return(<Counter key={i} index={i} onChange={this.increment}></Counter>)
  // }
})

var Surface = React.createClass({
  render: function(){
    return (<div className = "surface">
      {this.state.holes}
      <button onClick={this.startGame} className='btn btn-primary glyphicon'/>
    </div>
    );
  },

  componentWillMount() {
    this.returnHoles();
  },

  returnHoles: function() {
    var holeArr = this.state.holes.map(this.eachHole);
    this.setState({holes: holeArr});
  },
  // {this.state.holes.map(this.eachHole)}

  getInitialState: function(){
    return{
      holes: [{id:1}, {id:2}, {id:3},
      {id:4},{id:5},{id:6},{id:7},{id:8}]
    };
  },
  startGame: function(){
    alert('Get Ready to start the game');
    var selected = this.findRandom();
    console.log("This is selected ", selected)
    selected.render();
  },
  findRandom: function(){
    // select a random hole from the bunch
    var arr = this.state.holes
    var rand = [Math.floor(Math.random() * arr.length)];
    var selected = this.state.holes[rand]
    selected.props.callOut=true
    console.log(selected.props.callOut)
    return selected
  },
  eachHole: function(hole, i){
    return(
    <Hole ref={hole.id} index={i} onChange={this.hit} callOut={false}></Hole>
    );
  }
});
var Counter = React.createClass({
  // Use setState
  getInitialState: function(){
    return{
      score
    };
  },
  increment: function(){
  },
  render: function(){
    console.log(this.state.score);
    return (<div className='counter'>{this.state.score}</div>);
  }
});
var Board = React.createClass({
  render: function(){
    return (<div className='board'> <Surface> </Surface>
      <Counter></Counter>
    </div>
    );
  }
})



React.render(<Board></Board>,
    document.getElementById('react-container'));










