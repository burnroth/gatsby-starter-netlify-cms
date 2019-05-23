import React, { Component } from "react";
class AutoComplete extends Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = event => {
    this.props.getSearchQuery(event.target.value)
  };
  
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.query}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default AutoComplete;
