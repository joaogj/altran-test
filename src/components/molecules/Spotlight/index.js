import React from 'react'
import Button from '../../atoms/Button'
import Rail from '../../organisms/Rail'

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
        <Rail />
      </SecondContainer>
    </MainContainer>
  )
}

export default Spotlight