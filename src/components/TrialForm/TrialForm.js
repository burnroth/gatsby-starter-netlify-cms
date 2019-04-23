import React, { Component } from "react";
import Button from "../Button";
import AutoComplete from "./AutoComplete";

class TrialForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      companyId: "",
      checked: false
    };

    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCompanyInfo = this.getCompanyInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    const endpoint = "https://postb.in/zOfWyxHz";
    const payload = JSON.stringify(this.state);

    fetch(endpoint, {
      method: "POST",
      body: payload
    }).then(console.log("Tack för att du signade upp")).catch(err => {
      console.error("Connection problems")
    })
    event.preventDefault();
  }

 getCompanyInfo(event) {
   this.setState({
     company: event.target.text,
     companyId: event.target.value
   })
   console.log(this.state.company)
 }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {

return (
      <form
        onSubmit={this.handleSubmit}
        id="formSignupMoreInfo"
        name="formSignupMoreInfo"
        autoComplete="off"
        className="topLabel page"
        encType="multipart/form-data"
        method="post"
        noValidate
        action="#"
      >
        <div className="form-group form-2col-left">
          <input
            type="text"
            className="form-control"
            id="formInputFirstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group form-2col-right">
          <input
            type="text"
            className="form-control"
            id="formInputLastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </div>
        <div id="moreInfoFormAutocompleteContainer" className="form-group">
        <AutoComplete getCompanyInfo={this.getCompanyInfo} />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="formInputEmail"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            id="formInputTelId"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
          <input type="checkbox" name="checkbox" onChange={this.handleInputChange}/>
        </div>
    

        <Button buttonText="Skapa ditt konto" buttonColor="btn-white" />
      </form>
    );

  }
}

export default TrialForm;
