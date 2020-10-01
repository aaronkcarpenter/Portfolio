import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
    
import Navigation from './components/Navigation';
import About from './components/About';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
        {/* <Route path='/about' component={About} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

