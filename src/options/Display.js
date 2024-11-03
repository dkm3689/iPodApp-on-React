import React from "react";
import Navbar from "./Navbar";
import Lockscreen from "./Lockscreen";
import Menu from "./Menu";
import Music from "./Music";
import Settings from "./Settings";
import Song from "./Songs";
import Themes from "./Themes";
import Playing from "./Playing";
import Wallpaper from "./Wallpaper";
import WheelColor from "./WheelColor";
import Games from "./Games";

import "./CSS/display.css";
import backgroundImage1 from "../assets/images/wallpaper1.jpg";
import backgroundImage2 from "../assets/images/wallpaper2.jpg";
import backgroundImage3 from "../assets/images/wallpaper3.jpg";

class Display extends React.Component {
  render() {
    const {
      active,
      currentMenu,
      menuItems,
      musicItems,
      songItems,
      playing,
      songIndex,
      audio,
      songUrl,
      songImgUrl,
      wallpaper,
      wallpaperItems,
      noty,
      setNoty,
      notifyText,
      artistImg
    } = this.props;

    return (
      <>
        <div
          className="display"
          style={{
            backgroundImage: `url(${wallpaperItems[wallpaper]})`,
            backgroundSize: "cover",
          }}
        >
          <Navbar
            noty={noty}
            setNoty={setNoty}
            playing={playing}
            notifyText={notifyText}
          />
          {currentMenu === -2 && <Lockscreen />}
          {currentMenu === -1 && (
            <Menu
              songImgUrl={songImgUrl}
              menuItems={menuItems}
              active={active}
            />
          )}
          {currentMenu === 1 && (
            <Music songItems= {songItems} musicItems={musicItems} active={active} />
          )}
          {currentMenu === 2 && (
            <div className="blank-div">
              {/* {" "}
              <h1 className="empty-text"> Games </h1>{" "} */}
              <Games/>
            </div>
          )}
          {currentMenu === 3 && <Settings active={active} currentMenu={currentMenu} />}
          {currentMenu === 4 && <Song songItems={songItems} active={active} />} 
          {currentMenu === 5 && (
            <div className="artist-div" style={{  backgroundImage: `url(${artistImg})`,
                                                  width: '100%',
                                                  height: '180px',
                                                  backgroundSize: "cover",
                                                  /* //keeps it inside the container */
                                                  overflow: 'hidden',                        
            }} >
              {" "}
              <h1 className="artist-text" style={{color: 'black', marginLeft: '60px'}}> Karan Aujla </h1>
              {" "}
            </div>
          )}
          {currentMenu === 6 && (
            <div className="blank-div">
              {" "}
              <h1 className="empty-text" style={{color: 'black', marginLeft: '100px'}} > Albums </h1>{" "}
            </div>
          )}
          {(currentMenu === 0 ) && (
            <Playing
              songImgUrl={songImgUrl}
              audio={audio}
              songUrl={songUrl}
              playing={playing}
              songIndex={songIndex}
              songItems={songItems}
            />
          )}
          {currentMenu === 7 && <Themes active={active} />}
          {currentMenu === 8 && <WheelColor active={active} />}
          {currentMenu === 9 && <Wallpaper active={active} />}
        </div>
      </>
    );
  }
}

export default Display;