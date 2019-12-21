import styled from "styled-components"
import media from "styled-media-query"

export const UserWrapper = styled.section`
  padding: 24px;
  background: var(--bg-white);
  border: 1px solid var(--gray4);
  box-shadow: var(--boxShadow);
  margin-bottom: 48px;
  display: inline-flex;
  p {
    margin-bottom: 8px;
  }
  h3 {
    font-size: 24px;
    ${media.lessThan('large')`
      /* font-size: 20px; */
    `}
    color: var(--textColor);
    font-weight: 800;
    margin-bottom: 12px;
  }

  p{
    color: var(--gray6);
    font-size: 14px;
  }
`

export const UserInfos = styled.div`
  max-width: 280px;
  margin-right: 48px;
  overflow: hidden;
`

export const UserKarma = styled.div`
    align-self: center;
    text-align: center;
  p{
    color: var(--gray6);
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 1.5px;
    font-family :'Noto Sans', sans-serif;
  }
  h4{
    color: var(--mainColor);
    font-weight: 800;
    font-size: 48px;
  }

`

export const TitlePosts = styled.h2`
  font-size: 20px;
  font-weight:800;
  color: var(--textColor);
  margin-bottom: 32px;
  i {
    font-size: 16px;
  }
`