import React from "react";
import "./CSS/wheelColor.css";

class WheelColor extends React.Component {
  render() {

    const {active}= this.props;

    return <>
                <div className="wheelColor">
                <h2> Wheel Color </h2>
                <ul> 
                {[ "Black", "White", "Brown" ].map((element, index) => {
                                  return active === index ? ( <li key={index} className="active" > &nbsp; {element} </li> ) : ( <li key={index} > &nbsp; {element} </li> );
                        }) }
                </ul>
              </div>

    </>;
  }
}

export default WheelColor;