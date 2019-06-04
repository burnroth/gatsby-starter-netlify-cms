import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const IconsTemplate = ({edges }) => {
  return (
    <section>
<div className="container">
  <div className="row">
  {edges.map(item => (
        <div key={Math.random()} className="col-1">
          <img src={item.node.publicURL} alt="" />
          <p>{item.node.name}</p>
        </div>
      ))}
  </div>
</div>
    </section>
  );
};

const Icons = ({ data }) => {
  const { allFile } = data;

  return (
    <Layout>
      <IconsTemplate
        edges={allFile.edges}
      />
    </Layout>
  );
};

export default Icons;

export const iconsQuery = graphql`
  query IconsTemplate {
    allFile(filter: { extension: { eq: "svg" } }) {
      edges {
        node {
          id
          name
          publicURL
          absolutePath
        }
      }
    }
  }
`;
