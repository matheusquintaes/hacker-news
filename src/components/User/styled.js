import styled from "styled-components"

export const UserWrapper = styled.section`
  padding: 24px;
  background: var(--bg-white);
  border: 1px solid var(--gray4);
  margin-bottom: 48px;
  display: inline-flex;
  width: 450px;
  
  h3 {
    font-size: 24px;
    color: var(--textColor);
    font-weight: 800;
    margin-bottom: 12px;
  }

  p{
    color: var(--grey6);
    font-size: 14px;
    margin-bottom: 4px;
  }
`

export const UserInfos = styled.div`
  flex: 0 1 250px;
  margin-right: 48px;
`

export const UserKarma = styled.div`
    flex: 0 1 100px;
  p{
    color: var(--gray8);
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