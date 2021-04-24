import React, { Component } from 'react';

import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SideBar from '../src/components/sidebar';

import AgeCalculator from '../src/screens/ageCalculator/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SideBar />
        <BrowserRouter>
          <Switch>
            <Route path="/age-calculator" component={AgeCalculator} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
