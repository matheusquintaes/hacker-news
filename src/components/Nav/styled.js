import styled from "styled-components"

export const NavWrapper = styled.nav`
margin: 48px 0;
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

li {
  font-size: 20px;
  color: var(--textColor);
  text-transform: uppercase;
  font-weight: 800;
  margin-right: 64px;
  padding: 0 4px 8px 0;
  cursor: pointer;
  
  &.selected{
    border-bottom: 4px solid var(--mainColor);
  }
}
`
