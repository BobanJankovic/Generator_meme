import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { newMemes } from './../actions/index';


class NewMemeItem extends Component {
 
 

  render() {
      
    return (
      <div>

     {console.log(this.props.myMemes)}

  bobikenovi
      
       {
       this.props.myMemes.map((meme,index) => {
          return (
            <div className="newMemeHolder"  key={index}>
            
            <img className="newMemepic" src={meme.data.url} alt="Smiley face" height="120" width="120"/>
              
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
/*




      
      */ 