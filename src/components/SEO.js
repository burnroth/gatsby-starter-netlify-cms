import React from 'react'
import Helmet from 'react-helmet'

const SEO = ({ title, desc, ogImage }) => (
<Helmet

	title={title}
	meta={[
		{
			name: `description`,
			content: desc,
		},
		{
			property: `og:title`,
			content: title,
				},
				{
			property: `og:image`,
			content: ogImage,
		},
		{
			property: `og:description`,
			content: desc,
		},
		{
			property: `og:type`,
			content: `website`,
		},
		{
			name: `twitter:title`,
			content: title,
		},
		{
			name: `twitter:description`,
			content: desc,
		},
	]

	}
	/>

)

export default SEO
