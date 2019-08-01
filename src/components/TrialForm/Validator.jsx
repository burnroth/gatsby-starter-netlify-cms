import React, { Component } from "react";

class Validator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false
    };
  }

  componentDidUpdate() {
    const p = this.props;
    const state = {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      company: false,
      dataTerms: false
    };
    if (p.firstName.length >= 2) {
      state.firstName = true
    }

  }

  render() {
    return <div />;
  }
}

export default Validator;
