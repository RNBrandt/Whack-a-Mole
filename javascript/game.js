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

var Hole = React.createClass({
  // getInitialState: function(){
  //   return {hit: false}
  // },
  getInitialState: function(){
    return {molePresent: false}
  },
  makeMole: function(){
    this.setState({molePresent: true});
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
    <div onClick={this.hit} className='mole'></div>);
  }
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
    <Hole key={i} index={i} onChange={this.hit}>"i"</Hole>
    );
  },
  getInitialState: function(){
    return{
      holes: ['1', '2', '3',
      '4','5','6','7','8']
    };
  }
});

var Board = React.createClass({
  render: function(){
    return (<div className='board'> <Surface> </Surface>
    </div>
    );
  }
})



React.render(<Board></Board>,
    document.getElementById('react-container'));










