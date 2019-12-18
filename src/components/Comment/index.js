import React from "react"

import * as Style from "./styled"

function Comment ({comment}) {
  return (
    <p dangerouslySetInnerHTML={{__html: comment.text}} />
  )
}

export default Comment