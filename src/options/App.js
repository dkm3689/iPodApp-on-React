import React from "react";
import Case from "./Case";

//import songs
import song1 from "../assets/songs/Tauba-Tauba-From-Bad-Newz-Karan-Aujla.mp3";
import song2 from "../assets/songs/Winning Speech-Karan Aujla.mp3";

//import song images
import songImg1 from "../assets/images/tauba-tauba-image.jpeg";
import songImg2 from "../assets/images/winning-speech-image.jpeg";

// import wallpapers
import wallpaper1 from "../assets/images/wallpaper1.jpg";
import wallpaper2 from "../assets/images/wallpaper2.jpg";
import wallpaper3 from "../assets/images/wallpaper3.jpg";

import artistImg from "../assets/images/artist.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // number of active items
      active: 0,
      menuItems: ["now playing", "music", "games", "settings"], // current menu 0, 1, 2, 3
      musicItems: ["All Songs", "Artist", "Albums"],
      songImgItemsUrl: [songImg1, songImg2],
      wallpaperItems: [wallpaper1, wallpaper2, wallpaper3],
      //song names
      songItems: [
        "Tauba-Tauba-From-Bad-Newz-Karan-Aujla",
        "Winning-Speech-Karan-Aujla"
      ],
      songIndex: 0, //current song
      lengthMenuKey: { "-1": 4, 1: 3, 3: 3, 4: 2, 7: 4, 8: 3, 9: 3 }, //length of any menu
      menuMapping: {
        "-1": [0, 1, 2, 3],
        1: [4, 5, 6],
        3: [7, 8, 9],
        4: [10, 11],
        7: [12, 13, 14],
        8: [15, 16, 17],
        9: [18, 19, 20]
      },
      currentMenu: -2,
      navigationStack: [], // for navigation in and out of the navigation, in push ya pop krod
      songArray: [song1, song2],
      songUrl: song1, //current song url
      playing: false,
      theme: "", //"color"
      audio: new Audio(),
      songImgUrl: songImg1,
      wheelColor: "white",
      wallpaper: 0,
      noty: false,
      notifyText: "Wallpaper has been Changed!",
      artistImg: artistImg,
    };

    this.seekSongForward = this.seekSongForward.bind(this);
    this.seekSongBackward = this.seekSongBackward.bind(this);
    this.changePlayingSongFromMusicMenu = this.changePlayingSongFromMusicMenu.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setWheelColor = this.setWheelColor.bind(this);
    this.setWallpaper = this.setWallpaper.bind(this);
    // this.setNotify = this.setNotify.bind(this);
  }

  unlockButton(e) {
    if (this.state.currentMenu === -2) {
    } else {
      return;
    }
  }

  // plays next song when forward button in long pressed
  seekSongForward(e) {
    if (this.state.currentMenu === -2) return;
    if (this.state.playing == false) return;

    //changing to next song if f/w button pressed less than 250ms
    // e is the event created when any event object is created (here fw button clicked)
    // it holds the necessary info for the event detail.interval property of event hold time interval
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === this.state.songItems.length - 1) {
        songIndex = 0;
      } else {
        songIndex++;
      }

      const songUrl = this.state.songArray[songIndex];
      const songImgUrl = this.state.songImgItemsUrl[songIndex];

      this.setState(
        {
          songIndex: songIndex,
          songImgUrl: songImgUrl,
          songUrl: songUrl,
          audio: new Audio(songUrl),
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (e.detail.interval > 250 && e.detail.interval < 1000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime += interval;
        return prevState;
      });
    }
  }

  // plays next song when forward button in long pressed
  seekSongBackward(e) {
    if (this.state.currentMenu === -2) return;
    if (this.state.playing == false) return;
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === 0) {
        songIndex = this.state.songItems.length - 1;
      } else {
        songIndex--;
      }

      const songUrl = this.state.songArray[songIndex];
      const songImgUrl = this.state.songImgItemsUrl[songIndex];

      this.setState(
        {
          songIndex: songIndex,
          songImgUrl: songImgUrl,
          songUrl: songUrl,
          audio: new Audio(songUrl),
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (e.detail.interval > 250 && e.detail.interval < 1000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime -= interval;
        return prevState;
      });
    }
  }

  // song play/pause function
  togglePlayPause = () => {
    if (this.state.currentMenu == -2) {
      return;
    }

    if (this.state.playing == true) {
      this.setState({ playing: false });
      this.state.audio.pause();
    }

    if (this.state.playing == false) {
      this.setState({ playing: true });
      this.state.audio.play();
    }
  };

  //function for updating the active menu
  updateActiveMenu = (direction, menu) => {
    if (
      menu !== -1 &&
      menu !== 1 &&
      menu !== 3 &&
      menu !== 4 &&
      menu !== 7 &&
      menu !== 8 &&
      menu !== 9
    ) {
      return;
    }
    let min = 0;
    let max = 0;
    max = this.state.lengthMenuKey[menu];
    if (direction === 1) {
      if (this.state.active >= max-1) {
        this.setState({ active: min });
      } else {
        this.setState({ active: this.state.active + 1 });
      }
    } else {
      if (this.state.active <= min) {
        this.setState({ active: max - 1 });
      } else {
        this.setState({ active: this.state.active - 1 });
      }
    }
  };

  //function for changing the theme
  setTheme = (id) => {  
    if(this.state.currentMenu !== 7) return;
    let theme = "";
    if (id === 0) {
      theme = "#f0f0f0";
    } else if (id === 1) {
      theme = "#555d50";
    } else if (id === 2) {
      theme = "#FFCC00";
    } else if (id === 3) {
      theme = "#c4aead";
    }

    this.setState({
      theme: theme,
      noty: true,
      notifyText: "Theme has been changed!",
    }); //theme change notification
    return;
  };

  //change wallpaper
  setWallpaper = (id) => {
    this.setState({
      wallpaper: id,
      noty: true,
      notifyText: "Wallpaper Changed",
    });
    return;
  };

  //wheel color change
  setWheelColor = (id) => {
    let wheelColor = "";
    if (id === 0) {
      wheelColor = "#212121";
    } else if (id === 1) {
      wheelColor = "white";
    } else if (id === 2) {
      wheelColor = "#b5651d";
    }
    
    this.setState({
      wheelColor: wheelColor,
      noty: true,
      notifyText: "Wheel Color Changed",
    }, () => {console.log("inside setWheelColor after wheel color change: ", wheelColor);});
    return;
  };

  changeMenuBackward = () => {
    const navigationStack = this.state.navigationStack.slice(); //for navigation slice creates copy of original array
    if (this.state.currentMenu == -2) {
      return;
    } else {
      const prevId = navigationStack.pop();
      this.setState({
        currentMenu: prevId,
        navigationStack: navigationStack,
        active: 0,
      });
      return;
    }
  };

  // changePlayingSongFromMusicMenu = (id) => {
  //   console.log("inside change song from music");
  //   const songUrl = this.state.songArray[id];
  //   const songImgUrl = this.state.songImgItemsUrl[id];
  //   const navigationStack = this.state.navigationStack.slice();

  //   const audio = this.state.audio;
  //   audio.pause();

  //   setTimeout(() => {
  //     // audio.currentTime = 0;
  //     audio.src = songUrl;
  //     audio.load();
  //     audio.play();

  //     this.setState(
  //       {
  //         currentMenu: 0,
  //         songUrl: songUrl,
  //         navigationStack: navigationStack,
  //         active: 0,
  //         playing: true,
  //         songIndex: id,
  //         // audio: new Audio(songUrl),
  //         songImgUrl: songImgUrl,
  //       },
  //       () => {
  //         this.state.audio.play();
  //       }
  //     );

  //   }, 2000);
     
  //   return;
  // };



  changePlayingSongFromMusicMenu = (id) => {
    console.log("inside change song from music");
  
    const songUrl = this.state.songArray[id];
    const songImgUrl = this.state.songImgItemsUrl[id];
    
    const audio = this.state.audio;
  
    // Pause the audio
    audio.pause();
  
    // Set a timeout to ensure the pause is complete
    setTimeout(() => {
      audio.src = songUrl; // Set the new song URL
      audio.load(); // Load the new song
      audio.play().catch((error) => {
        console.error("Playback error:", error);
      });
  
      // Update the state after the song has changed
      this.setState({
        currentMenu: 0,
        songUrl: songUrl,
        active: 0,
        playing: false,
        songIndex: id,
        songImgUrl: songImgUrl,
      });
    }, 50); // Adjust the timeout as necessary
  };


  changeMenuForward = () => {
    const { currentMenu, active, navigationStack, menuMapping } = this.state;
    const newNavigationStack = [...navigationStack, currentMenu];

    // Determine next menu ID from current active option

    if(currentMenu===4 || currentMenu === 7 || currentMenu === 8 || currentMenu === 9 ) return;


    let nextMenu;
    if (currentMenu === -2) {
      nextMenu = -1;
    } else if (menuMapping[currentMenu]) {
      nextMenu = menuMapping[currentMenu][active];
      console.log("next menu or menu being updated:", nextMenu);
    } else {
      nextMenu = active; // Use active item as the menu ID if no mapping
    }

    // Debug logging
    console.log(`Navigating Forward: from ${currentMenu} to ${nextMenu}`);
    console.log("Current Navigation Stack:", newNavigationStack);

    // Update state with new menu and stack
    this.setState({
      currentMenu: nextMenu,
      navigationStack: newNavigationStack,
      active: 0, // reset active for new menu
    },
    () => {
      console.log(`Current Menu Updated: ${this.state.currentMenu}`);
    }
  );
    // console.log(`Current Menu Updated: ${currentMenu}`);
  };

  // changeMenuForward = () => {
  //   console.log("inside change menu forward");
  //   const navigationStack = this.state.navigationStack.slice();
  //   const fromMenu = this.state.currentMenu;
  //   const id = this.state.active;
  //   console.log(`id: ${id} fromMenu: ${fromMenu}`);
  //   if (
  //     fromMenu !== -2 &&
  //     fromMenu !== -1 &&
  //     fromMenu !== 1 &&
  //     fromMenu !== 4 &&
  //     fromMenu !== 3 &&
  //     fromMenu !== 8 &&
  //     fromMenu !== 9 &&
  //     fromMenu !== 0 &&
  //     fromMenu !== 7 &&
  //     fromMenu !== 10
  //   ) {
  //     return;
  //   }

  //   if (fromMenu === -1) {
  //     navigationStack.push(this.state.currentMenu);
  //     this.setState({
  //       currentMenu: id,
  //       navigationStack: navigationStack,
  //       active: 0,
  //     });
  //     return;
  //   }

  //   if (fromMenu === -2) {
  //     navigationStack.push(this.state.currentMenu);
  //     console.log("inside fromMenu === -2");
  //     this.setState({
  //       currentMenu: id,
  //       navigationStack: navigationStack,
  //       active: 0,
  //     });
  //     console.log(`currentMenu: ${this.state.currentMenu}`);
  //     return;
  //   }

  //   if (fromMenu === 7 || fromMenu === 0) {
  //     this.togglePlayPause();
  //     return;
  //   }

  //   if (fromMenu === 8) {
  //     this.setTheme(id);
  //     return;
  //   }

  //   if (fromMenu === 9) {
  //     this.setWheelColor(id);
  //     return;
  //   }

  //   if (fromMenu === 10) {
  //     this.setWallpaper(id);
  //     return;
  //   }

  //   navigationStack.push(this.state.currentMenu);
  //   if (fromMenu === 4) {
  //     this.changePlaylistSongFromMusicMenu(id, navigationStack, fromMenu);
  //     return;
  //   }

  //   const currentMenuId = this.state.menuMapping[fromMenu][id];
  //   this.setState({
  //     currentMenu: currentMenuId,
  //     navigationStack: navigationStack,
  //     active: 0,
  //   });
  // };

  //set notification status after notified
  setNoty = () => {
    this.setState({ noty: false });
    return;
  };

  render() {
    const {
      audio,
      active,
      currentMenu,
      menuItems,
      musicItems,
      songItems,
      playing,
      songIndex,
      theme,
      songUrl,
      songImgUrl,
      wheelColor,
      wallpaper,
      wallpaperItems,
      noty,
      notifyText,
      artistImg,
    } = this.state;

    return (
      <>
        <Case
          songIndex={songIndex}
          active={active}
          menuItems={menuItems}
          musicItems={musicItems}
          currentMenuId={currentMenu}
          changeMenuBackward={this.changeMenuBackward}
          changeMenuForward={this.changeMenuForward}
          changePlayingSongFromMusicMenu={this.changePlayingSongFromMusicMenu}
          setWheelColor={this.setWheelColor}
          setWallpaper={this.setWallpaper}
          navigationStack={this.state.navigationStack}
          updateActiveMenu={this.updateActiveMenu}
          setTheme={this.setTheme}
          togglePlayPause={this.togglePlayPause}
          songItems={songItems}
          playing={playing}
          theme={theme}
          audio={audio}
          songUrl={songUrl}
          songImgUrl={songImgUrl}
          seekSongForward={this.seekSongForward}
          seekSongBackward={this.seekSongBackward}
          wallpaper={wallpaper}
          wallpaperItems={wallpaperItems}
          wheelColor={wheelColor}
          noty={noty}
          setNoty={this.setNoty}
          notifyText={notifyText}
          artistImg={artistImg}
        />
      </>
    );
  }
}

export default App;
