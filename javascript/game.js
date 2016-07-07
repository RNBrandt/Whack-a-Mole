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
  getInitialState: function(){
    return {hit: false}
  },
  getInitialState: function(){
    return {molePresent: false}
  },
  makeMole: function(){
    this.setState({molePresent: true});
    console.log("make mole hit");
    setTimeout(function(){this.setState({molePresent: false})}.bind(this), 5000);
    // setTimeout(function(){this.molePresent: false}, 5000);
    // console.log(this.molePresent);
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
  render: function(){
    if (this.state.molePresent){
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
      {this.state.holes.map(this.eachHole)}
      <button onClick={this.startGame} className='btn btn-primary glyphicon'/>
    </div>
    );
  },
  startGame: function(){
    alert('Get Ready to start the game');
  },
  eachHole: function(hole, i){
    return(
    <Hole key={i} index={i} onChange={this.hit}></Hole>
    );
  },
  getInitialState: function(){
    return{
      holes: ['1', '2', '3',
      '4','5','6','7','8']
    };
  }
});
var Counter = React.createClass({
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










