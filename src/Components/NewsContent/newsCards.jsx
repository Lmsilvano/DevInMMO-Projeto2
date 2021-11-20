import React from 'react'
import { StyledDivCards } from './styles'

function NewsCards({ img, title, desc, link }) {
  return (
    <StyledDivCards>
      <img src={img} alt={`news ${title} thumbnail`} className="cardIMG" />
      <div className="cardContent">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={link} target="_blank" rel="noreferrer">
          More details
        </a>
      </div>
    </StyledDivCards>
  )
}

export default NewsCards
