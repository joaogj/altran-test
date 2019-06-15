import React, {Component} from 'react';
import Sidebar from "react-sidebar";

import {
  MainSideBar,
} from './styled'

export class Side extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

      render() {
        return (
          <MainSideBar
            sidebar={<b>Sidebar content</b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            // styles={{ sidebar: { background: "white" } }}
          >
            <button onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button>
          </MainSideBar>
        );
      }
}

export default Side