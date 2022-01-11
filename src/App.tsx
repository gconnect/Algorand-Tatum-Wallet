import React from 'react';
import './App.css';
// import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CreateAccount from './Components/CreateAccount';
import {Route,  BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import ApiService from './Api';

const App = () => {
    return (
      <Router>
      <div>
          <Switch>
              <Route exact path="/" component={CreateAccount} />
              <Route exact  path="/dashboard" component={Dashboard} />
              <Route exact  path="/api" component={ApiService} />

              {/* <Route path="/404" component={NotFoundPage} /> */}
              {/* <Redirect to="/404" /> */}
          </Switch>
      </div>
  </Router>
    ); 
}

export default App;
