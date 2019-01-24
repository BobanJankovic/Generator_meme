import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { newMemes } from './../actions/index';


class NewMemeItem extends Component {
 
 

  render() {
      
    return (
      <div>

     {console.log(this.props.myMemes)}


     {
          this.props.myMemes.map((meme,index) => {
            return (
              <div className="newMemeHolder"  key={index}>
              <h5>{meme.text0}</h5>
              <img className="newMemepic" src={meme.meme.url} alt="Smiley face" height="120" width="120"/>
              <h5 className="donji">{meme.text1}</h5>
                
              </div>
            )
          })
        }
       
        
      </div>

    );
  }
}
function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(NewMemeItem);


