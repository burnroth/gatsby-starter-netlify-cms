import React from 'react'

const Features = ({ gridItems, heading }) => (
  <section id="features">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2
            style={{
              marginBottom: 60,
            }}
          >
            {heading}
          </h2>
        </div>
        {gridItems.map(item => (
          <div key={item.image1.image.id} className="col-12 col-md-3">
            <img
              className="icon"
              src={item.image1.image.publicURL}
              alt={item.rubrik}
            />
            <h4>{item.rubrik}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Features
