import React from 'react'
import { StyledFooter } from './styles'
import { BsGithub } from 'react-icons/bs'
function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/Lmsilvano" target="_blank" rel="noreferrer">
        <h4>Desenvolvido por Leandro M. Silvano</h4>
      </a>
      <BsGithub />
    </StyledFooter>
  )
}

export default Footer
