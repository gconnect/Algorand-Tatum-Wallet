import React from 'react';
import './App.css';
// import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {render} from 'react-dom'
import Dashboard from './Components/Dashboard';
import CreateAccount from './Components/CreateAccount';

class App extends React.Component{

  render(){
    return (
      // <Router>
      //   <div>
      //     <nav>
      //       <Link to="/">Home</Link>
      //       <Link to="/foo">Foo</Link>
      //       <Link to="/bar">Bar</Link>
      //     </nav>
      //     <Switch>
      //       <Route exact path="/" component={CreateAccount} />
      //       <Route exact path="/dashboard" component={Dashboard} />
      //     </Switch>
      //   </div>
      // </Router>
      <CreateAccount/>
    ); 
  }

}

export default App;
