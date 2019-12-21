import styled from "styled-components"
import media from "styled-media-query"

export const PostInfoWrapper = styled.div`

  color: var(--gray6);
  ${media.lessThan('medium')`
      font-size: 14px;
    `}
  a {
    color: var(--gray6);

  }
  p {
    color: var(--gray6);
  }

  b {
    color: var(--gray8);
    font-weight: 800;
  }
`