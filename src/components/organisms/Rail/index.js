import React, { Component } from 'react'
import Slider from 'react-slick'
import {Container} from './slick.jsx'


import {
  Slide,
  ButtonDetails,
} from './styled'

class Rail extends Component {
  render (){ 
    const settings = {
      focusOnSelect: true,
      slidesToShow: 4,
      infinite: true,
      slidesToScroll: 1,
      speed: 500,
      arrows: false
    }
    return (
      <Container>
        <Slider {...settings }>
          <div>
            <Slide img={"bbb-19-logo.jpg"}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Varanda</ButtonDetails>
            </Slide>
          </div>
          <div>
            <Slide img={"bbb-19-logo.jpg"}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Varanda</ButtonDetails>
            </Slide>
          </div>
          <div>
            <Slide img={"bbb-19-logo.jpg"}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Varanda</ButtonDetails>
            </Slide>
          </div>
          <div>
            <Slide img={"bbb-19-logo.jpg"}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Varanda</ButtonDetails>
            </Slide>
          </div>
          <div>
            <Slide img={"bbb-19-logo.jpg"}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Varanda</ButtonDetails>
            </Slide>
          </div>
        </Slider>
      </Container>
    )
  }
}

export default Rail
