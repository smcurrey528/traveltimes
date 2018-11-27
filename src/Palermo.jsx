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
        <div className="ptrans"> Transportation </div>
        <div className="pcomm"> Communication </div>
        <div className="pfood"> Food + Drink</div>
        <div className="psafety"> Safety + Emergencies </div>
        <div className="pbasic"> Basic Needs </div>
        <div className="pmoney"> Money </div>
        <div className="pculture"> Culture </div>
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
