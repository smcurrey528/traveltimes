import React, {Component} from "react";
import Nav from './Nav';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class Home extends Component {
  state = {
    fireRedirect: false,
  };

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value)
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
        this.setState({
          fireRedirect: true,
        })
      e.target.reset();
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
     <div className="nomad">
      <Nav/>
      <img className="globe" src="https://i.imgur.com/MGcRkQn.png"/>
      <div className="searchBar">
       <img className="mag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMgSURBVGhD7ZlJqI1hGICvIbNMO2QnkWIhK9OGRGTOkI0sZGGBEFYyLmyEIslMFoayVELJkCGkDCvCwkLmeXieP1+dTudw7/2//z/n13nq6fZ93fu+3/tP33CbGjSoTwbhcjyND/E9/vrjK7yB+3AB9sC6oi3OwasYBl3qtwp9+hGP4FCsOSPxFobBvcOTuBC9Ox0w0BP9/dV4BX+gf+PPvdgbc6cNrsNwtV/gUuyEzaU/7sEQ4ymOwtxohwfQ5D9xC3bD1jIYL6HxPuMszBzvxCE0qS/yTIyBj6CPl3G/41TMlLVosg/o8x6bDRjiZ/YRcOBeLR+nWHeiHO/4CbSY+9gRo+In9jaaYJMdGdIFLcJca+yIyVw08EvsakfGTELzvcaoE+d1NPCSpJUPF9CcrhSi4OfRgG8x+jP7F6ahee8krQisRAM6Y+eJ74rLGHM7eabmDBpsftLKl7Nobt/R1DxCg7l2ypv1aO6NSSsln9Bg7ZNWvrj4NPfBpJUCJygDWUwtmILmP5W0UmIgZ/RaMAPN7/ouNU5KBuuetPJlMZp7e9JKyU002IiklS/b0NwrklZK9mO0YC3EPb65xyWtlIQvx+WklR/90JW22+fSLXOrcS/tzs29dV87cmIZegGdFKNxHA26K2llT2d8huYcb0cshqG3+SsOtCNj3IdYhKvu6ISX3uV1lGe2CkPQlbYXboIdsemDz9FidtuRAb6Pj9EcO+3IitH4BU3kuZZLmFhYxEU0tsetvieZ4nLeJYsJj2JLDuWq4eP0BI2pxp+NmTMdw6rYHdxEbA1edY9Q32AoIugJZC7FDMcHGBKfR1erzXkknOycJzwm9W99sc9h+YG37VxOHt3D+66UXlEP1/y3god583AyegcX4Va8hg48/P49HIPiHahZMdILV+FdLB1ENV0puIV2siv/YFQqxvkrt2ICA9D12WY8jG6KjuEO9C6NxX89fg66LoqJgYN28OXFZHVcmyn/fTFOyoUsxkFXKsY9feGwmLA8ahRTTzjoSsX4WS8c5cW4PPLQu5C47LGYQhcR8HEqfBENCkRT029ZMw61YaKwwwAAAABJRU5ErkJggg=="/>
       <form onSubmit={(e) => this.handleFormSubmit(e)}>
        <input
           className="where"
           type= "text"
            value={this.state.city_location}
            onChange={(e) => this.handleInputChange(e)}
           placeholder= "Where are you going?"
           />

       </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/palermo/`} />
          : ''}
      </div>
          <div className="saved"> SAVED LOCATIONS </div>
          <img className="dotSave" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHQSURBVGhD7dY/SFVhGMfxa5H9G0LLIjITQsS5pFFq1UFo0dkhInATtFFaAnVSLJ1ahQKl/DO5SoI4BaFEk5ANOqiDivZ9Lh14efm959zTGM8XPsO9vM+Bc8+55z0Vz/M8z/M8z/M8z6upS7iHu7hgX5TsMlpwp/qpfFfRipvVT//QfcxiH+d//cJb3EBRHZjDEbL5n3iNKyjqCZZxjGz+G17iImqqE7+RHSC2jYdI1Y1DqFnzFY1I9QKnULPmM+qRWxN2oQ4Q2oTddnF2JfJOIrMI1VPknURmGrnZraMGlQHE2e2k1irPEGdXS62N2cm2IdkW1KDyBWF2ucP/RJFJhDVDrUsZQrITqCHlO8Ls6aTWpawgrAtqXco7JDuAGlI2EHYbal3KR4TZQ0atS5lAslWoIWUGcfaIVWuVYYRdQ5lbsw/J+qGGYmd4hLgRqPUxe7LZRhv3Hmp9bAfXkawO81DDoTGobCdeg5oJvYLqFn5AzWTsR+xBYbbzfoANxAexh8Eb5L2u2Ga3hHjW2K2TOomsB1iHmt/Dc5TqMcZhO+kCRtGOWrPNbQq2+X2C/SfU7aSyH6oX9ppkryq2Pw2iAZ7neZ7neZ7neZ73/1ep/AEHu0qPbrdm0gAAAABJRU5ErkJggg=="/>

      <div className="montreal">
         <div className="graybox">
       <p className="textName"> Montreal </p>
         </div>
        </div>
      <div className="hong">
          <div className="graybox">
         <p className="textName"> Hong Kong </p>
         </div>
         </div>
      <div className="paris">
        <div className="graybox">
         <p className="textName"> Paris  </p>
        </div>
         </div>
      <div className="cartagena">
       <div className="graybox">
      <p className="textName"> Cartagena </p>
      </div>
      </div>
      <hr/>
      </div>
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
export default Home;
