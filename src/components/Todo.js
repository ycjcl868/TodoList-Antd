import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Icon } from 'antd'

export default class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          fontWeight: !this.props.completed ? 'bold' : 'normal', 
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        <Icon className='todo-icon' type={this.props.completed ? 'check-circle-o' : 'clock-circle-o'} />
        {this.props.text}
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}