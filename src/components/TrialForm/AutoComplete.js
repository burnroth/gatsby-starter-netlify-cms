import React, { Component } from 'react'
class AutoComplete extends Component {
  handleInputChange = event => {
    this.props.getSearchQuery(event.target.value)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          value={this.props.query}
          onChange={this.handleInputChange}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

export default AutoComplete