import React from "react";
import "../options/CSS/settings.css";

class Settings extends React.Component {
  render() {
    const {active, currentMenu } = this.props;
    // const active = 2;
    const settingsItems = ["Themes", "Wheel Color", "Wallpaper"];
    console.log("inside settings");
    console.log("active: " + active, "currentMenu: " + currentMenu);
  
    return (
      <>
        <div className="settings">
            <h2> Settings </h2>
            <ul>

            { settingsItems.map((element, index) => {
                            return active === index ? <li key={index} className="active" > &nbsp; {element} </li> : <li key={index} > &nbsp; {element} </li>
                        }) 
                        }
                {/* { active===0 ? <li className="active" > Themes </li> : <li> Themes </li> } 
                { active===1 ? <li className="active" > Wheel Color </li> : <li>  Wheel Color </li> } 
                { active===2 ? <li className="active" > Wallpaper </li> : <li>  Wallpaper </li> }  */}

            </ul>
        </div>
      </>
    );
  }
}

export default Settings;
