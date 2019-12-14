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

export const NewsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export const CardWrapper = styled.div`
  background: var(--bg-white);
  border: 1px solid var(--gray4);
  padding: 32px 48px;
  position: relative;
  width:100%;
  margin-top: -1px;

  a {
    color: var(--mainColor);
  }

  h3 {
    font-size: 24px;

    font-weight: 600;
    margin-bottom: 16px;
  }

  p {
    color: var(--gray6);
  }

  b {
    color: var(--gray8);
    font-weight: 800;
  }
`

  export const Ranking = styled.div`
    position: absolute;
    padding: 4px 8px;
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
    background: var(--bg-white);
    border: 1px solid var(--gray4);

`