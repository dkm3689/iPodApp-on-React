import React from "react";
import "./CSS/playing.css";

class Playing extends React.Component {

    constructor() {
        super()
        this.state={
            currentTime:0,
        }
        this.intervalId="";
    }

    componentDidMount() {
        const {audio, songUrl} = this.props;
        audio.src = songUrl;
        console.log("songUrl", songUrl);
        this.setState({ currentTime: audio.currentTime });
        this.intervalId = setInterval(() => {
            this.setState({ currentTime: this.props.audio.currentTime });
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

  render() {

    const {songItems, playing, songIndex, audio, songImgUrl} = this.props;
    // extracting minutes and seconds
    var currentTimeRender = Math.floor(this.state.currentTime / 60) +":" + Math.floor(this.state.currentTime%60);
    var durationRender = Math.floor(audio.duration/60) + ":" + Math.floor(audio.duration%60);
    const percentageRender = { width: (this.state.currentTime/audio.duration*100) + "%" };
    if( durationRender==="NaN:NaN" ) { //if no song in a audio
        durationRender="0:00";
    }

    //pad start adds padding in the beginning before it becomes 2 characters length like 10
    if (Math.floor(this.state.currentTime / 60) < 10) {
        currentTimeRender = "0" + Math.floor(this.state.currentTime / 60) + ":" + Math.floor(this.state.currentTime % 60).toString().padStart(2, '0');
    }

    // if(Math.floor(this.state.currentTime/60) < 10 ) {
    //     currentTimeRender = Math.floor(this.state.currentTime / 60) +":0" + Math.floor(this.state.currentTime%60);
    // }

    return (
          <>
            <div className="now-playing-container"> 
                <div className="song-details">
                    <img src={songImgUrl} alt="songImg" />
                    <div >
                        <h6> {songItems[songIndex]} </h6>
                        {/* {console.log("song1", songItems[songIndex])} */}
                        {playing && <h4 className="play-pause-nav" > Playing </h4> }
                        { !playing && <h4 className="play-pause-nav" > Paused </h4> } 
                    </div>
                </div>

                <div className="status">
                    {currentTimeRender}
                    <div id="progress">
                           <div id="progress-bar" style= { { width: percentageRender } } > </div>
                    </div>
                    {durationRender}
                </div>

            </div>

          </>
)   

  }
}

export default Playing;