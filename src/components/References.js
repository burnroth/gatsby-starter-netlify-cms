import React from 'react'
import Img from "gatsby-image"

const References = ({ refImg }) => (
	<div className="row">
		{refImg.map(item => (
			<div key={item.image1.image.id} className="col-6 col-md-2">
<Img fluid={item.image1.image.childImageSharp.fluid} alt={item.alt}/> 
	</div>
	))}
	</div>
)

export default References
