import React from "react"

import * as Style from "./styled"

function PostInfo ({url, author, time, comments}) {
  return (

    <Style.PostInfoWrapper>
      by <a href={url}> <b>{author}</b></a> on {time} • <a href="/"> <b>{comments}</b> comments</a>
    </Style.PostInfoWrapper>
  )
}

export default PostInfo