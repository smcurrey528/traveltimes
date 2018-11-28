import React, {Component} from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';



class Nav extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="stickynav">
          <p className="times">
            Times Travel
          </p>
          <img className="icon" src="https://i.imgur.com/uWpKRox.png"/>
          </div>
         </React.Fragment>
    );
  }
}

export default Nav;
