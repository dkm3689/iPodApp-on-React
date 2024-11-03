import React from "react";
import "./CSS/wallpaper.css";

class Wallpaper extends React.Component {
  render() {
    const {active} = this.props;
    return (
      <>
        <div className="wallpaper">
          <h2>Select Wallpaper</h2>
          <ul>
            <li>
            <ul>
            {[ "Wallpaper 1", "Wallpaper 2", "Wallpaper 3" ].map((element, index) => {
                return active === index ? ( <li key={index} className="active" > &nbsp; {element} </li> ) : ( <li key={index} > &nbsp; {element} </li> );
                        }) }
            </ul>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Wallpaper;