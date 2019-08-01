import React, { Component } from "react";
import Helmet from "react-helmet";
import lang from "../../assets/translations/lang.json"
import defaultOgImage from '../img/crm-skiss.png'

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

    const referrer = document.referrer;
    if (!referrer.includes("lime-crm")) {

      const ref = document.URL;
      const utm = ref.split(/[&?=]+/);
      const utmArray = utm.filter(function(word) {
        
        if (
          word === "gclid" ||
          word === "fbclid" ||
          word === "msclkid" ||
          word ==="search?q"
        ) {
          return word;
        }
      });

      switch (utmArray[0]) {
        case "gclid":
          sessionStorage.setItem("Source", "Google Ads");
          break;
        case "fbclid":
          sessionStorage.setItem("Source", "Facebook Ads");
          break;
        case "msclid":
          sessionStorage.setItem("Source", "Bing Ads");
          break;
        case "search?q":
          sessionStorage.setItem("Source", "Bing Search");
          break;
        default:
            sessionStorage.setItem("Source", document.referrer);
          break;
      }
    }
  }

  render() {
    const title = this.props.title;
    const desc = this.props.desc;
    const ogImage = this.props.ogImage;
    const pointToSelf = this.state.pointToSelf;
    const language = lang.lang;
    let languageAttribute = "";

    switch (language) {
      case "swedish":
        languageAttribute = "sv-SE";
        break;
      case "danish":
        languageAttribute = "da-DK";
        break;
      case "norwegian":
        languageAttribute = "nb-NO";
        break;
      case "finnish":
        languageAttribute = "fi-FI";
        break;
      case "english":
        languageAttribute = "en-GB";
        break;
      default:
        languageAttribute = "sv-SE";
    }

    return (
      <Helmet>
        <html lang={languageAttribute} />
        <title>{`Lime CRM - ${title}`}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={pointToSelf} />
        <meta name="robots" content="noindex, nofollow" />
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
          content={ ogImage || defaultOgImage }
        />
      </Helmet>
    );
  }
}

export default SEO;
