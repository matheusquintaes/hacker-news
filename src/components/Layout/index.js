import React from "react"

import { ReactComponent as Logo } from '../../images/Logo.svg';

import GlobalStyles from "../../styles/global"
import * as Style from "./styled"

const Layout = ({ children }) => {
  
  return (
    <>
      <GlobalStyles/>
      <Style.TopBar/>
      <Style.LayoutWrapper>
        <Logo/>
        {children} 
      </Style.LayoutWrapper>
    </>
  )

}
export default Layout
  