import React from 'react'
import { StyledNavHome } from './styles'
import { CgGames } from 'react-icons/cg'
import { BiNews } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

function HomeNav() {
  return (
    <StyledNavHome>
      <ul className="Nav__UlHome">
        <li className="Nav__LiHome">
          <NavLink className="Nav__LinkHome" to="/News">
            News <BiNews />
          </NavLink>
        </li>
        <li className="Nav__LiHome">
          <NavLink className="Nav__LinkHome" to="/Games">
            Games <CgGames />
          </NavLink>
        </li>
      </ul>
    </StyledNavHome>
  )
}

export default HomeNav
