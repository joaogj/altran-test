import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 160px;
  width: 100%;
  background-color: transparent;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 2px;
  &:hover {
    background-color: white;
    
    span {
      color: black;
    }
  }
`
export const ButtonText = styled.span`
  color: white;
  font-size: 16px;
`