import React, { createContext, useContext, useState } from 'react'
import {
  optionsGen,
  getResponse,
} from '../services/MMOGamesAPI/axios-service.js'
const GamesContext = createContext()

function GamesProvider({ children }) {
  const [responseApiGames, setResponse] = useState()
  //const [waiting, setWaiting] = useState(false)

  async function GamesListReq() {
    //setWaiting(true)
    let op = optionsGen('games')
    let response = await getResponse(op)
    //setWaiting(false)
    return setResponse(response)
  }

  return (
    <GamesContext.Provider value={{ responseApiGames, GamesListReq }}>
      {children}
    </GamesContext.Provider>
  )
}

function GamesShowList() {
  const context = useContext(GamesContext)

  return context
}
export { GamesProvider, GamesShowList }
