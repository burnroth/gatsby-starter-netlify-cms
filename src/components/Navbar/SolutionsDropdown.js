import React, { Component } from "react";
import { Link } from "gatsby";
/* eslint-disable */
class SolutionsDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    const solutionsDropdown = document.querySelector(
      `a[name=${event.target.name}]`
    );
    if (!this.node.contains(event.target) && !solutionsDropdown ){
      this.props.close();
    }
  };

  render() {
    const { navbar } = this.props.translations.translationsJson;
    const verticalsArray = navbar.solutions.verticals.verticalsArray;
    const landingPageArray = navbar.solutions.landingPages.pageArray;
    return (
      <div
        className="dropdown-menu"
        style={{ display: "block", position: "absolute" }}
        ref={node => (this.node = node)}
      >
        <div className="container-fluid">
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
      </div>
    );
  }
}

export default SolutionsDropdown;
