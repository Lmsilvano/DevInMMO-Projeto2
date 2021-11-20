import React from 'react'
import NavBar from '../NavBar/navBar'
import { StyledHeader } from './styles'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <div className="logo">
          <span className="logo_sub2">DEV</span>In
          <span className="logo_sub1">MMO</span>
        </div>
      </Link>
      <NavBar />
    </StyledHeader>
  )
}

export default Header
