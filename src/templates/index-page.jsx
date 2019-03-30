import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Button from '../components/Button'
import BlogRoll from '../components/BlogRoll'
import References from '../components/References'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
	image,
	title,
	heading,
	description,
	references,
	heroImage

}) => (
	<div>
		<section id="hero" className="gradient">
		<div className="container">
		<div className="row">
		<div className="col-12 justify-content-center">
		<h1>
			<strong>{title}</strong>
		</h1>
		<p>{description}</p>
		</div>
		<div className="btn-wrapper">
<Button buttonText="Testa gratis" buttonColor="btn-white"/>
<Button buttonText="Testa gratis" buttonColor="btn-white-ghost"/>
</div>
		<div className="col-12 mx-auto">
		<PreviewCompatibleImage imageInfo={heroImage}/>
		</div>
		</div>
		</div>

	</section>

		<section id="social-proof">
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h2>Fler än <strong>40 000</strong> användare har redan Lime CRM</h2>
					</div>
				</div>
			</div>
		</section>

<section>
	<div className="container">
	<References refImg={references} /> 
	</div>
</section>

<section id="cases">
<div className="container">
<div className="row">
<BlogRoll/>
</div></div></section>

	</div>
)

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	description: PropTypes.string,
}

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.heroImage}
				title={frontmatter.title}
				heading={frontmatter.heading}
				description={frontmatter.description}
				heroImage={frontmatter.heroImage}
				references={frontmatter.references}
			/>
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
	markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
		frontmatter {
			title
			heading
			description
			heroImage{
					alt
					image{
						childImageSharp {
						fluid(maxWidth: 1920, quality:60) {
							...GatsbyImageSharpFluid
						}
					}
					}
			}
			references {
				image1 {
					alt
					image {
						childImageSharp {
						fluid(maxWidth: 130, quality:60) {
							...GatsbyImageSharpFluid
						}
					}
					}
				}
				}
		}
		}
	}
`
