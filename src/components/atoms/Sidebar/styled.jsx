import styled from 'styled-components'
import Sidebar from "react-sidebar";


export const MainSideBar = styled(Sidebar)`
  max-width: 200px;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 1000px;
  transform: ${props => props.translate ? props.translate : 'translateX(-50%)'};
`