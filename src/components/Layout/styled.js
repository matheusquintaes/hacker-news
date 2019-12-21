import styled from "styled-components"
import media from "styled-media-query"

export const TopBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--mainColor);
`

export const LayoutWrapper = styled.div`
  max-width: 1024px;
  margin: 48px auto;
  ${media.lessThan('large')`
      width: 100%;
      padding: 32px;
      margin: 0;
  `}
`

export const LogoWrapper = styled.div`
  width:100%;
  margin-bottom: 48px;
`
