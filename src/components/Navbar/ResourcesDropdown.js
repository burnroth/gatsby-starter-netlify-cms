import React, { Component } from "react";
import { Link } from "gatsby";
/* eslint-disable */
class ResourcesDropdown extends Component {
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
     const resourcesDropdown = document.querySelector(
       `a[name="resourcesDropdown"]` || null
     );
    if (!this.node.contains(event.target) && event.target.name !== "resourcesDropdown" ) {
      this.props.close();
    }
  };

  render() {
    const { navbar } = this.props.translations.translationsJson;
    const resourcesArray = navbar.resources.resourcesArray;
    return (
      <div
        className="dropdown"
        style={{ width: 160 }}
        ref={node => (this.node = node)}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <a className="dropdown-heading">
                <b>{navbar.resources.title}</b>
              </a>
              {resourcesArray.map(item => (
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

export default ResourcesDropdown;