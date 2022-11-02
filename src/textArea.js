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

/*class Textfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      fileName: '',
      fileContent: ''
    };
  }
  handleFileChange = e =>{
    const files = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(files.target.files[0]);
    reader.onload = () =>{
      this.setState({fileName:e.name , fileContent: reader.results});
    }
    reader.onerror = () =>{
      console.log('file erros',reader.error)
    }
  }
  render(){
    return(
      <div>
        <h1>File reader</h1>
        <input type="file" onChange={this.handleFileChange} ></input>
        <br /><br />
        <p>{this.state.fileName}</p>
        <p>{this.state.fileContent}</p>
      </div>
    )
  }
}

export default Textfile*/
/*class Textareademo extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <div className="text">
        <div>
        <textarea
        className="textBox"
          placeholder="Insert text here"
          rows={43}
          cols={75}
        />
        </div>
      </div>
    );
  }
}

export default Textareademo;*/