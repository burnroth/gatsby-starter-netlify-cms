import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import SolutionsDropdown from "./SolutionsDropdown"
import logo from "../../../static/img/lime-crm-logo.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(prevState => ({
      check: !prevState.check
    }));
  }
  render() {
    const { data } = this.props;
    const { navbar } = data.translationsJson;

    return (
      <nav class="navbar navbar-expand-lg shadow-navbar navbar-default">
        <a class="navbar-brand" href="/">
          <img
            src={logo}
            alt="Vår vackra Lime CRM logo som alla säljare älskar att se"
            class="img-fluid"
            width="50"
            height="50"
          />
        </a>
        <ul class="nav d-block d-lg-none navbar-nav">
          <li class="">
            <a
              href="/signup/"
              id="try-button-nav-mobile"
              type="button"
              class="btn btn-orange btn-signup-mobile"
              name="check"
            >
              Testa gratis
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button">
          <span class="">
            <i class="fas fa-bars fa-2x" />
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item d-none d-lg-block">
              <div class="dropdown">
                <a
                  id="dropdownMenuButton"
                  class="dropdown-toggle nav-link"
                  onClick={this.handleClick}
                  style={{ cursor: "pointer" }}
                >
                  {navbar.solutions.solutions}
                  <span class="caret" />
                </a>

                {this.state.check ? (
                  <SolutionsDropdown props={data} />
                ) : null}
              </div>
            </li>
            <li class="nav-item d-block d-lg-none">
              <a class="nav-link" href="/losningar">
                Funktioner
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/kunder">
                {navbar.customers}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {navbar.pricing}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {navbar.material.material}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {navbar.about}
              </a>
            </li>
          </ul>
        </div>
        <ul class="nav d-none d-lg-flex navbar-nav">
          <li>
            <a
              class="nav-link login-link"
              href="https://go.lime-go.com"
              rel="noopener"
            >
              Logga in
            </a>
          </li>
          <li>
            <button
              id="try-button-nav"
              type="button"
              class="btn btn-orange btn-nav btn-signup"
              data-toggle="modal"
              data-target="#signupModal"
            >
              Testa gratis
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        translationsJson {
          navbar {
            solutions {
              solutions
              standard
              addOns
              GDPR
              verticals
              sales
              utility
              realEstate
              construction
              consultancy
              membership
              machinery
            }
            material {
              material
              whatIsCrm
              blog
            }
            customers
            pricing
            about
          }
        }
      }
    `}
    render={(data, count) => <Navbar data={data} count={count} />}
  />
);
