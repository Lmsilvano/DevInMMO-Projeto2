import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CommentsList } from '../../contexts/commentsContext'
import GameCommentsCards from './gameCommentsCards'
import GameCommentsInput from './gameCommentsInput'
import { StyledSectionComments } from './styles'

function GameCommentsContainer() {
  const { commentsData, setIdPage } = CommentsList()
  const [comments, setComments, fRender] = useState()
  const id = useParams()
  useEffect(() => {
    setIdPage(id.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    setComments(commentsData)
    return
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentsData, fRender])
  return (
    <StyledSectionComments>
      <h1>Comments</h1>
      <GameCommentsInput />
      {comments !== undefined ? (
        comments.map((comment, i) => {
          return (
            <GameCommentsCards
              comment={comment.comment}
              name={comment.name}
              likes={comment.likes}
              key={i}
              idk={i}
            />
          )
        })
      ) : (
        <div>No Comments...</div>
      )}
    </StyledSectionComments>
  )
}

export default GameCommentsContainer
