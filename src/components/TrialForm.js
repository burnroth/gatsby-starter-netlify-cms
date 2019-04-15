import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Button from '../components/Button';
import AutoComplete from '../components/AutoComplete';





const TrialForm = () => (

  <StaticQuery
    query={graphql`
      query TrialForm {
        formsJson {
          se {
						firstName
						lastName
						company
						email
						phone
            emailMissing
            invalidEmail
            termsMissing
            phoneMissing
            phoneInvalid
            lastNameMissing
            firstNameMissing
            orgNoMissing
            dataTermsMissing
            companyMissing
          }
        }
      }
		`}
		
    render={data => (
			
      <form
        id="formSignupMoreInfo"
        name="formSignupMoreInfo"
        className="topLabel page"
        accept-charset="UTF-8"
        autocomplete="off"
        enctype="multipart/form-data"
        method="post"
        novalidate
        action="#"
      >
        <div className="form-group form-2col-left">
          <input
            type="text"
            className="form-control"
            id="formInputFirstName"
            name="firstName"
            placeholder={data.formsJson.se.firstName}
            spellcheck="false"
            maxlength="200"
          />
        </div>
        <div className="form-group form-2col-right">
          <input
            type="text"
            className="form-control"
            id="formInputLastName"
            name="lastName"
            placeholder={data.formsJson.se.lastName}
            spellcheck="false"
            maxlength="200"
          />
        </div>
        <div id="moreInfoFormAutocompleteContainer" className="form-group">
         <AutoComplete data={data.formsJson.se.company} />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="formInputEmail"
            name="email"
            placeholder={data.formsJson.se.email}
            spellcheck="false"
            maxlength="255"
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            id="formInputTelId"
            name="phone"
            placeholder={data.formsJson.se.phone}
            spellcheck="false"
            maxlength="255"
          />
        </div>
        <div className="form-group d-none">
          <input
            type="text"
            id="signupMoreInfohiddenInputCompanyId"
            name="companyId"
          />
        </div>

        <Button buttonText="Skapa ditt konto" buttonColor="btn-white"/>
        
        
      </form>
    )}
  />
);


export default TrialForm;


