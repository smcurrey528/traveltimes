import React, {Component} from "react";
import Nav from './Nav';
import './Home.css';
import { Link } from 'react-router-dom';


class Home extends Component {
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
      <img className="globe" src="data:image/png;base64,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"/>
      <div className="searchBar">
       <img className="mag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMgSURBVGhD7ZlJqI1hGICvIbNMO2QnkWIhK9OGRGTOkI0sZGGBEFYyLmyEIslMFoayVELJkCGkDCvCwkLmeXieP1+dTudw7/2//z/n13nq6fZ93fu+3/tP33CbGjSoTwbhcjyND/E9/vrjK7yB+3AB9sC6oi3OwasYBl3qtwp9+hGP4FCsOSPxFobBvcOTuBC9Ox0w0BP9/dV4BX+gf+PPvdgbc6cNrsNwtV/gUuyEzaU/7sEQ4ymOwtxohwfQ5D9xC3bD1jIYL6HxPuMszBzvxCE0qS/yTIyBj6CPl3G/41TMlLVosg/o8x6bDRjiZ/YRcOBeLR+nWHeiHO/4CbSY+9gRo+In9jaaYJMdGdIFLcJca+yIyVw08EvsakfGTELzvcaoE+d1NPCSpJUPF9CcrhSi4OfRgG8x+jP7F6ahee8krQisRAM6Y+eJ74rLGHM7eabmDBpsftLKl7Nobt/R1DxCg7l2ypv1aO6NSSsln9Bg7ZNWvrj4NPfBpJUCJygDWUwtmILmP5W0UmIgZ/RaMAPN7/ouNU5KBuuetPJlMZp7e9JKyU002IiklS/b0NwrklZK9mO0YC3EPb65xyWtlIQvx+WklR/90JW22+fSLXOrcS/tzs29dV87cmIZegGdFKNxHA26K2llT2d8huYcb0cshqG3+SsOtCNj3IdYhKvu6ISX3uV1lGe2CkPQlbYXboIdsemDz9FidtuRAb6Pj9EcO+3IitH4BU3kuZZLmFhYxEU0tsetvieZ4nLeJYsJj2JLDuWq4eP0BI2pxp+NmTMdw6rYHdxEbA1edY9Q32AoIugJZC7FDMcHGBKfR1erzXkknOycJzwm9W99sc9h+YG37VxOHt3D+66UXlEP1/y3god583AyegcX4Va8hg48/P49HIPiHahZMdILV+FdLB1ENV0puIV2siv/YFQqxvkrt2ICA9D12WY8jG6KjuEO9C6NxX89fg66LoqJgYN28OXFZHVcmyn/fTFOyoUsxkFXKsY9feGwmLA8ahRTTzjoSsX4WS8c5cW4PPLQu5C47LGYQhcR8HEqfBENCkRT029ZMw61YaKwwwAAAABJRU5ErkJggg=="/>
       <form>
        <input
           className="where"
           type= "text"
           placeholder= "Where are you going?"/>
           <Link to='/palermo'> PALERMO </Link>
       </form>
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
