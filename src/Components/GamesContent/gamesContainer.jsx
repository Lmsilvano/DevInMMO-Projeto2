import React, { useEffect, useState, useMemo } from 'react'
import { StyledDivContainerGames, StyledDivInputGames } from './styles'
import { GamesShowList } from '../../contexts/gamesContext'
import GamesCards from './gamesCards'
function GamesContainer() {
  const { GamesListReq, responseApiGames } = GamesShowList()
  const [GamesData, setDataGames] = useState([])
  const [filterGames, setFilterGames] = useState('')
  // prettier-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => GamesListReq(), [])
  // prettier-ignore
  useEffect(() => {
    (function () {
    setDataGames(responseApiGames)
  })()
}, [responseApiGames])
  //
  const filteredGames = useMemo(() => {
    if (filterGames) {
      const lowerSearch = filterGames.toLowerCase()
      return GamesData.filter((Games) =>
        Games.title.toLowerCase().includes(lowerSearch),
      )
    } else return GamesData
  }, [filterGames, GamesData])

  // I
  if (GamesData) {
    return (
      <>
        <StyledDivInputGames>
          <input
            type="text"
            placeholder="Search for a game title"
            value={filterGames}
            onChange={(e) => setFilterGames(e.target.value)}
          />
          <h3>{`Results (${filteredGames.length})`}</h3>
        </StyledDivInputGames>
        <StyledDivContainerGames>
          {filteredGames.map((res) => {
            return (
              <GamesCards
                title={res.title}
                desc={res.short_description}
                img={res.thumbnail}
                key={res.id}
                id={res.id}
                link={res.article_url}
                genre={res.genre}
              />
            )
          })}
        </StyledDivContainerGames>
      </>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default GamesContainer
