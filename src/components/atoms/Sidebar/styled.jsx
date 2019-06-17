import styled from 'styled-components'
import Sidebar from "react-sidebar";


export const MainSideBar = styled.aside`
  max-width: 200px;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  transition-duration: .5s;
  transition-property: width;
  position: fixed;
  left: 0;
  z-index: 1;
`
export const ItemButtons = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  padding: 1.5rem 1rem;
  padding-left: 2rem;
  outline: none;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;

  &:focus {
    background-color: white;
    color: black;
  }

  span {
    opacity: 0;
    white-space: nowrap;
    position: absolute;
    left: 5rem;
    transition-duration: .5s;
  }
`