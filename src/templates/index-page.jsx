import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Button from '../components/Button'
import References from '../components/References'

export const IndexPageTemplate = ({
	image,
	title,
	heading,
	description,
	references

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
		</div>
		</div>
<div className="btn-wrapper">
<Button buttonText="Testa gratis" buttonColor="btn-white"/>
<Button buttonText="Testa gratis" buttonColor="btn-white-ghost"/></div>
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
			references {
				image1 {
					alt
					image {
						childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
						id
					}
				}
				}
		}
		}
	}
`
