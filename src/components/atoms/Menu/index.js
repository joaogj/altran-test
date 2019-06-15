import React from 'react'

import {
    MainContainer,
} from './styled'

class Menu extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleTranslate () {
        if(this.state.isOpen) {
            
        }
    }

    render () {
        return (
            <MainContainer></MainContainer>
        )
    }
}

export default Menu