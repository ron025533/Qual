import "../styles/NotFound.css"
import NavBar from "../components/navbar";
import Lottie from "lottie-react";
import animationData from '../assets/lottie/404.json';
import { useEffect } from "react";

const NotFound = () => {

    useEffect (() => {
        document.title = "error 404";
    }, [])

    return (
        <div className="notfound">
            <NavBar />
            <div className="notfound-container">
                <div className="lost-text">
                    <p className="biglost">Well, dang it!</p>
                    <p className="lostmessage">We couldn’t find the page you are looking for.</p>
                    <div className="littletext">
                        <p className="proposition">How about returning in the</p>
                        <p className="homepagelink">homepage</p>
                    </div>
                </div>
                <div className="illustration404">
                    <Lottie animationData={animationData} loop={true} className="animation404" />
                </div>
            </div>
        </div>
    );
}

export default NotFound;