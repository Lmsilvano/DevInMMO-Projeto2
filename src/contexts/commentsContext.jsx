import React, { createContext, useContext, useState, useEffect } from 'react'

const CommentsContext = createContext()

function CommentsProvider({ children }) {
  const [commentsData, setCommentsData] = useState()
  const [fRender, setFRender] = useState(false)
  const [idPage, setIdPage] = useState('')

  useEffect(() => {
    if (idPage) {
      // prettier-ignore
      if (localStorage.getItem(`${idPage}-gamecomments`)) {
        let data = JSON.parse(localStorage.getItem(`${idPage}-gamecomments`))
        setCommentsData(data)
        return
      } else return
    } else return
  }, [idPage])

  const localHanddler = (arg, array, id) => {
    arg['likes'] = 0
    array.push(arg)
    setCommentsData(array)
    return localStorage.setItem(`${id.id}-gamecomments`, JSON.stringify(array))
  }
  // prettier-ignore
  const handdleLike = (arg, op) => {
    let localLike = arg.target.parentElement.id
    if (typeof localLike === 'string' && localLike !== '') {
       if(op === '-'){
            commentsData[localLike].likes--
            setCommentsData(commentsData)
            setFRender(new Date().getTime())
            localStorage.setItem(`${idPage}-gamecomments`, JSON.stringify(commentsData))
            return
          } else if(op === '+') {
              commentsData[localLike].likes++
              setCommentsData(commentsData)
              setFRender(new Date().getTime())
              localStorage.setItem(`${idPage}-gamecomments`, JSON.stringify(commentsData))
              return
            } else return
    } else return
  }

  return (
    <CommentsContext.Provider
      value={{ localHanddler, commentsData, setIdPage, handdleLike, fRender }}
    >
      {children}
    </CommentsContext.Provider>
  )
}

function CommentsList() {
  const context = useContext(CommentsContext)

  return context
}
export { CommentsProvider, CommentsList }
