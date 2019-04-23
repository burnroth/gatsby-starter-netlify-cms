import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import logo from "../../assets/se/img/logo.png";

class Navbar extends Component {
  render() {
const { data } = this.props;
const { navbar } = data.translationsJson; 


    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
      {console.log(navbar)}
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "50px" }} />
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about" />
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered" />
          </div>
        </div>
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
