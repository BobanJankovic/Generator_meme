import React, { Component } from 'react';
import { connect } from 'react-redux';




class MemeItem extends Component {
 
  render() {
    
    return (
      <div>


       {
            this.props.memes.slice(0,this.props.state.memeLimit).map((meme,index) => {
            return (
                <div key={index}>
               
               <div className="holder">
                <h6>{meme.name}  </h6>
                <img className="image" src={meme.url} />
                </div>

                
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

export default connect(mapStateToProps, null)(MemeItem);