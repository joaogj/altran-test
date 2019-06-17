import React, {Component} from 'react';
// import { FiEdit2 } from 'react-icons/fi'
import Sidebar from "react-sidebar";

import {
  MainSideBar,
  ItemButtons,
} from './styled'

export class Side extends Component {
      render() {
        return (
          <MainSideBar>
            <ItemButtons>
              {/* <FiEdit2 /> */}
            </ItemButtons>
          </MainSideBar>
        );
      }
}

export default Side