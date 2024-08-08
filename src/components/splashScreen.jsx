import "../componentStyles/splashScreen.css"
import qual from "../assets/svg/qualWhite.svg"

const SplashScreen = () => {

    return (
        <div className="splash">
            <img src={qual} alt="Qual" className="qual" />
            <div className="progress">
                <div className="bar"></div>
            </div>
        </div>
    );
}

export default SplashScreen;