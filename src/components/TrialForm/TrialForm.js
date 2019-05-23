import React, { Component } from "react";
import Button from "../Button";
import AutoComplete from "./AutoComplete";
import Suggestions from "./Suggestions";

const API_URL =
  "https://gcqupcrlpd.execute-api.eu-west-1.amazonaws.com/v1/staging/search";

class TrialForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: [],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      companyId: "",
      checked: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getResults = this.getResults.bind(this);
    this.handleUserChoice = this.handleUserChoice.bind(this);
    this.getSearchQuery = this.getSearchQuery.bind(this);
    this.getInfo = this.getInfo.bind(this);
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
        this.getResults(orgArray.data.organizations);
      });
  };

  getResults(results) {
    this.setState({
      results: results
    });
  }

  getSearchQuery(value) {
    this.setState(
      {
        query: value
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
  }

  handleUserChoice(event) {
    this.setState({
      company: event.target.title,
      companyId: event.target.value,
      query: event.target.text
    });
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const endpoint = "https://postb.in/zOfWyxHz";
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      company: this.state.company,
      companyId: this.state.companyId
    };
    const payload = JSON.stringify(data);

    fetch(endpoint, {
      method: "POST",
      body: payload
    })
      .then(console.log("Signup submitted"))
      .catch(err => {
        console.error(err);
      });
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} action="#">
        <div className="form-group form-2col-left">
          <input
            onChange={this.handleInputChange}
            type="text"
            id="formInputFirstName"
            name="firstName"
          />
        </div>
        <div className="form-group form-2col-right">
          <input
            onChange={this.handleInputChange}
            type="text"
            id="formInputLastName"
            name="lastName"
          />
        </div>
        <div id="moreInfoFormAutocompleteContainer" className="form-group">
          <AutoComplete
            query={this.state.query}
            getSearchQuery={this.getSearchQuery}
            getResults={this.getResults}
          />
          <Suggestions
            results={this.state.results}
            handleUserChoice={this.handleUserChoice}
          />
        </div>
        <div className="form-group">
          <input
            onChange={this.handleInputChange}
            type="email"
            id="formInputEmail"
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            onChange={this.handleInputChange}
            type="tel"
            id="formInputTelId"
            name="phone"
          />
          <input type="checkbox" name="checkbox" />
        </div>
        <Button buttonText="Skapa ditt konto" buttonColor="btn-white" />
      </form>
    );
  }
}

export default TrialForm;
