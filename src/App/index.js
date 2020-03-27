import React, { Component } from 'react';
import './App.css';
// import styled, {css} from 'styled-components';
import Settings from '../Settings';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';

class App extends Component {
  render(){
    return (
      <AppLayout>
        <AppProvider>
          <AppBar></AppBar>
          <Content>
            <Dashboard/>
            <Settings/>
          </Content>
        </AppProvider>
     </AppLayout>
    );
  }
}

export default App;
