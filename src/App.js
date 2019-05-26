import React from 'react';
import logo from './logo.svg';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { Navbar } from './components/Navbar';
import { EmptyState } from './components/EmptyState';
import { Gateway } from './components/Gateway';
import { Login } from './components/Login';
import { Node } from './components/Node';
import './App.css';

const LoginContainer = () => (
  <React.Fragment>
    <Route exact path="/" component={Login} />
  </React.Fragment>
);

const DefaultContainer = () => (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/gateway" component={Gateway} />
      <Route exact path="/gateway/add" component={EmptyState} />
      <Route exact path="/gateway/node" component={Node} />
    </Switch>
  </React.Fragment>
);



function App() {
  return (
    <Router history={history}>
      <div className="App">
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>

      </div>
    </Router>
  );
}

export default App;
