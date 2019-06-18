import React, {Component} from 'react';
import ReactSVG from 'react-svg';

import {
  MainContainer,
  ListContainer,
  Item,
  Text
} from './styled'

export class Side extends Component {
  render() {
    return (
      <MainContainer>
        <ListContainer>
          {this.props.renderItems.map((item, key) => {
            return (
              <Item key={key} >
                <ReactSVG src={item.icon}/>
                <Text>{item.text}</Text>
              </Item>
            )
          })
          }
        </ListContainer>  
      </MainContainer>
    );
  }
}

export default Side