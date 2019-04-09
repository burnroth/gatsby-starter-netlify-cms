import React from 'react'
import Img from "gatsby-image"
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
	<div className="columns is-multiline">
		{gridItems.map(item => (
			<div key={item.text} className="column is-3">
				<section className="section">
					<div className="has-text-centered">
						<div
							style={{
								width: '240px',
								display: 'inline-block',
							}}
						>

<Img fluid={item.image1.image.childImageSharp.fluid} alt={item.image1.alt}/>

	</div>
	</div>
	<h2>{item.rubrik}</h2>
	<p>{item.text}</p>
	</section>
	</div>
	))}
	</div>
)

FeatureGrid.propTypes = {
	gridItems: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			information: PropTypes.string,
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			text: PropTypes.string,

		})
	),
}
export default FeatureGrid
