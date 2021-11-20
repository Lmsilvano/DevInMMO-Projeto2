import React, { useState, useEffect } from 'react'
import { StyledDivCardComments } from './styles'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { CommentsList } from '../../contexts/commentsContext'
function GameCommentsCards({ comment, name, likes, idk }) {
  const { handdleLike } = CommentsList()
  const [colorLike, setColorLike] = useState('')
  useEffect(() => {
    if (likes === 0) {
      return setColorLike('black')
    } else if (likes > 0) {
      return setColorLike('green')
    } else {
      return setColorLike('red')
    }
  }, [likes])
  return (
    <StyledDivCardComments setcolor={colorLike}>
      <div className="commentContent">
        <h4>{name}</h4>
        <p>{comment}</p>
      </div>
      <div className="likeContent">
        <AiFillDislike
          onClick={(arg) => handdleLike(arg, '-')}
          id={idk}
          className="dislike"
        />
        <p>{likes}</p>
        <AiFillLike
          onClick={(arg) => handdleLike(arg, '+')}
          id={idk}
          className="like"
        />
      </div>
    </StyledDivCardComments>
  )
}

export default GameCommentsCards
