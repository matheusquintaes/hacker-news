import React from "react"
import { NavLink } from 'react-router-dom'


import * as Style from "./styled"

function PostInfo ({id, author, time, comments}) {
  return (

    <Style.PostInfoWrapper>
      by  <NavLink to={`/user?id=${author}`} exact> <b>{author} </b></NavLink>
      on {time} • <NavLink to={`/post?id=${id}`} exact> <b>{comments}</b> comments</NavLink>
    </Style.PostInfoWrapper>
  )
}

export default PostInfo