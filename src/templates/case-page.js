import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CaseTemplate = ({
	content,
	contentComponent,
	description,
	tags,
	title,
	subTitle,
	helmet,
	ogImage,
	blurbImage,
}) => {
	const PostContent = contentComponent || Content

	return (
		<section className="section">
			{helmet || ''}
			<div className="container content">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
							{title}
						</h1>
						<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
							{subTitle}
						</h1>
						<p>{description}</p>
						<PostContent content={content} />
						{tags && tags.length ? (
							<div style={{ marginTop: `4rem` }}>
							<Img fluid={ogImage.childImageSharp.fluid}/>
								<h4>Tags</h4>
								<ul className="taglist">
									{tags.map(tag => (
										<li key={tag + `tag`}>
											<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</section>
	)
}

CaseTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,



}

const Case = ({ data }) => {
	const { markdownRemark: post } = data

	return (
		<Layout>
			<CaseTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Blog">
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name="description"
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
				subTitle={post.frontmatter.subtitle}
				ogImage={post.frontmatter.linkedinbild}
				blurbImage={post.frontmatter.intro.blurbs.image}
			/>
		</Layout>
	)
}

Case.propTypes = {
	blurbImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
}

export default Case

export const pageQuery = graphql`
	query CaseByID($id: String!) {
	markdownRemark(id: {eq: $id }) {
		id
		html
		frontmatter {
			date(formatString: "MMMM DD, YYYY")
			title
			subtitle
			linkedinbild {
	childImageSharp {
		fluid(maxWidth: 500, quality: 100) {
			...GatsbyImageSharpFluid
			presentationWidth
		}
	}
  id
}
	description
	intro {
		blurbs {
			image {
				id
			}
		}
		description
		heading
		image {
			id
		}
	}
	tags
	}
	}
}
`
