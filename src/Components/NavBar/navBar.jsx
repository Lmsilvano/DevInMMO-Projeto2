import React from 'react'
import { StyledNav } from './styles'
import { CgGames } from 'react-icons/cg'
import { BiNews } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <StyledNav>
      <ul className="Nav__Ul">
        <li className="Nav__Li">
          <NavLink
            className={(data) =>
              data.isActive ? 'Nav__Link active' : 'Nav__Link'
            }
            to="/News"
          >
            News <BiNews />
          </NavLink>
        </li>
        <li className="Nav__Li">
          <NavLink
            className={(data) =>
              data.isActive ? 'Nav__Link active' : 'Nav__Link'
            }
            to="/Games"
          >
            Games <CgGames />
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  )
}

export default NavBar
