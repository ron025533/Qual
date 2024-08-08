import "../componentStyles/particles.css"
import croix from "../assets/svg/croix.svg"

const Particles = () => {

    return (
        <div className="particles">
            <img src={croix} alt="Qual" className="croix" />
            <div className="rounds" id="littleblue"></div>
            <div className="rounds" id="outlinedorange"></div>
            <div className="rounds" id="littleviolet"></div>
            <div className="rounds" id="minusculered"></div>
            <div className="rounds" id="bigorange"></div>
            <div className="rounds" id="littlered"></div>
            <div className="rounds" id="mediumviolet"></div>
        </div>
    );
}

export default Particles;