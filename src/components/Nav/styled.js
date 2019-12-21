import styled from "styled-components"
import media from "styled-media-query"

export const NavWrapper = styled.nav`
margin-bottom: 48px;
width: 100%;
position: relative;

&:after {
  content: "";
  width: 100%;
  position: absolute;
  border-bottom: 1px solid var(--gray4);
}
`

export const Ul = styled.ul`
  display: flex;
  li{
    padding: 0 4px 8px 0;
    text-transform: uppercase;
    font-weight: 800;
    margin-right: 64px;
    ${media.lessThan('large')`
      margin-right: 48px;
    `}
    cursor: pointer;
  }
  a {
    font-size: 20px;

    ${media.lessThan('large')`
      /* font-size: 18px; */
    `}

    color: var(--textColor);
    padding: 1px 10px;
    
    &.active{
      border-bottom: 4px solid var(--mainColor);
    }
  }
`
