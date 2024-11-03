import React from "react";
import "../options/CSS/songs.css";

class Song extends React.Component {
  render() {

    const {songItems, active} = this.props;

    return (
            <>
              <div className="songs"> 
                <h2> Songs </h2>
                <ul>
                { songItems.map((element, index) => {
                            return active === index ? <li key={index} className="active" > &nbsp; {element} </li> : <li key={index} > &nbsp; {element} </li>
                        }) 
                        }
                </ul>
              </div>
    
            </>
            );
  }
}

export default Song;
