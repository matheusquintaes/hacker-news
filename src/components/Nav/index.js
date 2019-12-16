import React from "react"
import { NavLink } from 'react-router-dom'

import * as Style from "./styled"

function Nav () {
  return (
    <Style.NavWrapper>
      <Style.Ul>
        <li>
          <NavLink to='/' exact>
              Top
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' exact>
              New
          </NavLink>
        </li>
      </Style.Ul>
    </Style.NavWrapper>
  )
}

export default Nav