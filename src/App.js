import React, { Component } from 'react';

import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SideBar from '../src/components/sidebar';

import AgeCalculator from '../src/screens/ageCalculator/index';

import LevenshteinDistance from './screens/levenshteinDistance/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SideBar />
        <BrowserRouter>
          <Switch>
            <Route path="/age-calculator" component={AgeCalculator} />
            <Route path="/levenshtein-distance" component={LevenshteinDistance} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
