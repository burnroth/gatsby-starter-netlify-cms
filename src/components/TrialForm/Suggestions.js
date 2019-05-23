import React, { Component } from "react";

class Suggestions extends Component {
  render() {
    return (
      <div>
        {this.props.results.map(result => (
          <option
            key={result.id}
            onClick={this.props.handleUserChoice}
            title={result.name}
            value={result.id}
          >
            {result.name}, {result.city}
          </option>
        ))}
      </div>
    );
  }
}
export default Suggestions;
