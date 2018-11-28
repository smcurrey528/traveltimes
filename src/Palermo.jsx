import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PNav from './PNav';
import BottomNav from './BottomNav';
import './Palermo.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



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
         <p className="bien"> Benvenuto a PALERMO! </p>
         </div>
         <div className="download"> Download </div>
        <div className="ptrans"> Transportation </div>
        <img className="bus" src="https://i.imgur.com/vtMcoGR.png"/>
        <div className="pcomm">
          <img className="talking" src="https://i.imgur.com/DU0QcKV.png"/>
        Communication </div>
        <div className="pfood"> Food + Drink</div>
        <img className="wine" src="https://i.imgur.com/FWVqTKn.png"/>
        <div className="psafety">
          <img className="safety" src="https://i.imgur.com/mJYZ3vj.png"/>
         Safety + Emergencies </div>
        <div className="pbasic">
           <img className="building" src="https://i.imgur.com/X2yvplH.png"/>
         Basic Needs </div>
        <div className="pmoney"> Money </div>
          <img className="dinero" src="https://i.imgur.com/yLVRRST.png"/>
        <div className="pculture"> Culture </div>
        <img className="earth" src="https://i.imgur.com/lRsKDhP.png"/>
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
