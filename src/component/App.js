import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ColoredLine} from './hr';
import './../App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import MemeItem from './MemeItem';
import { Form, FormGroup, FormControl, ControlLabel } from  'react-bootstrap';
class App extends Component {
  constructor(){
    super();

    this.state = {
      memeLimit: 10,
      text0: "",
      text1:""
    }
     

  }

  

  render() {
      
    
    return (
      <div className="container">
        <h1>Generator meme App</h1>
      <div className="forms">
        <Form inline >
        <FormGroup
          
        >
          <ControlLabel>Upper text</ControlLabel>
          <FormControl 
            type="text"
            value={this.state.text0} 
           onChange={(event)=>{this.setState({text0: event.target.value})}}
            
            placeholder="Enter text"
           
          />

      
           <ControlLabel>Bottom text</ControlLabel>
          <FormControl 
            type="text"
            value={this.state.text1}
            onChange={(event)=>{this.setState({text1: event.target.value})}}
            placeholder="Enter text"
           
          />
         <Button onClick={()=> {console.log(this.state.text0+this.state.text1)}} bsSize="large" bsStyle="success">Submit</Button>
        </FormGroup>
      </Form>
      </div>
      <MemeItem state={this.state} />
      
     
     <div className="buttons">      
     <Button className="dugme" bsSize="large" bsStyle="primary" onClick={()=>{ this.setState({memeLimit:this.state.memeLimit+10})}}>+</Button>
    {this.state.memeLimit > 10  &&  <Button className="dugme" bsSize="large" bsStyle="danger" onClick={()=>{ this.setState({memeLimit:this.state.memeLimit-10})}}>-</Button>  } 

</div>
     
     
    
      
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(App);