import React from "react";
import "./CSS/theme.css";

class Themes extends React.Component {
  render() {

    const {active} = this.props;
    console.log("active: " + active);
    const themes = ["Snow White", "Black", "USC Gold", "Spray Gray"];

    return  (
            <>
                <div className="themes">
                    <h2> Theme Options </h2>
                    <ul>
                        { themes.map((element, index) => {
                                  return active === index ? ( <li key={index} className="active" > &nbsp; {element} </li> ) : ( <li key={index} > &nbsp; {element} </li> );
                        }) }
                    </ul>

                </div>
    
            </>
    )
  }
}

export default Themes;