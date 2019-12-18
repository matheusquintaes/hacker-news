import React from "react"
import { NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from '../../images/Logo.svg';

import GlobalStyles from "../../styles/global"
import * as Style from "./styled"

const Layout = ({ children }) => {
  
  return (
    <>
      <GlobalStyles/>
      <Style.TopBar/>
      <Style.LayoutWrapper>
        <Style.LogoWrapper>
          <NavLink to='/' exact> <Logo/> </NavLink>
        </Style.LogoWrapper>
        {children} 
      </Style.LayoutWrapper>
    </>
  )

}
export default Layout
  