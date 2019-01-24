import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  createMeme } from './../actions/index';


class MemeItem extends Component {
 constructor(){
    super();

    this.state = {
      hovered:false
    }
  }
  

  postMeme() {
    console.log(this.props)
    const text0 = this.props.text0;
    const text1 = this.props.text1;
    const memeObj = {
      template_id: this.props.meme.id,
      text0,
      text1
    }
    this.props.createMeme(memeObj);
  }
  render() {
      
    return (
      <div 
    
      className="holder">
     
        <h6>{this.props.meme.name}</h6>
        <img 
        onMouseEnter = {()=>{ return this.setState({ hovered:true}) }}
        onMouseLeave = {()=>{ return this.setState({ hovered:false}) }} 
        className = {this.state.hovered ? "darken"  : "image" } src={this.props.meme.url} 
        onClick = {()=>this.postMeme()}
        />
        
      </div>

    );
  }
}
// na klik smo ubacili u store meme e sada treba napraviti komponentu koja ce prikazivati svaki kliknuti meme iznad forme kasije koristimo post metodu da pokupimo ono iz forme i da to napise na slici i verovatno takvu sliku da ubacimo u store ili gde vec
function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, {createMeme})(MemeItem);


