import React from "react";
import Helmet from "react-helmet";

const lang = "se";

const SEO = ({ title, desc, ogImage, slug }) => (
 
  <Helmet>
    <html lang="en" />
    <title>Lime CRM för {title}</title>
    <meta name="description" content={desc} />

    <link rel="canonical" href="" />
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

    <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
    <meta name="theme-color" content="#fff" />

    <meta property="og:type" content="business.business" />
    <meta property="og:url" content={`https://lime-crm.${lang}${slug}`} />
    <meta property="og:image" content={ogImage ? ogImage : "https://lime-crm.se/assets/img/lime-crm-sveriges-basta-crm-system.16838ad4.png" } />
  </Helmet>
);

export default SEO;
