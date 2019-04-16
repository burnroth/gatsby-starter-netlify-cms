import React, { Component } from "react";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  render() {
    const suggestions = this.props.results;
    let suggestionsList = "";

    if (this.state.isClicked) {
      suggestionsList = "";
    } else {
      suggestionsList = 
        <ul style={{ width: 300 }}>
          {suggestions.map(key => (
            <option
              style={{ width: 1200, color: "black", cursor: "pointer" }}
              key={key.id}
              value={key.id}
              onClick={this.props.updateSearchField}
            >
              {key.name + ", " + key.city}
            </option>
          ))}
        </ul>
      ;
    }
    return <div>{suggestionsList}</div>;
  }
}

export default Suggestions;
