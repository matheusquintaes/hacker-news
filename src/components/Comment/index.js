import React from "react"
import { formatDate } from '../../utils/helpers'

import * as Style from "./styled"

function Comment ({comment}) {
  return (
    <>
    <Style.CommentWrapper>
      <Style.CommentInfo>
        by <b>{comment.by} </b> • on {formatDate(comment.time)}  
      </Style.CommentInfo>
      <p dangerouslySetInnerHTML={{__html: comment.text}} />
    </Style.CommentWrapper>
    </>
  )
}

export default Comment