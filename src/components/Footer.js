import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import logo from "../../static/img/lime-crm-logo.svg";

class Footer extends Component {
  render() {
    const { data } = this.props;
    const { footer } = data.translationsJson;

    const internalLink = key => {
      return (
        <li key={Math.random()}>
          <Link to={key.href}>{key.linkText} </Link>
        </li>
      );
    };
    const externalLink = key => {
      return (
        <li key={Math.random()}>
          <a href={key.href}>{key.linkText} </a>
        </li>
      );
    };

    return (
      <footer>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-3">
              <h6>{footer.about.title.toUpperCase()} </h6>

              <ul className="list-unstyled">
                {footer.about.aboutArray.map(key => {
                  const href = key.href;

                  if (href.includes("www") || href.includes("https")) {
                    return externalLink(key);
                  } else {
                    return internalLink(key);
                  }
                })}
              </ul>
            </div>

            <div className="col-lg-3">
              <h6>{footer.crmSystems.title.toUpperCase()} </h6>

              <ul className="list-unstyled">
                {footer.crmSystems.crmArray.map(key => {
                  const href = key.href;

                  if (href.includes("www") || href.includes("https")) {
                    return externalLink(key);
                  } else {
                    return internalLink(key);
                  }
                })}
              </ul>
            </div>

            <div className="col-lg-3">
              <h6>{footer.investors.title.toUpperCase()} </h6>

              <ul className="list-unstyled">
                {footer.investors.investorsArray.map(key => {
                  const href = key.href;

                  if (href.includes("www") || href.includes("https")) {
                    return externalLink(key);
                  } else {
                    return internalLink(key);
                  }
                })}
              </ul>
            </div>
            <div className="col-lg-2">
              <h6>{footer.language.title.toUpperCase()} </h6>

              <ul className="list-unstyled">
                {footer.language.languageArray.map(key => {
                  const href = key.href;

                  if (href.includes("www") || href.includes("https")) {
                    return externalLink(key);
                  } else {
                    return internalLink(key);
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        translationsJson {
          footer {
            about {
              title
              aboutArray {
                linkText
                href
              }
            }
            crmSystems {
              title
              crmArray {
                linkText
                href
              }
            }
            investors {
              title
              investorsArray {
                linkText
                href
              }
            }
            language {
              title
              languageArray {
                linkText
                href
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Footer data={data} count={count} />}
  />
);
