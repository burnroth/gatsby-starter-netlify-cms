import React, { Component } from "react";
import Helmet from "react-helmet";
import { lang } from "../../assets/translations/lang";
import defaultOgImage from '../img/crm-skiss.png'

class SEO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointToSelf: ""
    };
  }
  

  componentWillMount() {

    this.setState({
      pointToSelf: document.URL
    });

    const referrer = document.referrer;

    if (!referrer.includes("lime-crm")) {
      var ref = document.URL;
      var utm = ref.split(/[&?=]+/);
      var utmArray = utm.filter(function(word) {
        if (
          word === "gclid" ||
          word === "fbclid" ||
          word === "msclkid" ||
          word ==="search?q"
        ) {
          return word;
        }
      });
    }

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

    // if (utmArray[0] === "gclid") {
    //   sessionStorage.setItem("Source", "Google Ads");
    // } else if (utmArray[0] === "fbclid") {
    //   sessionStorage.setItem("Source", "Facebook Ads");
    // } else if (utmArray[0] === "msclkid") {
    //   sessionStorage.setItem("Source", "Bing Ads");
    // } else if (utmArray.length === 0) {
    //   var referrer = document.referrer;

    //   if (referrer.length < 40) {
    //     sessionStorage.setItem("Source", referrer);
    //   } else {
    //     sessionStorage.setItem("Source", "Bing Search");
    //   }
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
