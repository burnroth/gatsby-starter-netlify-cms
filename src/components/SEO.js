import React, { Component } from "react";
import Helmet from "react-helmet";
import { lang } from "../../assets/translations/lang";

class SEO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointToSelf: ""
    };
  }

  componentDidMount() {
    this.setState({
      pointToSelf: document.URL
    });
  }

  render() {
    const title = this.props.title;
    const desc = this.props.desc;
    const ogImage = this.props.ogImage;
    const pointToSelf = this.state.pointToSelf;

    const language = lang.language;
    let languageAttribute = "";

    switch (language) {
      case "se":
        languageAttribute = "sv-SE";
        break;
      case "dk":
        languageAttribute = "da-DK";
        break;
      case "no":
        languageAttribute = "nb-NO";
        break;
      case "fi":
        languageAttribute = "fi-FI";
        break;
      case "com":
        languageAttribute = "en-GB";
        break;
      default : languageAttribute = "sv-SE";
    }

    return (
      <Helmet>
        <html lang={languageAttribute} />
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={pointToSelf} />
        <meta name="robots" content="noindex, nofollow"/>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:url" content={pointToSelf} />
        <meta
          property="og:image"
          content={
            ogImage
              ? ogImage
              : "https://lime-crm.se/assets/img/lime-crm-sveriges-basta-crm-system.16838ad4.png"
          }
        />
      </Helmet>
    );
  }
}

export default SEO;
