import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import "./CSS/case.css";

class Case extends React.Component {
  render() {
    const {
      songIndex,
      active,
      menuItems,
      musicItems,
      currentMenuId,
      changeMenuBackward,
      changeMenuForward,
      changePlayingSongFromMusicMenu,
      setWheelColor,
      setWallpaper,
      setTheme,
      navigationStack,
      updateActiveMenu,
      togglePlayPause,
      songItems,
      playing,
      theme,
      audio,
      songUrl,
      songImgUrl,
      seekSongForward,
      seekSongBackward,
      wallpaper,
      wallpaperItems,
      wheelColor,
      noty,
      setNoty,
      notifyText,
      artistImg,
    } = this.props;

    console.log("Current theme in Case.js:", setTheme);
    console.log("set wheel color in Case.js: ", setWheelColor);

    return (
      <>
        <div className="case-container">
          <div style={{ backgroundColor: theme }} className="case">
            <Display
              songIndex={songIndex}
              playing={playing}
              active={active}
              musicItems={musicItems}
              menuItems={menuItems}
              currentMenu={currentMenuId}
              songItems={songItems}
              audio={audio}
              songUrl={songUrl}
              songImgUrl={songImgUrl}
              wallpaper={wallpaper}
              wallpaperItems={wallpaperItems}
              noty={noty}
              setNoty={setNoty}
              notifyText={notifyText}
              artistImg={artistImg}
            />
            <Wheel
              theme={theme}
              active={active}
              menuItems={menuItems}
              currentMenu={currentMenuId}
              changeMenuForward={changeMenuForward}
              changeMenuBackward={changeMenuBackward}
              changePlayingSongFromMusicMenu={changePlayingSongFromMusicMenu}
              setWheelColor={setWheelColor}
              setWallpaper={setWallpaper}
              setTheme={setTheme}
              navigationStack={navigationStack}
              updateActiveMenu={updateActiveMenu}
              togglePlayPause={togglePlayPause}
              seekSongForward={seekSongForward}
              seekSongBackward={seekSongBackward}
              wheelColor={wheelColor}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Case;
