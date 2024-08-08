import "../componentStyles/navbar.css"
import logo from "../assets/svg/Qual.svg"
import down from "../assets/svg/down.svg"
import search from "../assets/svg/search.svg"
import profile from "../assets/images/profile.png"

const NavBar = () => {

    return (
        <div className="navbar">
            <div className="start">
                <img src={logo} alt="Qual" />
                <div className="list">
                    <div className="listname">Reservation</div>
                    <div className="listname">About</div>
                    <div className="listname">Offers</div>
                    <div className="listname"><p>Popular</p><img src={down} alt="select" /></div>
                </div>
            </div>
            <div className="end">
                <div className="search">
                    <img src={search} alt="search" />
                    <div className="alert"><p>4</p></div>
                </div>
                <div className="profile">
                    <div className="profile-image" style={{ backgroundImage: `url(${profile})` }}></div>
                    <p className="username">Peterson</p>
                    <img src={down} alt="profile" className="profile" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;