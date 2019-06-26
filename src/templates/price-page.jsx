import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ReferenceGrid from "../components/ReferenceGrid";
import SocialProof from "../components/SocialProof";
import SEO from "../components/SEO";
import TrialFormButton from "../components/Buttons/TrialFormButton";

export const PricePageTemplate = ({ title, description, hero, cards }) => {
  return (
    <main id="price">
      <SEO title={title} desc={description} />

      <section id="hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{hero.heading}</h1>
              <p>{hero.subHeading}</p>
            </div>
          </div>
        </div>
      </section>
      <ReferenceGrid />

      <section id="cards">
        <div className="container">
          <div className="row">
            {cards.map(card => (
              <div className="card col-12 col-lg-4"
              >
                <div className="card-body">
                  <p className="card-subtitle mb-2">{card.card.title} </p>
                  <h5 className="card-title">{card.card.heading} </h5>
                  <h1 className="title-light">{card.card.price} </h1>
                  <p dangerouslySetInnerHTML={{ __html: card.card.content }} className="card-text"/>
                </div>
                {card.card.button.href ? (
                    <a href={card.card.button.href} className="btn btn-turq-ghost">
                      {card.card.button.text}
                    </a>
                  ) : (
                    <TrialFormButton wrapperClass="align-self-center" buttonClass="btn-white" buttonText={card.card.button.text} />
                  )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof />
    </main>
  );
};

const PricePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { buttons } = data.translationsJson;
  return (
    <Layout>
      <PricePageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        references={frontmatter.references}
        videoSection={frontmatter.videoSection}
        freeTrial={buttons.freeTrial}
        freeDemo={buttons.freeDemo}
        hero={frontmatter.hero}
        limeGo={frontmatter.cards.limeGo}
        cards={frontmatter.cards}
      />
    </Layout>
  );
};

export default PricePage;

export const pricePageQuery = graphql`
  query PricePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "price-page" } }) {
      frontmatter {
        title
        description
        cards {
          card {
            title
            heading
            price
            priceSmall
            content
            button {
              text
              href
            }
          }
        }
        hero {
          heading
          subHeading
        }
      }
    }
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
  }
`;
