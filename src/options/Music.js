import React from "react";
import "./CSS/music.css";

class Music extends React.Component {
  render() {
    const{ songItems, musicItems,active } = this.props;
    console.log("musicItems:", musicItems);
    return <>
                <div className="music">
                    <ul>
                        { musicItems.map((element, index) => {
                            return active === index ? <li key={index} className="active" > &nbsp; {element} </li> : <li key={index} > &nbsp; {element} </li>
                        }) 
                        }
                    </ul>
                </div>

           </>;
  }
}

export default Music;
