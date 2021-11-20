import React, { createContext, useContext, useState } from 'react'
import {
  optionsGen,
  getResponse,
} from '../services/MMOGamesAPI/axios-service.js'
const GameDetailContext = createContext()

function GameDetailProvider({ children }) {
  const [responseApiGameDetail, setResponse] = useState()
  const [waitingDT, setWaiting] = useState(false)

  async function GameDetailReq(id) {
    setWaiting(true)
    let op = optionsGen(null, id)
    let response = await getResponse(op)
    setWaiting(false)
    return setResponse(response)
  }

  return (
    <GameDetailContext.Provider
      value={{ responseApiGameDetail, GameDetailReq, waitingDT }}
    >
      {children}
    </GameDetailContext.Provider>
  )
}

function GameDetailShowList() {
  const context = useContext(GameDetailContext)

  return context
}
export { GameDetailProvider, GameDetailShowList }
