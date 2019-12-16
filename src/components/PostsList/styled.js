import styled from "styled-components"

export const PostsWrapper = styled.section`
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

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;

    a {
      color: var(--mainColor);
    }
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