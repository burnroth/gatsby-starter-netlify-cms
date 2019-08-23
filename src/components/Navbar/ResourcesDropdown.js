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
      `li[data-name="resourcesDropdown"]` || null
    );
    if (
      !this.node.contains(event.target) &&
      event.target.dataset.name !== "resourcesDropdown"
    ) {
      this.props.close();
    }
  };

  render() {
    const { navbar } = this.props.translations.translationsJson;
    const resourcesArray = navbar.resources.resourcesArray;
    return (
      <div
        className="dropdown"
        style={{ width: 200 }}
        ref={node => (this.node = node)}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <a className="dropdown-heading">
                <b>{navbar.resources.title}</b>
              </a>
              <ul className="list-unstyled">
                {resourcesArray.map(item => {
                  if (item.href.includes("www") || item.href.includes("http")) {
                    return (
                      <li key={Math.random()}>
                        <a className="dropdown-item" href={item.href}>
                          {item.linkText}
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li key={Math.random()}>
                        <Link className="dropdown-item" to={item.href}>
                          {item.linkText}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourcesDropdown;
