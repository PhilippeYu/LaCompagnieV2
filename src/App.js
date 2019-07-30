import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes'

import Header from './components/Header/Header'


class App extends Component {
  
  render () {
    return (
      <Router>
        <div>
 
            <Header />

          <body className='App'>
            <Routes />
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
