import React, {Component} from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';



class Nav extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="stickynav">
          <p className="title"><Link to='/'> NOMAD </Link></p>
          <img className="icon" src="data:image/png;base64,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"/>
          </div>
         </React.Fragment>
    );
  }
}

export default Nav;