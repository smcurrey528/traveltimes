import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PNav from './PNav';
import BottomNav from './BottomNav';
import './Palermo.css';




class Palermo extends Component {

  render() {
    return(
      <React.Fragment>
      <div class="wrapper">
  <div class="iphone">
    <div class="power"></div>
    <div class="lock"></div>
    <div class="volume up"></div>
    <div class="volume down"></div>
    <div class="camera"></div>
    <div class="speaker"></div>
    <div class="screen">
        <PNav/>
        <div className="benvenuto">
         <img className="bien" src="https://i.imgur.com/2QwBDSH.png" />
         </div>
         <div className="download"> Download
          <img className="tealbutton" src="https://i.imgur.com/B2sc4KS.png" />
         </div>

        <div className="ptrans">
        <img className="bus" src="https://i.imgur.com/vtMcoGR.png"/>
         Transportation </div>
        <div className="pcomm">
          <img className="talking" src="https://i.imgur.com/DU0QcKV.png"/>
        Communication </div>
        <Link to="/food"><div className="pfood">
        <img className="wine" src="https://i.imgur.com/FWVqTKn.png"/>
          Food + Drink</div> </Link>
        <div className="psafety">
          <img className="safety" src="https://i.imgur.com/mJYZ3vj.png"/>
         Safety + Emergencies </div>
        <div className="pbasic">
           <img className="building" src="https://i.imgur.com/X2yvplH.png"/>
         Basic Needs </div>
        <div className="pmoney">
          <img className="dinero" src="https://i.imgur.com/yLVRRST.png"/>
          Money </div>
        <div className="pculture">
        <img className="earth" src="https://i.imgur.com/lRsKDhP.png"/>
          Culture </div>
        <BottomNav/>
  </div>
     <div class="button">
      <div class="square"></div>
    </div>
  </div>
  </div>
</React.Fragment>


      )
  }
}

export default Palermo;
