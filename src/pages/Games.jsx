import React from 'react'
import Main from '../Components/Main/main'
import GamesContainer from '../Components/GamesContent/gamesContainer'
import { GamesProvider } from '../contexts/gamesContext'
function GamesPage() {
  return (
    <Main
      title="Games"
      container={
        <GamesProvider>
          <GamesContainer />
        </GamesProvider>
      }
    />
  )
}

export default GamesPage
