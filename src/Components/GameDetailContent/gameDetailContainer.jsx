import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CommentsProvider } from '../../contexts/commentsContext'
import { GameDetailShowList } from '../../contexts/gameDetailContext'
import Gallery from '../Gallery/gallery'
import GameCommentsContainer from '../GameComments/gameCommentsContainer'
import GameDescription from '../GameDescription/gameDescription'
import SystemRequirements from '../SystemRequirements/systemRequirements'
import { StyledDivContainerGamesDetail } from './styles'

export default function GameDetailContainer() {
  const [game, setGame] = useState()
  const [gameRelease, setGameRelease] = useState()
  const id = useParams()
  const {
    GameDetailReq,
    responseApiGameDetail,
    waitingDT,
  } = GameDetailShowList()
  //
  useEffect(() => {
    GameDetailReq(id.id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (responseApiGameDetail) {
      setGame(responseApiGameDetail)
      setGameRelease(
        responseApiGameDetail.release_date.split('-').reverse().join('/'),
      )
    } else {
      setGame(null)
    }
  }, [responseApiGameDetail])
  //
  if (waitingDT) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  } else if (game) {
    return (
      <StyledDivContainerGamesDetail>
        <div className="gameDetailTitle">
          <h1 className="gameTitle">{game.title}</h1>
          <span>{`(${gameRelease})`}</span>
        </div>
        {game.screenshots.length > 0 && <Gallery img={game.screenshots} />}
        {game.screenshots.length <= 0 && <Gallery img={game.thumbnail} />}
        <GameDescription
          genre={game.genre}
          platform={game.platform}
          desc={game.short_description}
          publisher={game.publisher}
        />
        <SystemRequirements
          os={
            game.minimum_system_requirements &&
            game.minimum_system_requirements.os
          }
          graph={
            game.minimum_system_requirements &&
            game.minimum_system_requirements.graphics
          }
          mem={
            game.minimum_system_requirements &&
            game.minimum_system_requirements.memory
          }
          proc={
            game.minimum_system_requirements &&
            game.minimum_system_requirements.processor
          }
          stor={
            game.minimum_system_requirements &&
            game.minimum_system_requirements.storage
          }
        />
        <CommentsProvider>
          <GameCommentsContainer />
        </CommentsProvider>
      </StyledDivContainerGamesDetail>
    )
  } else {
    return null
  }
}
