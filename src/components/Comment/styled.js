import styled from "styled-components"

export const CommentWrapper = styled.div`
  background: var(--bg-white);
  border: 1px solid var(--gray4);
  padding: 32px 48px;
  position: relative;
  width:100%;
  margin-top: -1px;
  box-shadow: var(--boxShadow);
  margin-bottom: 32px 0;
  color: var(--gray8);

  p{
    line-height: 28px;
  }

  a{
    color: var(--mainColor);
  }
`

export const CommentInfo = styled.div`
  margin-bottom: 16px;
  color: var(--gray6);

  b {
    color: var(--gray8);
    font-weight: 800;
  }
`
