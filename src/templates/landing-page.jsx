// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/Layout";
// import HomePageHero from "../components/Sections/Heroes/HomepageHero";
// import SEO from "../components/SEO";


// export const IndexPageTemplate = ({
//   title,
//   description,
//   whyImages,
//   slug
// }) => (
//   <div>
//     <SEO title={title} desc={description} slug={slug} />
//     <HomePageHero />
//     <ReferenceGrid />
//     <SocialProof />
//     <VideoWithText />

//     <section id="why">
//       <Features gridItems={whyImages} />
//     </section>

//     <section id="cases">
//       <BlogRoll />
//     </section>
//     <Pyramid />
//   </div>
// );

// const IndexPage = ({ data }) => {
//   const { frontmatter, fields } = data.markdownRemark;
//   return (
//     <Layout>
//       <IndexPageTemplate
//         title={frontmatter.title}
//         description={frontmatter.description}
//         slug={fields.slug}
//       />
//     </Layout>
//   );
// };

// export default IndexPage;

// export const pageQuery = graphql`
//   query IndexPageTemplate {

//     markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         heading
//         description

//       }
//     }
//   }
// `;
