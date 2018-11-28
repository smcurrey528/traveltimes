import React, {Component} from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';



class PNav extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="stickynav">
          <Link to='/'>
          <img className="navLogo" src="https://i.imgur.com/MGcRkQn.png"/>
          </Link>
          <p className="title">
            Times Travel </p>
          <img className="icon" src="https://i.imgur.com/uWpKRox.png"/>
          </div>
         </React.Fragment>
    );
  }
}

export default PNav;
