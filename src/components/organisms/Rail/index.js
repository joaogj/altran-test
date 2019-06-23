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
            <Slide img={this.props.img}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Sala de Estar</ButtonDetails>
            </Slide>
          </div>
          <div>
            <Slide img={this.props.img}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Varanda</ButtonDetails>
            </Slide>
          </div>
          <div>
            <Slide img={this.props.img}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Piscina</ButtonDetails>
            </Slide>
          </div>
          <div>
            <Slide img={this.props.img}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Academia</ButtonDetails>
            </Slide>
          </div>
          <div>
            <Slide img={this.props.img}>
              <ButtonDetails>Realities</ButtonDetails>
              <ButtonDetails>Chuveiro</ButtonDetails>
            </Slide>
          </div>
        </Slider>
      </Container>
    )
  }
}

export default Rail
