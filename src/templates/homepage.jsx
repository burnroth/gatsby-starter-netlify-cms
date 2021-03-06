import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import ReferenceGrid from "../components/ReferenceGrid";
import Pyramid from "../components/sections/SEO-sections/Pyramid";
import SocialProof from "../components/SocialProof";
import Hero from "../components/Sections/Heroes/HomepageHero";
import SEO from "../components/SEO";
import VideoWithText from "../components/Sections/VideoSections/VideoWithText";
import WhySection from "../components/Sections/WhySection/WhySection";
import SucceedWithCRM from "../components/Sections/SEO-sections/SucceedWithCRM";
import ResultsFromCRM from "../components/Sections/SEO-sections/ResultsFromCRM";
import FooterCTA from "../components/Sections/FooterCTA";

export const IndexPageTemplate = ({ title, description, whyImages, slug }) => (
  <main id="home">
    <SEO title={title} desc={description} slug={slug} />
    <Hero />
    <ReferenceGrid />
    <SocialProof />
    <VideoWithText />
    <WhySection />
    <BlogRoll />
    <Pyramid />
    <SucceedWithCRM />
    <ResultsFromCRM />
    <FooterCTA />
  </main>
);

const IndexPage = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark;
  const { buttons } = data.translationsJson;
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        heroImage={frontmatter.heroImageHome}
        references={frontmatter.references}
        videoSection={frontmatter.videoSection}
        freeTrial={buttons.freeTrial}
        freeDemo={buttons.freeDemo}
        slug={fields.slug}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    translationsJson {
      buttons {
        freeTrial
        freeDemo
        readMore
        download
        login
      }
      usps {
        numberOfUsers
      }
    }

    markdownRemark(frontmatter: { templateKey: { eq: "homepage" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        heading
        description
      }
    }
  }
`;
