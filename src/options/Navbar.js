import React from 'react';
// import battery from "../images/battery.png";
import battery from "../assets/images/battery.png";
import './CSS/Navbar.css';
import { FaBatteryHalf } from "react-icons/fa6";

class Navbar extends React.Component {

    constructor() {
            super();
            this.state = {
              time: this.getCurrentTime(),
            }
            this.stateId="";
    }

    componentDidMount() {
        const {noty} = this.props;
        if(noty===true){
            return;
        }
        this.stateId = setInterval(() => {
            this.setState({ time: this.getCurrentTime() });
    }, 60000);
    }
    
    componentDidUpdate() {
        const {setNoty, noty} = this.props;
        if(noty===true) {
            setTimeout(() => {
                setNoty();
            }, 1000);
        }
    }

    componentWillUnmount() {
        const {noty} = this.props;
        if(noty != true) {
            clearInterval(this.stateId);
        }   
    }


    getCurrentTime() {
        const Today = new Date();
        var time = Today.getHours() + ":" + Today.getMinutes();

        if(Today.getMinutes() < 10) {
            time = Today.getHours() + ":0" + Today.getMinutes();
        }
        return time;

    }
  


    render() {
        const {time} = this.state;
        const {noty, notifyText} =this.props;
        return (
            <>
                <div className="bar">
                    {/* <h1>Navbar</h1> */}
                    <h5 className='heading'> iPod </h5>
                    {/* <h3 className="time"> {time} </h3> */}
                    { noty===true && <h5 className="notification"> {notifyText} </h5>}
                    { noty === false && <h3 className="time" > {time} </h3>  }
                    <div className="right-container-nav">
                       < FaBatteryHalf className="battery" />
                        {/* <img className='battery' src={battery} alt='battery'/> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;