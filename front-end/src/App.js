import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/index';
import Customers from './pages/customer/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/customers' component={Customers} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
