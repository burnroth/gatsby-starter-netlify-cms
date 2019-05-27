import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Button from "../Button";
import Img from "gatsby-image";
import TrialModal from "../Modals/TrialModal";
import DemoModal from "../Modals/DemoModal";


class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trialModalIsActive: false,
      demoModalIsActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(event) {
    const id = event.target.id;

    if (id === "trial") {
      this.setState({
        trialModalIsActive: true
      });
    } else if(id ==="demo") {
      this.setState({
        demoModalIsActive: true
      });
    }
  }

  closeModal(){
    this.setState({
      trialModalIsActive: false,
      demoModalIsActive: false
    })

  }


  render() {
    const { data } = this.props;
    const { freeDemo, testForFree } = data.translationsJson.buttons;
    const {
      heroImage1,
      heading,
      description
    } = data.markdownRemark.frontmatter;

    return (
      <section id="hero" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-12 justify-content-center">
              <h1 onClick={this.handleClick}>
                <strong>{heading}</strong>
              </h1>
              <p>{description}</p>
            </div>
            <div className="btn-wrapper">
              <Button
                onClick={this.handleClick}
                buttonText={testForFree}
                buttonColor="btn-white"
                id="trial"
              />
              <Button
                onClick={this.handleClick}
                buttonText={freeDemo}
                buttonColor="btn-white-ghost"
                id="demo"
              />
            </div>
            <div className="col-12 mx-auto">
              <Img
                fluid={heroImage1.image.childImageSharp.fluid}
                alt={heroImage1.alt}
              />
              {this.state.trialModalIsActive ? <TrialModal closeModal={this.closeModal} /> : null}
              {this.state.demoModalIsActive ? <DemoModal closeModal={this.closeModal} /> : null}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        translationsJson {
          buttons {
            freeDemo
            testForFree
          }
        }
        markdownRemark(frontmatter: { component: { eq: "Hero" } }) {
          html
          frontmatter {
            component
            heading
            description
            heroImage1 {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 1100, quality: 60) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Hero data={data} count={count} />}
  />
);
