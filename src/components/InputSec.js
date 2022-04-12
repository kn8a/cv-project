import React, {Component} from 'react';
import '../styles/InputSec.css'

class InputSec extends Component {
  constructor(props) {
    super(props);
    }


  

  render(){
    const id=this.props.fName;
    const label = this.props.lName;
    return (
      <div className='inputDiv'>
        <label for={id}>{label}</label>
        <input id={id}></input>
      </div>
    );
  }
}

export default InputSec;