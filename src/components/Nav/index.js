import React from "react"

import * as Style from "./styled"

function Nav ({ selected, onUpdateStatus}) {
  const status = ['Top', 'New']
  return (
    <Style.NavWrapper>
      <Style.Ul>
      {status.map((status) => (
        <li key={status} 
          className={ status === selected ? 'selected' : null}
          onClick={() => onUpdateStatus(status)}>
          {status}
        </li>
      ))}
      </Style.Ul>
    </Style.NavWrapper>
  )
}

export default Nav