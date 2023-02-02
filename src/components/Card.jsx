import React from 'react'

const Card = ({title, image, description}) => {
  return (
    <div className="images">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card
