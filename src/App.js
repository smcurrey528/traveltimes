import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import Palermo from './Palermo';
import Convert from './Convert';
import TripTips from './TripTips';
import CommTips from './CommTips';
import RelTips from './RelTips';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
             <Route exact path="/palermo" component={Palermo} />
             <Route exact path="/convert" component={Convert} />
             <Route exact path="/tips-food" component={TripTips} />
             <Route exact path="/commtips" component={CommTips} />
              <Route exact path="/reltips" component={RelTips} />
          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;
