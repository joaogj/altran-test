import React from 'react'
import Button from '../../atoms/Button'

import {
  MainContainer,
  SecondContainer,
  ButtonContainer,
  Title,
} from './styled'

const Spotlight = () => {
  return (
    <MainContainer>
      <SecondContainer>
      <Title>Acompanhe 24h a casa mais vigiada do Brasil</Title>
        <ButtonContainer>
          <Button />
          <Button />
        </ButtonContainer>
      </SecondContainer>
    </MainContainer>
  )
}

export default Spotlight