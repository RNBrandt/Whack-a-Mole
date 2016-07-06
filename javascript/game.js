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

var Mole = React.createClass({
  // getInitialState: function(){
  //   return {hit: false}
  // },
  hit: function(){
    alert('you hit the mole');
  },
  render: function(){
    return (
      <div onClick={this.hit} className="mole"></div>
    );
  },
});

var Surface = React.createClass({
  render: function(){
    return (<div className = "surface">
      {this.state.moles.map(this.eachMole)}
    </div>
    );
  },

  eachMole: function(mole, i){
    return(
    <Mole key={i} index={i} onChange={this.hit}>"i"</Mole>
    );
  },
  getInitialState: function(){
    return{
      moles: ['1', '2', '3',
      '4']
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










