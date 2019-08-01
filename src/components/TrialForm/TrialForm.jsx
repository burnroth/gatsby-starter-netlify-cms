import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";
import Button from "../Buttons/Button";
import AutoComplete from "./AutoComplete";
import Suggestions from "./Suggestions";
import DataTerms from "./DataTerms";
import lang from "../../../assets/translations/lang.json";
import './style.css'

class TrialForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formID: "trialForm",
      query: "",
      results: [],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      companyId: "",
      dataTerms: false,
      selected: false,
      showDataTerms: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getResults = this.getResults.bind(this);
    this.handleUserChoice = this.handleUserChoice.bind(this);
    this.getSearchQuery = this.getSearchQuery.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.handleDataTerms = this.handleDataTerms.bind(this);
    this.showDataTerms = this.showDataTerms.bind(this);
  }

  getInfo = () => {
    const endpoint =
      "https://gcqupcrlpd.execute-api.eu-west-1.amazonaws.com/v1/staging/search";
    const postQuery = this.state.query;
    const postBody = JSON.stringify({
      query:
        "query findOrganizations($query: String!) { " +
        "organizations(query: $query) { " +
        "id name city " +
        "}}",
      variables: { query: postQuery }
    });

    fetch(endpoint, {
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
        selected: false,
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
      query: event.target.text,
      selected: true
    });
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleDataTerms(event) {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }
  showDataTerms(event) {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }

  handleSubmit(event) {
    const pathName = document.location.pathname;
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      company: this.state.company,
      companyId: this.state.companyId,
      country: lang.shortLang,
      preferredLanguage: lang.lang,
      sessionSource: window.sessionStorage.getItem("Source"),
      source: "pase",
      submitsignup: "",
      tags: [pathName, this.state.formID]
    };
    const endpoint =
      "https://prod-22.westeurope.logic.azure.com:443/workflows/f85f0c53fe7b4403b65415a96dd21ce5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Ue0S_My2ndhazx82nZCuKEUTKPLmiVvVczuz-NUmY4c";
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      cache: "no-cache",
      body: JSON.stringify(data)
    })
      .then(console.log("Signup submitted"))
      .catch(err => {
        console.error(err);
      });
    event.preventDefault();
  }

  render() {
    const form = this.props.data.translationsJson.forms;

    return (
      <form onSubmit={this.handleSubmit} action="#">
        <div className="form-group form-2col-left">
          <input
            onChange={this.handleInputChange}
            className="form-control"
            type="text"
            id="formInputFirstName"
            name="firstName"
            placeholder={form.firstName}
            required
          />
          {}
        </div>
        <div className="form-group form-2col-right">
          <input
            onChange={this.handleInputChange}
            className="form-control"
            type="text"
            id="formInputLastName"
            name="lastName"
            placeholder={form.lastName}
            required
          />
        </div>
        <div className="form-group">
          <AutoComplete
            query={this.state.query}
            getSearchQuery={this.getSearchQuery}
            getResults={this.getResults}
            placeholder={form.company}
            
          />
          {this.state.selected ? null : (
            <Suggestions
              results={this.state.results}
              handleUserChoice={this.handleUserChoice}
            />
          )}
        </div>
        <div className="form-group">
          <input
            onChange={this.handleInputChange}
            className="form-control"
            type="email"
            id="formInputEmail"
            name="email"
            placeholder={form.email}
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={this.handleInputChange}
            className="form-control"
            type="tel"
            id="formInputTelId"
            name="phone"
            placeholder={form.phone}
            required
          />
          <div>
            <input
              type="checkbox"
              name="dataTerms"
              onChange={this.handleDataTerms}
              required
            />
            <a
              onClick={this.showDataTerms}
              name="showDataTerms"
              style={{
                paddingTop: 10,
                marginLeft: 8,
                textAlign: "left",
                display: "inline-block",
                fontSize: "14px",
                cursor: "pointer",
                color: "white"
              }}
            >
              Jag godkänner hur Lime hanterar personuppgifter &#9662;
            </a>
            {this.state.showDataTerms ? <DataTerms /> : null}
          </div>
        </div>
        <div disabled={!this.state.dataTerms} id="maggan" />
        <Button
          disabled={!this.state.dataTerms}
          buttonText="Skapa ditt konto"
          buttonColor="btn-white"
        />
      </form>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query TrialFormQuery {
        translationsJson {
          buttons {
            freeTrial
          }
          forms {
            firstName
            lastName
            company
            email
            phone
            emailMissing
            invalidEmail
            dataTermsMissing
            orgNoMissing
            firstNameMissing
            lastNameMissing
            companyMissing
            phoneMissing
            phoneInvalid
            licenseCountMissinig
            licenseCountInvalid
          }
        }

        markdownRemark(frontmatter: { component: { eq: "TrialModal" } }) {
          frontmatter {
            component
            heading
            description
          }
        }
      }
    `}
    render={(data, count) => <TrialForm data={data} count={count} />}
  />
);
