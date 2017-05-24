import { Button, Input } from 'antd'
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoText: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handlerKeyUp = this.handlerKeyUp.bind(this)
  }
  
  componentDidMount() {
    this.textInput.focus();
  }
  handleChange(e) {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }
  handlerKeyUp(e) {
    if (e.keyCode == 13) {
      this.handleClick()
    }
  }
  handleClick() {
    // console.log(this.state)
    const text = this.state.todoText.trim()
    this.props.onAddClick(text)
    this.setState({ todoText:'' })
  }  
  render() {
    return (
      <div className='input-wrapper'>
        <Input 
            className='event-input'
            type='text' 
            ref={node => this.textInput = node}  
            name='todoText'
            value={this.state.todoText}
            onChange={this.handleChange}
            onKeyUp={this.handlerKeyUp}
        />
        <Button className='add-btn' icon="plus-circle-o" onClick={(e) => this.handleClick(e)}>
          Add
        </Button>
      </div>
    )
  }


}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}