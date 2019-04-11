import React, { Component } from "react";
import Suggestions from "../components/Suggestions";
import { Link } from "gatsby";


const API_URL = "https://gcqupcrlpd.execute-api.eu-west-1.amazonaws.com/v1/staging/search";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

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
        "Content-Type" : "application/json"
      },
      body: postBody
    }).then(response => response.json()).then(orgArray => {
        this.setState({
          results: orgArray.data.organizations
        });
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
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

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
