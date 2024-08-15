import "../styles/Home.css"
import "../styles/FlexCard.css"
import map from "../assets/images/map.png"
import win from "../assets/images/win.png"
import trefle from "../assets/images/trefle.png"
import NavBar from "../components/navbar";
import SplashScreen from "../components/splashScreen";
import Particles from "../components/particles";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

const Homepage = () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    useGSAP(() => {

        const splashTl = gsap.timeline()

        splashTl
            .from(".qual", {
                duration: 2,
                opacity: 0,
            })
            .from(".bar", {
                duration: 4.4,
                width: 0,
                ease: "power2",
            })

        gsap.registerPlugin(MotionPathPlugin);

        const colors = ['#FFBE82', '#FF9AAC', '#94D6FF', '#DE98FF'];

        // Set the initial random background color
        document.querySelector(".colorful").style.backgroundColor = colors;
        const initialColor = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector(".splash").style.backgroundColor = initialColor;

        // Create a timeline for the color animation
        const colorTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
        const colorfulTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

        colors.forEach((color) => {
            colorTl.to(".splash", {
                backgroundColor: color,
                duration: 6, // duration of the color transition
                ease: "none", // linear transition
            });
        });

        colors.forEach((colorful) => {
            colorfulTl.to(".colorful", {
                backgroundColor: colorful,
                duration: 8, // duration of the color transition
                ease: "none" // linear transition
            });
        });

        // Time when the page starts loading
        const startTime = new Date().getTime();

        const hide = gsap.timeline();

        // Function to hide the splash screen
        function hideSplashScreen() {

            hide.to(".splash", {
                ease: "power2",
                yPercent: -100,
                duration: 1,
                onComplete: function () {
                    document.querySelector(".splash").style.display = 'none';
                    startAnimations(); // Start all other animations after hiding the splash screen
                }
            });

            gsap.to(".content", {
                opacity: 1,
                duration: 1
            });

            gsap.to(":root", {
                overflowY: "auto",
            });
        }

        // Minimum display time for the splash screen (4 seconds)
        const minDisplayTime = 6000;

        window.onload = function () {
            // Calculate the elapsed time
            const elapsedTime = new Date().getTime() - startTime;

            // Determine how much longer to show the splash screen
            const remainingTime = minDisplayTime - elapsedTime;

            if (remainingTime > 0) {
                setTimeout(hideSplashScreen, remainingTime);
            } else {
                hideSplashScreen();
            }
        };

        function startAnimations() {

            gsap.from("#map, #win, #trefle", {
                duration: 1.5,
                ease: "power2",
                yPercent: 100,
                stagger: 0.5,
            })

            const revealTl = gsap.timeline()

            revealTl
                .to("#map, #trefle, #win", {
                    opacity: 1,
                    ease: "power1",
                    duration: 1.4,
                    stagger: 0.5,
                })
                .to('.plane', {
                    duration: 2.4,
                    scale: 1,
                    ease: "power2",
                    motionPath: {
                        path: ".path",
                        align: ".path",
                        alignOrigin: [0.5, 0.5],
                        autoRotate: true,
                        start: 0
                    },
                })
                .to(".rounds, .croix", {
                    scale: 1,
                    duration: 2,
                    stagger: 0.2,
                })
            // Add more animations as needed
        }

    })

    return (
        <div className="home">
            <Particles />
            <SplashScreen />
            <NavBar />
            <div className="huge-text-container">
                <p className="huge-text bring">Bring</p>
                <div className="middle">
                    <div className="the-border">
                        <div className="the-background">
                            <p className="huge-text">the</p>
                        </div>
                    </div>
                    <div className="two">
                        <div className="to-button">
                            <p className="huge-text">to</p>
                            <div className="static-button">
                                <p className="static-text">Let's travel</p>
                            </div>
                            <div className="airplane">
                                <svg width="92" height="91" viewBox="0 0 92 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="path" d="M1 80C61.5 116.5 119.5 40.5 75 1" stroke="url(#paint0_linear_62_27)" stroke-opacity="0.78" stroke-dasharray="2 2" />
                                    <defs>
                                        <linearGradient id="paint0_linear_62_27" x1="90" y1="16.5" x2="6.00002" y2="97.0001" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.0666637" stop-color="#1E1E1E" stop-opacity="0" />
                                            <stop offset="0.22392" stop-color="#1E1E1E" />
                                            <stop offset="0.71204" stop-color="#1E1E1E" />
                                            <stop offset="0.875797" stop-color="#848484" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className="plane" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_60_20)">
                                        <path d="M34.2368 21.7568L29.3152 22.3768L24.5765 35.7294C24.281 36.4818 23.7882 37.1408 23.15 37.6371C22.5118 38.1333 21.7516 38.4484 20.9495 38.5493L20.6787 38.5834C20.0714 38.6608 19.4544 38.5958 18.8766 38.3935C18.2988 38.1912 17.776 37.8572 17.3496 37.4179C16.9232 36.9787 16.6048 36.4462 16.4197 35.8627C16.2347 35.2791 16.1879 34.6605 16.2833 34.0558L17.9079 23.8139L14.3599 24.2609C13.773 24.3333 13.2062 24.5213 12.6924 24.8142C12.1787 25.107 11.728 25.4988 11.3667 25.9669L9.52425 28.3474C9.05308 28.9537 8.40099 29.3942 7.66256 29.605C6.92413 29.8157 6.13777 29.7857 5.41754 29.5194C4.9721 29.3563 4.56472 29.1038 4.22045 28.7774C3.87619 28.4511 3.60231 28.0578 3.41565 27.6217C3.21109 27.1544 3.10306 26.6505 3.09802 26.1404C3.09299 25.6302 3.19107 25.1244 3.38636 24.6531L5.25873 20.1462C5.76746 18.9262 6.58888 17.8618 7.64017 17.0605C8.69146 16.2591 9.93545 15.7492 11.2467 15.582L16.7695 14.8862L13.4534 8.58074C13.1566 8.01679 13.0009 7.3893 12.9996 6.75202C12.9984 6.11474 13.1516 5.48665 13.4461 4.92151C13.7406 4.35638 14.1678 3.87106 14.6909 3.50709C15.214 3.14312 15.8175 2.91134 16.4498 2.83162C17.2375 2.72814 18.0386 2.83705 18.77 3.14707C19.5015 3.45708 20.1369 3.95695 20.6103 4.59493L27.8495 13.4904L33.1119 12.8274C34.296 12.6782 35.4909 13.0055 36.4336 13.7374C37.3764 14.4692 37.9899 15.5455 38.139 16.7296C38.2882 17.9138 37.9609 19.1086 37.2291 20.0514C36.4973 20.9942 35.4209 21.6076 34.2368 21.7568ZM19.2524 34.5224C19.2296 34.6671 19.2408 34.8151 19.285 34.9548C19.3292 35.0944 19.4054 35.2219 19.5073 35.3271C19.6093 35.4322 19.7343 35.5123 19.8725 35.5609C20.0107 35.6094 20.1583 35.6252 20.3037 35.607L20.5745 35.5728C20.8343 35.5424 21.0814 35.4438 21.2908 35.287C21.5002 35.1303 21.6644 34.921 21.7668 34.6803L25.9845 22.7964L21.0064 23.4236L19.2524 34.5224ZM33.4868 15.8039L27.3985 16.5709C27.1459 16.6025 26.8894 16.5694 26.6532 16.4746C26.417 16.3798 26.2087 16.2264 26.0481 16.0289L18.2291 6.41886C18.0715 6.20029 17.8579 6.02823 17.6108 5.92076C17.3637 5.81328 17.0921 5.77437 16.8248 5.8081C16.6735 5.82703 16.529 5.8824 16.4039 5.96946C16.2787 6.05652 16.1765 6.17268 16.1061 6.30794C16.0357 6.4432 15.9992 6.59353 15.9997 6.74601C16.0002 6.89848 16.0378 7.04856 16.1091 7.18334L20.4319 15.4075C20.5444 15.6221 20.6033 15.8607 20.6034 16.1029C20.6036 16.3452 20.5451 16.5839 20.4329 16.7986C20.3208 17.0133 20.1583 17.1977 19.9593 17.3359C19.7604 17.4741 19.5309 17.5621 19.2906 17.5923L11.6217 18.5584C10.8359 18.6588 10.0905 18.9647 9.46084 19.4454C8.83119 19.9261 8.33959 20.5645 8.03573 21.2961L6.15612 25.8054C6.11699 25.9014 6.09729 26.0043 6.09816 26.108C6.09903 26.2117 6.12044 26.3142 6.16117 26.4095C6.18438 26.4736 6.22085 26.532 6.26818 26.581C6.31552 26.63 6.37266 26.6685 6.43587 26.6939C6.53374 26.7311 6.63908 26.7442 6.74308 26.7323C6.90266 26.7111 7.04782 26.6289 7.14808 26.5029L8.99124 24.1284C9.59416 23.3477 10.346 22.6943 11.2032 22.2061C12.0603 21.7179 13.0058 21.4047 13.9849 21.2844L33.8618 18.7803C34.2565 18.7306 34.6153 18.5261 34.8592 18.2119C35.1032 17.8976 35.2123 17.4993 35.1626 17.1046C35.1128 16.7099 34.9084 16.3511 34.5941 16.1072C34.2798 15.8633 33.8816 15.7541 33.4868 15.8039Z" fill="#1E1E1E" fill-opacity="0.84" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_60_20">
                                            <rect width="36" height="36" fill="white" transform="matrix(0.992158 -0.124992 -0.124992 -0.992158 4.8587 40.5764)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <p className="huge-text" id="best">best</p>
                    </div>
                </div>
                <p className="huge-text" id="destinations">destinations</p>
            </div>
            <div className="colorful">+500 destinations ready for you!</div>
            <div className="svgs">
                <div className="svgcontainer">
                    <img src={map} id="map" alt="map" />
                </div>
                <div className="svgcontainer">
                    <img src={win} id="win" alt="window" />
                </div>
                <div className="svgcontainer">
                    <img src={trefle} id="trefle" alt="trefle" /></div>
            </div>
            <div className="particles"></div>

            <div className="flexCard">
                <div className="flexCard-top">
                    <div className="FlexCard-text">
                        <p className="FlexCard-Title">Popular Destination</p>
                        <p className="FlexCard-description">Discover the world's most popular places.</p>
                    </div>
                    <div className="FlexCard-button">Explore more</div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
