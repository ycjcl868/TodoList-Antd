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
  }
  
  componentDidMount() {
    this.textInput.focus();
  }
  handleChange(e){
    console.log(e.target.value)
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }
  
  render() {
    return (
      <div>
        <Input 
            type='text' 
            ref={node => this.textInput = node}  
            name='todoText'
            style={{
              "width": "160px",
              "marginRright": "5px"
            }} 
            value={this.state.todoText}
            onChange={this.handleChange}
        />
        <Button icon="plus" onClick={(e) => this.handleClick(e)}>
          Add
        </Button>
      </div>
    )
  }

  handleClick(e) {
    // console.log(this.state)
    const text = this.state.todoText.trim()
    this.props.onAddClick(text)
    this.setState({todoText:''})
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}