import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PNav from './PNav';
import BottomNav from './BottomNav';
import './Palermo.css';
import DropDown from './Dropdown';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Palermo extends Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


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
         <select className="dropdown">
         <option value="volvo"> \/</option>
         <option value="volvo">Select a City:</option>
          <option value="volvo">Montreal</option>
          <option value="saab">Paris</option>
          <option value="mercedes">Hong Kong</option>
          <option value="audi">Cartagena</option>
        </select>
         </div>
        <div className="ptrans"> TRANSPORTATION </div>
        <div className="pcomm"> COMMUNICATION </div>
        <div className="pfood"> FOOD + DRINK </div>
        <div className="psafety"> SAFETY + EMERGENCIES </div>
        <div className="pbasic"> BASIC NEEDS </div>
        <div className="pmoney"> MONEY </div>
        <div className="pculture"> CULTURE </div>
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
