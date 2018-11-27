import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import Palermo from './Palermo';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
             <Route exact path="/palermo" component={Palermo} />
          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;
