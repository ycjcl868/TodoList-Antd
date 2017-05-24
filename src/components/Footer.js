import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'
const RadioButton = Radio.Button
const RadioGroup = Radio.Group


export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount() {
    this.props.onFilterChange('SHOW_ALL')
  }
  onChange(e) {
    let name = e.target.value
    this.props.onFilterChange(name)
  }

  render() {
    return (
      <div className="filter">
        <RadioGroup onChange={this.onChange} defaultValue="SHOW_ALL">
          <RadioButton value="SHOW_ALL">All</RadioButton>
          <RadioButton value="SHOW_COMPLETED">Completed</RadioButton>
          <RadioButton value="SHOW_ACTIVE">Active</RadioButton>
        </RadioGroup>
      </div>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}