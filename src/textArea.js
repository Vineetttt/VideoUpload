import React, { Component } from "react";
import "./index.css";
class Textareademo extends Component {
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

export default Textareademo;