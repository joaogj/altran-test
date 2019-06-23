import React from 'react'
import Spotlight from '../molecules/Spotlight'
import Side from '../atoms/Sidebar'

import {
  MainContainer
} from './styled'

const Page = (props) => {
  return (
    <MainContainer >
      <Side renderItems={props.renderItems} />
      <Spotlight img={"bbb-19-logo.jpg"} />
    </MainContainer>
  )
}

export default Page