import React from "react";
import "./CSS/wheel.css";
import { FaForward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa";
import * as ZingTouch from "zingtouch";
// import { Region, LongPress } from 'react-zingtouch';

class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {
      angle: 0,
    };
  }

  render() {
    const {
      theme,
      active,
      menuItems,
      currentMenu,
      changeMenuForward,
      changeMenuBackward,
      changePlayingSongFromMusicMenu,
      setWheelColor,
      setWallpaper,
      setTheme,
      updateActiveMenu,
      togglePlayPause,
      seekSongForward,
      seekSongBackward,
      wheelColor,
    } = this.props;

    console.log("wheelColor:", wheelColor, typeof wheelColor);
    console.log("theme:", theme, "Type of theme:", typeof theme);
    console.log("set wheel color in wheel.js: ", setWheelColor);


    return (
      <div className="wheel-container" id="wheel-container">
        <div
          className="wheel-options"
          id="wheel-options"
          style={{ backgroundColor: wheelColor }}
        >
          <div className="wheel-control" id="menu">
            <div style={{ color: theme }}> MENU </div>
          </div>
          <div className="wheel-control" id="forward">
            <FaForward style={{ color: theme }} />
          </div>
          <div className="wheel-control" id="play-pause">
            <div>
              <FaPlay style={{ color: theme }} />
              <FaPause style={{ color: theme }} />
            </div>
          </div>
          <div className="wheel-control" id="backward">
            <FaBackward style={{ color: theme }} />
          </div>
        </div>

        <div className="blank" id="blank"></div>
      </div>
    );
  }

  wheelControl = (e) => {
    const { updateActiveMenu, currentMenu, active } = this.props;
    console.log("inside wheel control");
    //method in zing touch library
    if (e.detail.distanceFromOrigin === 0) {
      this.angle = e.detail.angle;
    }

    if (Math.abs(this.angle - e.detail.angle) > 100) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast < 0) {
        updateActiveMenu(1, currentMenu);
        console.log("active " + active);
      }
      // else if(e.detail.distanceFromLast<0){
      //     updateActiveMenu(1, currentMenu);
      // }
      else {
        updateActiveMenu(0, currentMenu);
        console.log("active " + active);
      }
    } else if (Math.abs(this.angle - e.detail.angle) > 15) {
      console.log("inside angle");
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast > 0) {
        updateActiveMenu(1, currentMenu);
        console.log("active " + active);
      } else {
        updateActiveMenu(0, currentMenu);
        console.log("active " + active);
      }
    }
  };

  

  // componentDidMount() {
  //   // const {changeMenuBackward, togglePlayPause, seekSongForward, seekSongBackward, changeMenuForward } = this.props;

  //   const {
  //     // theme,
  //     active,
  //     // menuItems,
  //     currentMenu,
  //     changeMenuForward,
  //     changeMenuBackward,
  //     changePlayingSongFromMusicMenu,
  //     setWheelColor,
  //     setWallpaper,
  //     setTheme,
  //     // updateActiveMenu,
  //     togglePlayPause,
  //     seekSongForward,
  //     seekSongBackward,
  //     // wheelColor,
  //   } = this.props;

  //   console.log("set theme in wheel.js", setTheme);
  //   console.log("currentMenu: ", currentMenu);

  //   const wheelControl = this.wheelControl;
  //   const wheel = document.getElementById("wheel-container");
  //   const activeRegion = new ZingTouch.Region(wheel);
  //   const menuIcon = document.getElementById("menu");
  //   const playPause = document.getElementById("play-pause");
  //   const backward = document.getElementById("backward");
  //   const forward = document.getElementById("forward");
  //   const centerButton = document.getElementById("blank");

  //   //   const longTapGesture = new ZingTouch.LongPress({
  //   //       maxDelay: 10000,
  //   //       numInput: 1,
  //   //       tolerance: 1
  //   // });

  //   activeRegion.bind(menuIcon, "tap", function (e) {
  //     changeMenuBackward();
  //   });

  //   activeRegion.bind(wheel, "rotate", function (e) {
  //     wheelControl(e);
  //   });

  //   activeRegion.bind(playPause, "tap", function (e) {
  //     togglePlayPause(e);
  //   });

  //   activeRegion.bind(backward, "tap", function (e) {
  //     seekSongBackward(e);
  //   });

  //   activeRegion.bind(forward, "tap", function (e) {
  //     seekSongForward(e);
  //   });

  //   activeRegion.bind(centerButton, "tap", function (e) { 
  //     console.log(`currentMenu: ${currentMenu}`);
  //     console.log(`active: ${active}`);
  //     if (currentMenu === 4) {
  //       console.log("before changing song");
  //       changePlayingSongFromMusicMenu(active);
  //       e.stopPropagation();
  //       return;
  //     }

  //     if (currentMenu === 7) {
  //       console.log("before changing theme");
  //       console.log("active: ${active}");
  //       setTheme(active);
  //       e.stopPropagation();
  //       return;
  //     }
  //     changeMenuForward();
  //   });
  // }


  // componentDidUpdate() {
  //   // const {changeMenuBackward, togglePlayPause, seekSongForward, seekSongBackward, changeMenuForward } = this.props;

  //   const {
  //     // theme,
  //     active,
  //     // menuItems,
  //     currentMenu,
  //     changeMenuForward,
  //     changeMenuBackward,
  //     changePlayingSongFromMusicMenu,
  //     setWheelColor,
  //     setWallpaper,
  //     setTheme,
  //     navigationStack,
  //     // updateActiveMenu,
  //     togglePlayPause,
  //     seekSongForward,
  //     seekSongBackward,
  //     // wheelColor,
  //   } = this.props;

  //   console.log("set theme in wheel.js", setTheme);
  //   console.log("currentMenu: ", currentMenu);
  //   console.log("navigationStack: ", navigationStack);

  //   const wheelControl = this.wheelControl;
  //   const wheel = document.getElementById("wheel-container");
  //   const activeRegion = new ZingTouch.Region(wheel);
  //   const menuIcon = document.getElementById("menu");
  //   const playPause = document.getElementById("play-pause");
  //   const backward = document.getElementById("backward");
  //   const forward = document.getElementById("forward");
  //   const centerButton = document.getElementById("blank");

  //   //   const longTapGesture = new ZingTouch.LongPress({
  //   //       maxDelay: 10000,
  //   //       numInput: 1,
  //   //       tolerance: 1
  //   // });

  //   activeRegion.bind(menuIcon, "tap", function (e) {
  //     changeMenuBackward();
  //   });

  //   activeRegion.bind(wheel, "rotate", function (e) {
  //     wheelControl(e);
  //   });

  //   activeRegion.bind(playPause, "tap", function (e) {
  //     togglePlayPause(e);
  //   });

  //   activeRegion.bind(backward, "tap", function (e) {
  //     seekSongBackward(e);
  //   });

  //   activeRegion.bind(forward, "tap", function (e) {
  //     seekSongForward(e);
  //   });

  //   activeRegion.bind(centerButton, "tap", function (e) { 
  //     console.log(`currentMenu: ${currentMenu}`);
  //     console.log(`active: ${active}`);

  //     if (currentMenu === 4) {
  //       console.log("before changing song");
  //       changePlayingSongFromMusicMenu(active);
  //       e.stopPropagation();
  //       return;
  //     }

  //     if (currentMenu === 7) {
  //       console.log("before changing theme");
  //       console.log("active: ${active}");
  //       setTheme(active);
  //       e.stopPropagation();
  //       return;
  //     }

  //     if (currentMenu === 8) {
  //       console.log("before changing wheel color");
  //       console.log("active: ${active}");
  //       setWheelColor(active);
  //       e.stopPropagation();
  //       return;
  //     }



  //     if (currentMenu === 9) {
  //       console.log("before changing wallpaper");
  //       console.log("active: ${active}");
  //       setWallpaper(active);
  //       e.stopPropagation();
  //       return;
  //     }

  //     changeMenuForward();
  //   });
  // }





  componentDidMount() {
    const wheel = document.getElementById("wheel-container");
    const activeRegion = new ZingTouch.Region(wheel);
  
    activeRegion.bind(document.getElementById("menu"), "tap", (e) => {
      this.handleMenuIconTap();
    });
  
    activeRegion.bind(wheel, "rotate", (e) => {
      this.handleWheelRotate(e);
    });
  
    activeRegion.bind(document.getElementById("play-pause"), "tap", (e) => {
      this.handlePlayPauseTap(e);
    });
  
    activeRegion.bind(document.getElementById("backward"), "tap", (e) => {
      this.handleBackwardTap(e);
    });
  
    activeRegion.bind(document.getElementById("forward"), "tap", (e) => {
      this.handleForwardTap(e);
    });
  
    activeRegion.bind(document.getElementById("blank"), "tap", (e) => {
      this.handleCenterButtonTap(e);
    });
  }
  
  // Define handler methods to access the latest state and props
  handleMenuIconTap = () => {
    this.props.changeMenuBackward();
  };
  
  handleWheelRotate = (e) => {
    this.wheelControl(e);
  };
  
  handlePlayPauseTap = (e) => {
    this.props.togglePlayPause(e);
  };
  
  handleBackwardTap = (e) => {
    this.props.seekSongBackward(e);
  };
  
  handleForwardTap = (e) => {
    this.props.seekSongForward(e);
  };
  
  handleCenterButtonTap = (e) => {
    const { currentMenu, active } = this.props;
    console.log(`currentMenu: ${currentMenu}`);
    console.log(`active: ${active}`);
  
    if (currentMenu === 4) {
      console.log("before changing song");
      this.props.changePlayingSongFromMusicMenu(active);
      e.stopPropagation();
      return;
    }
  
    if (currentMenu === 7) {
      console.log("before changing theme");
      this.props.setTheme(active);
      e.stopPropagation();
      return;
    }
  
    if (currentMenu === 8) {
      console.log("before changing wheel color");
      this.props.setWheelColor(active);
      e.stopPropagation();
      return;
    }
  
    if (currentMenu === 9) {
      console.log("before changing wallpaper");
      this.props.setWallpaper(active);
      e.stopPropagation();
      return;
    }
  
    this.props.changeMenuForward();
  };


  


}

export default Wheel;