import styled from 'styled-components'

export const MainContainer = styled.div`
  background:linear-gradient(to left, rgba(255,0,0,0), rgba(0,0,0,1)), url(${props=> props.bg ? props.bg : "tiago-leifert-o-bbb19.jpg" });
  background-size:cover;
  background-position: center;
  background-repeat:no-repeat;
  height: 100vh;
`