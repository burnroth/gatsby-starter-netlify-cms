import React, { Component } from "react";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const suggestions = this.props.results;

    return (
      <ul style={{ width: 300 }}>
        {suggestions.map(key => (
          <li
            style={{ width: 1200, color: "black", cursor: "pointer" }}
            key={key.id}
            value={key.id}
            onClick={this.props.pass}
          >
            {key.name + ", " + key.city}
          </li>
        ))}
      </ul>
    );
  }
}

export default Suggestions;
