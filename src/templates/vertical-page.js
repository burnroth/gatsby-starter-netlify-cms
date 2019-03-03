import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BulletList from '../components/BulletList'
import Button from '../components/Button'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const VerticalPageTemplate = ({
	image,
	title,
	heading,
	description,
	blurbs,
  list,
	usp

}) => (
	<section className="section section--gradient">
		<div className="container">
			<div className="section">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<div className="content">
						<h2 className="has-text-weight-semibold is-size-2">
							{title}
							</h2>
							<div className="columns">

								<div className="column is-7">
<Features gridItems={blurbs}/>
	<h3 className="has-text-weight-semibold is-size-2">
		{heading}

	</h3>
	<BulletList listItem={list}/>
	<p>{description}</p>
<PreviewCompatibleImage imageInfo={usp.image1}/>
<h3>{usp.heading}</h3>
<p>{usp.text}</p>
<Button buttonText={usp.string}/>
	</div>
	</div>



	</div>
	</div>
	</div>
	</div>
	</div>
	</section>
)

VerticalPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	description: PropTypes.string,
}

const VerticalPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<VerticalPageTemplate
				image={frontmatter.hero.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				description={frontmatter.description}
				list={frontmatter.hero.list}
				blurbs={frontmatter.intro.blurbs}
				usp={frontmatter.usp}
			/>
		</Layout>
	)
}

VerticalPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default VerticalPage

export const verticalPageQuery = graphql`
	query VerticalPage($id: String!) {
	markdownRemark(id: {eq: $id}) {
		frontmatter {
			title
			heading
			description
			hero {
				heading
				image{
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				list {
					listObject
				}
			}
			intro {
				blurbs {
					image1 {
						alt
						image{
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
					}
					rubrik
					text
				}
				heading
			}
			usp {
				heading
				image1 {
					alt
					image{
					childImageSharp {
						fluid(maxWidth: 448, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				}
				string
				text
			}
		}
	}
}

`
