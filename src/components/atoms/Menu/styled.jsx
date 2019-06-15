import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

export const MainContainer = styled.div`
    max-width: 200px;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    height: 1000px;
    transform: ${props => props.translate ? props.translate : 'translateX(-50%)'};
`

export const StyledMenu = styled(Menu)`
    background-color: black;
`