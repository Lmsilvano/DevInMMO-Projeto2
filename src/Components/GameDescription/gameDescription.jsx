import React from 'react'
import { StyledDivGameDesc } from './styles'

function GameDescription({ genre, platform, desc, publisher }) {
  return (
    <StyledDivGameDesc>
      <div className="DescHeader">
        <div className="DescTitle">
          <h2>Genre</h2>
          <p>{genre !== undefined && genre}</p>
        </div>
        <div className="DescTitle">
          <h2>Platform</h2>
          <p>{platform !== undefined && platform}</p>
        </div>
        <div className="DescTitle">
          <h2>Publisher</h2>
          <p>{publisher !== undefined && publisher}</p>
        </div>
      </div>
      <div className="DescBody">
        <h2>Description</h2>
        <p>{desc !== undefined && desc}</p>
      </div>
    </StyledDivGameDesc>
  )
}

export default GameDescription
