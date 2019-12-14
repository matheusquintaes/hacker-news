import React from "react"

import * as Style from "./styled"

const Layout = () => {
  
  return (
    <>
      <Style.NavWrapper>
        <Style.Ul>
          <li className="selected">Top</li>
          <li>New</li>
        </Style.Ul>
      </Style.NavWrapper>
      
      <Style.NewsWrapper>
        <Style.CardWrapper>
          <Style.Ranking>1</Style.Ranking>
          <h3> <a href="/">Things end users care about but programmers don't</a> </h3>
             <p>by <a href> <b>pmarin</b></a> on 12/11/2019, 8:59 AM • <a href><b>85</b> comments</a></p>
        </Style.CardWrapper>
      </Style.NewsWrapper>
    </>
  )

}
export default Layout
  