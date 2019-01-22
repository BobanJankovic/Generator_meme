import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newMemes } from './../actions/index';


class MemeItem extends Component {
 constructor(){
    super();

    this.state = {
      hovered:false
    }
  }
  //KAd kliknem treba da dispatchuje new meme
//postMeme(){
//    newMemes()
 //   console.log(this.props)
 // }

  render() {
      
    return (
      <div 
      
      className="holder">
     
        <h6>{this.props.meme.name}</h6>
        <img 
        onMouseEnter = {()=>{ return this.setState({ hovered:true}) }}
        onMouseLeave = {()=>{ return this.setState({ hovered:false}) }} 
        className = {this.state.hovered ? "darken"  : "image" } src={this.props.meme.url} 
        onClick = {()=>this.props.postMeme(this.props.meme)}
        />
        
      </div>

    );
  }
}

function mapStateToProps(state){
  return state;
}
function mapDispatchToProps(dispatch) {
    return({
        postMeme: (meme) => {
          dispatch(newMemes(meme))
          
          }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(MemeItem);


