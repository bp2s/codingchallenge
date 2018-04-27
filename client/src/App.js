import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeaderComponent from './components/HeaderComponent';
import AuthComponent from'./components/AuthComponent';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <HeaderComponent/>
        <AuthComponent/>
      </MuiThemeProvider>
    );
  }
}

export default App;
