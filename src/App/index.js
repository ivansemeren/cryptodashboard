import React, { Component } from 'react';
import './App.css';
// import styled, {css} from 'styled-components';
import WelcomeMessege from './WelcomeMessage';
import AppLayout from './AppLayout';


class App extends Component {
  render(){
    return (
      <AppLayout>
        <WelcomeMessege/>
     </AppLayout>
    );
  }
}

export default App;
