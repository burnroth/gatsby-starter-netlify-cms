import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import SolutionsDropdown from "./SolutionsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import MobileDropdown from "./MobileDropdown";
import logo from "../../../static/img/lime-crm-logo.svg";
import menu from "../../../static/img/menu.svg";
import Button from "../Button";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      solutionsDropdown: false,
      resourcesDropdown: false,
      navbarToggler: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
  }

  handleClick(event) {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }

  close() {
    this.setState({
      solutionsDropdown: false,
      resourcesDropdown: false,
      navbarToggler: false
    });
  }

  render() {
    const { data } = this.props;
    const { navbar } = data.translationsJson;
    const { buttons } = data.translationsJson;
    const { metaData } = data.translationsJson;

    return (
      //  <nav class="navbar navbar-expand-lg shadow-navbar navbar-default">
      //    <Link class="navbar-brand" to="/">
      //      <img
      //        src={logo}
      //        alt={metaData.logoAltText}
      //        class="img-fluid"
      //        width="50"
      //        height="50"
      //      />
      //    </Link
      //    <ul class="nav d-block d-lg-none navbar-nav">
      //      <li class="">
      //        <Link
      //          to="/signup/"
      //          id="try-button-nav-mobile"
      //          type="button"
      //          class="btn btn-turq"
      //          name="check"
      //        >
      //          {buttons.testForFree}
      //        </Link>
      //      </li>
      //    </ul
      //    <button class="navbar-toggler" type="button">
      //      <span class="">|||</span>
      //    </button
      //    <div class="collapse navbar-collapse" id="navbarNav">
      //      <ul class="navbar-nav">
      //        <li class="nav-item d-none d-lg-block">
      //          <div class="dropdown">
      //            <Link
      //              id="dropdownMenuButton"
      //              name="solutionsDropdown"
      //              class="dropdown-toggle nav-link"
      //              onClick={this.handleClick}
      //              style={{ cursor: "pointer" }}
      //              to="#"
      //            >
      //              {navbar.solutions.title}
      //              <span class="caret" />
      //            </Link>
      //            {this.state.solutionsDropdown ? (
      //              <SolutionsDropdown
      //                close={this.close}
      //                handleClick={this.handleClick}
      //                translations={data}
      //              />
      //            ) : null}
      //          </div>
      //        </li>
      //        <li class="nav-item d-block d-lg-none">
      //          <Link class="nav-link" href={navbar.solutions.href}>
      //            {navbar.solutions.title}
      //          </Link>
      //        </li>
      //        <li class="nav-item">
      //          <Link class="nav-link" href={navbar.customers.href}>
      //            {navbar.customers.title}
      //          </Link>
      //        </li>
      //        <li class="nav-item">
      //          <Link class="nav-link" href={navbar.pricing.href}>
      //            {navbar.pricing.title}
      //          </Link>
      //        </li>
      //        <li class="nav-item">
      //          <div class="dropdown">
      //            <Link
      //              name="resourcesDropdown"
      //              class="dropdown-toggle nav-link"
      //              onClick={this.handleClick}
      //              style={{ cursor: "pointer" }}
      //              to="#"
      //            >
      //              {navbar.resources.title}
      //              <span class="caret" />
      //            </Link>
      //            {this.state.resourcesDropdown ? (
      //              <ResourcesDropdown
      //                close={this.close}
      //                handleClick={this.handleClick}
      //                translations={data}
      //              />
      //            ) : null}
      //          </div>
      //        </li>
      //        <li class="nav-item">
      //          <Link class="nav-link" href={navbar.about.href}>
      //            {navbar.about.title}
      //          </Link>
      //        </li>
      //      </ul>
      //    </div>
      //    <ul class="nav d-none d-lg-flex navbar-nav">
      //      <li>
      //        <Link
      //          class="nav-link login-link"
      //          href="https://go.lime-go.com"
      //          rel="noopener"
      //        >
      //          {buttons.login}
      //        </Link>
      //      </li>
      //      <li>
      //        <button
      //          id="try-button-nav"
      //          type="button"
      //          class="btn btn-orange btn-nav btn-signup"
      //          data-toggle="modal"
      //          data-target="#signupModal"
      //        >
      //          {buttons.testForFree}
      //        </button>
      //      </li>
      //    </ul>
      //  </nav>
      <div>
        <nav className="d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-3 col-lg-1 align-items-center">
                <Link class="navbar-brand" to="/">
                  <img
                    src={logo}
                    alt={metaData.logoAltText}
                    class="img-fluid d-flex align-self-center"
                    width="50"
                    height="50"
                  />
                </Link>
              </div>
              <div className="col-6 col-lg-7 d-flex">
                <div className="align-items-center d-none d-lg-flex">
                  <div style={{ position: "relative" }}>
                    <Link
                      name="solutionsDropdown"
                      class="dropdown-toggle nav-link"
                      onClick={this.handleClick}
                      style={{ cursor: "pointer" }}
                      to="#"
                    >
                      {navbar.solutions.title}
                      <span class="caret" />
                    </Link>
                    {this.state.solutionsDropdown ? (
                      <SolutionsDropdown
                        close={this.close}
                        handleClick={this.handleClick}
                        translations={data}
                      />
                    ) : null}
                  </div>
                  <Link class="nav-link" to={navbar.customers.href}>
                    {navbar.customers.title}
                  </Link>
                  <Link class="nav-link" to={navbar.pricing.href}>
                    {navbar.pricing.title}
                  </Link>
                  <div style={{ position: "relative" }}>
                    <Link
                      name="resourcesDropdown"
                      class="dropdown-toggle nav-link"
                      onClick={this.handleClick}
                      style={{ cursor: "pointer" }}
                      to="#"
                    >
                      {navbar.resources.title}
                      <span class="caret" />
                    </Link>
                    {this.state.resourcesDropdown ? (
                      <ResourcesDropdown
                        close={this.close}
                        handleClick={this.handleClick}
                        translations={data}
                      />
                    ) : null}
                  </div>
                  <Link to="#">Halloj</Link>
                </div>

                <Button
                  buttonClass="d-flex d-lg-none mx-auto"
                  buttonText="Testa gratis"
                />
              </div>
              <div className="col-3 col-lg-4 d-flex">
                <img
                  className="d-flex d-lg-none mx-auto align-self-center"
                  width="30"
                  height="30"
                  src={menu}
                  alt="menu"
                  name="navbarToggler"
                  onClick={this.handleClick}
                />
                <div style={{ width: "100%" }} className="d-none d-lg-flex justify-content-around align-items-center">
                  <Link style={{ display: "flex" }} >{navbar.contact}</Link>
                  <Button buttonClass="d-flex" buttonText={navbar.alreadyCustomer} />
                </div>
              </div>
            </div>
          </div>
        </nav>
        {this.state.navbarToggler ? (
          <MobileDropdown
            close={this.close}
            handleClick={this.handleClick}
            translations={data}
          />
        ) : null}
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        translationsJson {
          metaData {
            logoAltText
          }
          buttons {
            login
            testForFree
          }
          navbar {
            solutions {
              title
              landingPages {
                title
                pageArray {
                  linkText
                  href
                }
              }
              verticals {
                title
                verticalsArray {
                  linkText
                  href
                }
              }
            }
            resources {
              title
              resourcesArray {
                linkText
                href
              }
            }
            customers {
              title
              href
            }
            pricing {
              title
              href
            }
            about {
              title
              href
            }
            contact
            alreadyCustomer
          }
        }
      }
    `}
    render={(data, count) => <Navbar data={data} count={count} />}
  />
);
