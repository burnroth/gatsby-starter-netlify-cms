import React from 'react'

const BulletList = ({ listItem }) => (
  <ul className="columns is-multiline">
    {listItem.map(item => (
      <li key={item.listObject}>{item.listObject}</li>
    ))}
  </ul>
)

export default BulletList
