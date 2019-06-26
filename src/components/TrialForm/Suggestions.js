import React, { Component } from 'react'

class Suggestions extends Component {
  render() {
    return (
      <div className="suggestions-list shadow">
        {this.props.results.map(result => (
          <option
            key={result.id}
            onClick={this.props.handleUserChoice}
            title={result.name}
            value={result.id}
            className="suggestion"
          >
            {result.name}, {result.city}
          </option>
        ))}
      </div>
    )
  }
}
export default Suggestions
