import React, { Component } from "react";
import Suggestions from "../components/Suggestions";

const API_URL =
  "https://gcqupcrlpd.execute-api.eu-west-1.amazonaws.com/v1/staging/search";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: []
    };

    this.updateSearchField = this.updateSearchField.bind(this);
  }

  getInfo = () => {
    const postQuery = this.state.query;
    const postBody = JSON.stringify({
      query:
        "query findOrganizations($query: String!) { " +
        "organizations(query: $query) { " +
        "id name city " +
        "}}",
      variables: { query: postQuery }
    });

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: postBody
    })
      .then(response => response.json())
      .then(orgArray => {
        this.setState({
          results: orgArray.data.organizations
        });
      });
  };

  handleInputChange = event => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  updateSearchField(event) {
    this.setState({
      query: event.target.textContent
    });
  }


  render() {
    return (
      <div>
        <input
          type="text"
          autoComplete={false}
          className="form-control"
          id="formInputCompany"
          style={{ width: 300, height: 60, fontSize: 18, color: "black" }}
          value={this.state.query}
          placeholder={this.props.data}
          onChange={this.handleInputChange}
          maxlength="255"
        />
        <Suggestions
          pass={this.updateSearchField}
          results={this.state.results}
        />
      </div>
    );
  }
}

export default Search;
