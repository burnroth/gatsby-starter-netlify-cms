import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const References = ({ refImg }) => (
	<div className="row">
		{refImg.map(item => (
			<div key={item.image1.image.id} className="col-6 col-md-2">
				<PreviewCompatibleImage imageInfo={item.image1} />
			</div>
		))}
	</div>
)

export default References
