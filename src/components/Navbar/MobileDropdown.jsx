import React, { Component } from "react";
import { Link } from "gatsby";
/* eslint-disable */
class SolutionsDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navbar } = this.props.translations.translationsJson;
    const verticalsArray = navbar.solutions.verticals.verticalsArray;
    const landingPageArray = navbar.solutions.landingPages.pageArray;
    return (
      <div
        ref={node => (this.node = node)}
        style={{
          position: "absolute",
          backgroundColor: "white",
          zIndex: 1,
          boxShadow: "0px 15px 15px 0px #00000025",
          padding: "16px 16px"
        }}
        className="container-fluid"
      >
        <div className="row">
          <div className="col-12 col-md-4">
            <a className="dropdown-heading">
              <b>{navbar.solutions.landingPages.title}</b>
            </a>
            {landingPageArray.map(item => (
              <Link
                key={Math.random() * 10}
                className="dropdown-item"
                to={item.href}
              >
                {item.linkText}
              </Link>
            ))}
          </div>

          <div className="col-12 col-md-6">
            <a className="dropdown-heading">
              <b>{navbar.solutions.verticals.title}</b>
            </a>
            {verticalsArray.map(item => (
              <Link
                key={Math.random() * 10}
                className="dropdown-item"
                to={item.href}
              >
                {item.linkText}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SolutionsDropdown;
