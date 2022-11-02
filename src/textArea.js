import React, { Component } from "react";
import {render} from 'react-dom'
import "./index.css";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text:''
    };
  }

  showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      this.setState({text: e.target.result})
    };
    reader.readAsText(e.target.files[0])
  }

  render = () => {

    return (
    <div className="textBox">
      <h3 className="text">Insert Text File 1</h3>
      <input  type="file" onChange={(e) => this.showFile(e)}/>
      <p className="text">{this.state.text}</p>
    </div>
    )
  }
}

export default App;