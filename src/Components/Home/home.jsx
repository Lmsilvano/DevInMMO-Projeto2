import React from 'react'
import MainSVG from '../../assets/svg/Mainilust'
import NotFoundilust from '../../assets/svg/NotFoundilust'
import HomeNav from './homeNav'
import { StyledSectionHome } from './styles'

function Home({ notFound }) {
  if (notFound) {
    return (
      <StyledSectionHome>
        <NotFoundilust />
        <HomeNav />
      </StyledSectionHome>
    )
  } else {
    return (
      <StyledSectionHome>
        <MainSVG />
        <HomeNav />
      </StyledSectionHome>
    )
  }
}

export default Home
