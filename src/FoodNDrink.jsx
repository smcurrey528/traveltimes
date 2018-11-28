import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PNav from './PNav';
import BottomNav from './BottomNav';


class FoodNDrink extends Component {

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

       <img className="pizza" src="https://i.imgur.com/Tfnc1Vf.png" />

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

export default FoodNDrink;
