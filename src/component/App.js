import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super();

    this.state = {
      memeLimit: 10
    }
     

  }
 
 

  render() {
    
    return (
      <div>
        <h1>Zdravo ja sam Bobi van Kenobi</h1>
      {
        this.props.memes.slice(0,this.state.memeLimit).map((meme,index) => {
          return (
            <h4 key={index}>{meme.name}</h4>
          )
        })
      }
      <div onClick={()=>{ this.setState({memeLimit:this.state.memeLimit+10})}}>Click for more 10</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(App);