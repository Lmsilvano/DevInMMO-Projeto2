import React from 'react'
import { StyledDivCardsGames } from './styles'
import { Link } from 'react-router-dom'
function NewsCards({ img, title, desc, id, genre }) {
  return (
    <StyledDivCardsGames>
      <img src={img} alt={`Game ${title} thumbnail`} className="cardIMGame" />
      <div className="cardContentGame">
        <h3>{title}</h3> <h4>{genre}</h4>
        <p>{desc}</p>
      </div>
      <Link to={`/Games/${id}`}>More details</Link>
    </StyledDivCardsGames>
  )
}

export default NewsCards
