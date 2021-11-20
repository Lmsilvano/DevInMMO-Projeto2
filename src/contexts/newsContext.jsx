import React, { createContext, useContext, useState } from 'react'
import {
  optionsGen,
  getResponse,
} from '../services/MMOGamesAPI/axios-service.js'
const NewsContext = createContext()

function NewsProvider({ children }) {
  const [responseApiNews, setResponse] = useState()
  //const [waiting, setWaiting] = useState(false)

  async function NewsListReq() {
    //setWaiting(true)
    let op = optionsGen('latestnews')
    let response = await getResponse(op)
    //setWaiting(false)
    return setResponse(response)
  }

  return (
    <NewsContext.Provider value={{ responseApiNews, NewsListReq }}>
      {children}
    </NewsContext.Provider>
  )
}

function NewsShowList() {
  const context = useContext(NewsContext)

  return context
}
export { NewsProvider, NewsShowList }
