import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CreateAccount from './Components/CreateAccount';
import {render} from 'react-dom'
import Dashboard from './Components/Dashboard';

class App extends React.Component{

  render(){
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            <Router exact path="/" component={CreateAccount} />
            <Router exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    ); 
  }

}

export default App;
