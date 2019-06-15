import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 280px;
  width: 100%;
  background-color: transparent;
  height: 100px;
  border: 1px solid #222222;
  border-radius: 2px;
  &:hover {
    background-color: black;
  }
`
export const ButtonText = styled.span`
  color: white;
  &:hover {
    color: black;
  }
`