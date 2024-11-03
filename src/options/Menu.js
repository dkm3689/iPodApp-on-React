import React from "react";
import music from "../assets/images/music.jpeg";
import games from "../assets/images/games.jpg";
import settings from "../assets/images/settings.jpeg";
import "./CSS/menu.css";

class Menu extends React.Component {
  render() {
    const { active, menuItems, songImgUrl } = this.props;
    console.log("active: " + active);

    return (
      <>
        <div className="menu-container">
          <div className="menu">
            <ul>
              {menuItems.map((element, index) => {
                return active === index ? (
                  <li key={index} className="active"> &nbsp; {element} </li>
                ) : (
                  <li key={index}> &nbsp; {element} </li>
                );
              })}
            </ul>

            {/* <ul>
              {menuItems.map((element, index) => {
                return (
                  <li key={index}> &nbsp; {element} </li>
                );
              })}
            </ul> */}
          </div>

          <div className="leaf">
            {active === 0 && (
              <img src={songImgUrl} className="leaf-img" alt=""></img>
            )}
            {active === 1 && (
              <img src={music} className="leaf-img" alt=""></img>
            )}
            {active === 2 && (
              <img src={games} className="leaf-img" alt=""></img>
            )}
            {active === 3 && (
              <img src={settings} className="leaf-img" alt=""></img>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Menu;