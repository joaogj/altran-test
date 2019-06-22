import styled from 'styled-components'

export const MainContainer = styled.div`
  background:linear-gradient(to left, rgba(255,0,0,0), rgba(0,0,0,1)), url("tiago-leifert-o-bbb19.jpg");
  background-size:cover;
  background-position: center;
  background-repeat:no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const SecondContainer = styled.div`
  width: 100%;
  margin-left: 85px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.span`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  width: 35%;
  text-align: left;
`

export const ButtonContainer = styled.div`
  width: 355px;
  display: flex;
  justify-content: space-between;
`