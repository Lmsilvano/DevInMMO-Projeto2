import React from 'react'
import GameDetailContainer from '../Components/GameDetailContent/gameDetailContainer.jsx'
import Main from '../Components/Main/main'
import { GameDetailProvider } from '../contexts/gameDetailContext'
function GamesDetailPage() {
  return (
    <Main
      title={null}
      container={
        <GameDetailProvider>
          <GameDetailContainer />
        </GameDetailProvider>
      }
    />
  )
}

export default GamesDetailPage
