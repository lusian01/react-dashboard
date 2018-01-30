import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardPage from './DashboardPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>DashboardPage</h1>
        </header>
        <p className="App-intro">
          <DashboardPage />
        </p>
      </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
