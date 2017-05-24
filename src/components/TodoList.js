import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends Component {
  
  dataEmpty() {
    let filter = this.props.filter
    switch (filter) {
      case 'SHOW_ALL': filter = 'All'; break;
      case 'SHOW_COMPLETED': filter = 'Completed'; break;
      case 'SHOW_ACTIVE': filter = 'Active'; break;
    }
    if(this.props.todos.length === 0) {
      return (
        <li>No {filter} Event</li>
      )
    }
  }
  render() {
    return (
      <ul className='todos-list'>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)} />
        )}
        {this.dataEmpty()}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}