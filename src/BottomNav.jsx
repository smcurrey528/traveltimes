import React, {Component} from 'react';
import './BottomNav.css';
import { Link } from 'react-router-dom';



class BottomNav extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="bottomnav">
          <div className="imgConvert">
          <Link to='/convert'>
          <img className="calculator" src="https://i.imgur.com/tdzOQCz.png"/>
           </Link>
           <p className="convert"> Convert </p>
          </div>
          <div className="imgTranslate">
           <img className="translato" src="https://i.imgur.com/XIQTUoK.png/"/>
           <p className="translate"> Translate </p>
          </div>
          <div className="imgNews">
          <img className="iconNews" src="https://i.imgur.com/VEQJBgH.png"/>
           <p className="news"> News </p>
          </div>
          <div className="imgTips">
           <Link to="/tips-food">
           <img className="lightbulb" src="https://i.imgur.com/S3lSZXm.png"/>
            </Link>
           <p className="tips"> Travel Tips </p>
          </div>
          </div>
         </React.Fragment>
    );
  }
}

export default BottomNav;
