import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  constructor() {
    super();
    this.state = {
      input: { 
        role: ROLE.CUSTOMER, 
        text: '',
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      input: { text: event.target.value },
    });
  };

  handleSubmit = () => {
    if (this.state.input.text) {
      this.props.sendMessage(this.state.input);
    }
    this.setState({
      input: { text: '' },
    });
  };


  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.input.text}/>
        <button type="button" onClick={this.handleSubmit}>Send</button>
      </footer>
    );
  }
}

export default ChatInput;
