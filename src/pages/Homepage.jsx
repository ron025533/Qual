import "../styles/Homepage.css"
import "../styles/Introducing.css"
import "../styles/Works.css"
import "../styles/Showcase.css"
import "../styles/Footer.css"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from "gsap/gsap-core"
import "splitting/dist/splitting.css";
import Splitting from "splitting";
import { useEffect } from "react"
import Lenis from 'lenis'
import { Link } from 'react-router-dom'
import ron from "../assets/images/ron.svg"
import spinstar from "../assets/images/myStar.svg"
import orita from "../assets/images/Orita.svg"
import lumens from "../assets/images/Lumens.svg"
import array from "../assets/images/Array.svg"
import fivegears from "../assets/images/5Gears.svg"
import dinoprint from "../assets/images/Dinoprint.svg"
import aboutimage from "../assets/images/about.png"
import figma from "../assets/images/Figma.svg"
import illustrator from "../assets/images/Illustrator.svg"
import photoshop from "../assets/images/Photoshop.svg"
import framer from "../assets/images/Framer.svg"
import weird from "../assets/images/weirdShapes.svg"
import verticalone from "../assets/images/verticalone.png"
import verticaltwo from "../assets/images/verticaltwo.png"
import horizontal from "../assets/images/horizontal.png"
import lumenslogo from "../assets/images/Lumens.png"
import serenitylogo from "../assets/images/serenity.png"
import arraylogo from "../assets/images/Array.png"
import pearl from "../assets/images/Pearl.png"
import { addHtml, removeHtml, addCss, removeCss, addJs, removeJs, addReact, removeReact } from "../hooks/AddRemove";

<link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css" />

function Homepage() {

    useEffect(() => {

        const lenis = new Lenis()

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 800)
        })

    }, []);

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger, Timeline)
        let selection = Splitting();

        gsap.from(selection[0].chars, {
            color: "#0f0f0f",
            stagger: 8,
            duration: 100,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".showcase-text-section",
                start: "0% 40%",
                end: "100% 80%",
                scrub: true,
                // markers: true,
            }
        })

        let wowTl = gsap.timeline()

        ScrollTrigger.create({
            animation: wowTl,
            trigger: '.wow-section',
            start: 'top center',
            end: 'bottom center',
            toggleActions: "restart reverse restart reverse",
            // markers: true,
        });

        gsap.from('.big-two-text', {
            yPercent: 200,
            duration: 0.8,
            ease: "power1.out",
            scrollTrigger: {
                trigger: '.wow-section',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "restart reverse restart reverse",
                // markers: true,
            }
        })

        wowTl.from('.big-one-text', {
            yPercent: 200,
            duration: 1,
            ease: "power4"
            // scrollTrigger: {
            //     trigger: ".wow-section",
            //     start: "top 50%",
            //     speed: 500,
            //     markers: true
            // }
        })
            .from('.big-two', {
                xPercent: -28.3,
                duration: 0.8,
                ease: "power1.out"
            })
            .from('.little-speech', {
                yPercent: -200,
                duration: 0.8,
                ease: "power1.out",
                autoAlpha: 0.5,
                lineHeight: "60px",
            });

        let logoTl = gsap.timeline()

        ScrollTrigger.create({
            animation: logoTl,
            trigger: '.transition-container',
            start: 'top center',
            end: 'bottom center',
            toggleActions: "play none none none",
        })

        gsap.from('.button-paragraph, .colored-text, .colored-text, .button-text', {
            width: 0,
            duration: 1,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: '.transition-container',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "restart none none reverse",
                // markers: true,
            }
        })

        logoTl.from('#Orita', {
            yPercent: -100,
            duration: 0.4,
            ease: "back.inOut"
        })
            .from('#Lumens', {
                xPercent: -100,
                duration: 0.4,
                ease: "back.inOut"
            })
            .from('#inter', {
                yPercent: 100,
                duration: 0.4,
                ease: "back.inOut"
            })
            .from('#gotham', {
                xPercent: 100,
                duration: 0.4,
                ease: "back.inOut"
            })
            .from('#inknut', {
                yPercent: -100,
                duration: 0.4,
                ease: "back.inOut"
            })

        let floatingFirst = gsap.timeline()
        let floatingSecond = gsap.timeline()
        let floatingThird = gsap.timeline()
        let floatingFourth = gsap.timeline()

        floatingFirst.to('#first-card', {
            yPercent: -24,
            scrollTrigger: {
                trigger: '.introducing-section',
                start: '20% center',
                end: 'bottom 20%',
                toggleActions: "play none none reverse",
                scrub: 10,
                ease: "back",
                // markers: true,
            },
        })

        floatingSecond.to('#second-card', {
            yPercent: -36,
            scrollTrigger: {
                trigger: '.introducing-section',
                start: '20% center',
                end: 'bottom 20%',
                toggleActions: "play none none reverse",
                scrub: 10,
                ease: "back",
                // markers: true,
            },
        })

        floatingThird.to('#third-card', {
            yPercent: -16,
            scrollTrigger: {
                trigger: '.introducing-section',
                start: '20% center',
                end: 'bottom 20%',
                toggleActions: "play none none reverse",
                scrub: 10,
                ease: "back",
                // markers: true,
            },
        })

        floatingFourth.to('#fourth-card', {
            yPercent: -30,
            scrollTrigger: {
                trigger: '.introducing-section',
                start: '20% center',
                end: 'bottom 20%',
                toggleActions: "play none none reverse",
                scrub: 10,
                ease: "back",
                // markers: true,
            },
        })

        gsap.to('.para', {
            borderBottomLeftRadius: "44px",
            borderBottomRightRadius: "54px",
            scrollTrigger: {
                trigger: ".trick",
                scrub: 10,
                start: "top 80%",
                end: "80% 80%",
                // markers: true,
            }
        })

        gsap.from('.speciality', {
            scale: 0.1,
            duration: 1,
            scrollTrigger: {
                trigger: '.works-second-section',
                scrub: true,
                start: "-150% 0%",
                end: "20% 40%",
                // markers: true,
            }
        })

        gsap.from('.project-bottom', {
            scale: 0.1,
            duration: 1,
            scrollTrigger: {
                trigger: '.works-second-section',
                scrub: true,
                start: "-150% 0%",
                end: "20% 40%",
                // markers: true,
            }
        })

        gsap.from('.intro-line', {
            width: '0px',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.introducing-section',
                // markers: true,
                start: "0% 50%",
                toggleActions: "play none none reverse",
            }
        })

        gsap.from('.work-line', {
            width: '0px',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.works-section',
                // markers: true,
                start: "0% 50%",
                toggleActions: "play none none reverse",
            }
        })

        gsap.from('.show-line', {
            width: '0px',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.showcase-text-section',
                // markers: true,
                start: "0% 50%",
                toggleActions: "play none none reverse",
            }
        })

        gsap.from('.stat-lines', {
            width: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.floating-cards',
                // markers: true,
                start: "0% 50%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from('.bar', {
            height: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.project',
                start: "24% 80%",
                end: "100% 100%",
                // markers: true,
                toggleActions: "play none play reverse",
            }
        })

        gsap.from('.round-bubble', {
            margin: 0,
            duration: 1,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: '.project',
                start: "10% 80%",
                end: "100% 100%",
                // markers: true,
                toggleActions: "play none play reverse",
            }
        })

        var htmlfloat = gsap.timeline()

        htmlfloat.from('#html', {
            scale: 0,
        })

    })

    addHtml()
    removeHtml()
    addCss()
    removeCss()
    addJs()
    removeJs()
    addReact()
    removeReact()

    return (
        <div className="home-container">
            <div className="big-section">
                <div className="para">
                    <div className="wow-section">
                        <div className="floating-element">
                            <div className="logo">
                                <img src={ron} alt="Ron's portfolio" />
                            </div>
                            <Link to="mailto:ron.andraina@gmail.com" className="contact-button">Contact</Link>
                        </div>
                        <div className="big-text-part">
                            <div className="big-one">
                                <p className="big-one-text">Designer</p>
                            </div>
                            <div className="big-two">
                                <p className="little-speech">Welcome to my Portfolio! Discover me and my work here by scrolling the page till the end</p>
                                <p className="big-two-text">Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="transition-container">
                        <div className="transition-content">
                            <div className="transition-button">
                                <div className="button-container">
                                    <div className="button-text">
                                        <p className="button-paragraph">Let's make cool stuff</p>
                                    </div>
                                    <div className="colored-button">
                                        <p className="colored-text">Collaborate</p>
                                    </div>
                                </div>
                            </div>
                            <div className="transition-logo">
                                <div className="logo-animation">
                                    <div className="logo-container" id="Orita">
                                        <img src={orita} alt="Orita" className="logos" />
                                        <p className="logo-title" id="century">Orita</p>
                                    </div>
                                </div>
                                <div className="logo-animation">
                                    <div className="logo-container" id="Lumens">
                                        <img src={lumens} alt="Lumens" className="logos" />
                                        <p className="logo-title" id="lexend">Lumens</p>
                                    </div>
                                </div>
                                <div className="logo-animation">
                                    <div className="logo-container" id="inter">
                                        <img src={array} alt="Array" className="logos" />
                                        <p className="logo-title">Array</p>
                                    </div>
                                </div>
                                <div className="logo-animation">
                                    <div className="logo-container" id="gotham">
                                        <img src={fivegears} alt="FiveGears" className="logos" />
                                        <p className="logo-title">5Gears</p>
                                    </div>
                                </div>
                                <div className="logo-animation">
                                    <div className="logo-container" id="inknut">
                                        <img src={dinoprint} alt="Dinoprint" className="logos" />
                                        <p className="logo-title">Dinoprint</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="introducing-section">
                        <div className="introducing-title">
                            <div className="top-introducing">
                                <p className="start">Introducing</p>
                                <div className="stylizing-line purple round intro-line"></div>
                            </div>
                            <div className="big-text-introducing">
                                <p>Trying my best every day</p>
                            </div>
                        </div>
                        <div className="floating-cards">
                            <div className="card-display between" id="first-card">
                                <div className="about-card">
                                    <div className="top-card">
                                        <div className="card-title">
                                            <img src={spinstar} alt="logo" className="spin-star" />
                                            <p>About</p>
                                        </div>
                                        <div className="presentation">
                                            <p className="presentation-little">My name is</p>
                                            <p className="presentation-name">Andrianarivony Aaron</p>
                                        </div>
                                        <p className="description-text">
                                            I describe Myself as just a boy who want to evolve in every project and every work!
                                        </p>
                                    </div>
                                    <div className="about-image">
                                        <img src={aboutimage} alt="about" />
                                    </div>
                                </div>
                                <div className="tool-card">
                                    <div className="tool-title">Tools</div>
                                    <div className="tool-list">
                                        <img src={figma} alt="figma" />
                                        <img src={illustrator} alt="Illustrator" />
                                        <img src={photoshop} alt="Photoshop" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-display end" id="second-card">
                                <div className="animation-card">
                                    <div className="animation-logo">
                                        <img src={framer} alt="Framer" />
                                    </div>
                                    <div className="animation-blabla">
                                        <p className="animation-title">Animation</p>
                                        <p className="animation-text">I can animate everything easily</p>
                                    </div>
                                </div>
                                <div className="demo-card">
                                    <div className="top-demo">
                                        <p className="demo-text">A weird <span className="purple-color">shape</span> with another weird <span className="yellow-color">shape</span></p>
                                        <div className="tag">Demo</div>
                                    </div>
                                    <div className="animation-demo">
                                        <img src={weird} alt="weird" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-display end" id="third-card">
                                <div className="extra-card">
                                    <div className="top-extra">
                                        <div className="card-title">
                                            <img src={spinstar} alt="logo" className="spin-star" />
                                            <p>Extra</p>
                                        </div>
                                        <p className="extra-text">Making Illustration</p>
                                    </div>
                                    <div className="illustration-container">
                                        <div className="vertical-illustration">
                                            <div className="vertical">
                                                <img src={verticalone} alt="verti" />
                                            </div>
                                            <div className="vertical">
                                                <img src={verticaltwo} alt="verti" />
                                            </div>
                                        </div>
                                        <div className="horizontal-illustration">
                                            <img src={horizontal} alt="hori" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-display between" id="fourth-card">
                                <div className="ability-card">
                                    <div className="ability-title">
                                        <img src={spinstar} alt="logo" className="spin-star" />
                                        <p>Ability</p>
                                    </div>
                                    <div className="ability-lines">
                                        <div className="line design-line"></div>
                                        <div className="line animation-line"></div>
                                        <div className="line coding-line"></div>
                                    </div>
                                </div>
                                <div className="statistics-card">
                                    <div className="text-tag">
                                        <div className="top-statistics">
                                            <div className="top-top">
                                                <p className="statistics-text">My skills</p>
                                            </div>
                                            <div className="tag">Note</div>
                                        </div>
                                        <p className="statistics-blabla">
                                            Giving a note to my abilities organized in three category
                                        </p>
                                    </div>
                                    <div className="statistics-description">
                                        <div className="stats">
                                            <div className="stats-name">
                                                <div className="little-round design-line"></div>
                                                <p>Design</p>
                                            </div>
                                            <div className="stats-stats">
                                                <p className="note">A++</p>
                                                <div className="line-container">
                                                    <div className="stat-lines design-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="stats">
                                            <div className="stats-name">
                                                <div className="little-round animation-line"></div>
                                                <p>Animation</p>
                                            </div>
                                            <div className="stats-stats">
                                                <p className="note">A+</p>
                                                <div className="line-container">
                                                    <div className="stat-lines animation-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="stats">
                                            <div className="stats-name">
                                                <div className="little-round coding-line"></div>
                                                <p>Coding</p>
                                            </div>
                                            <div className="stats-stats">
                                                <p className="note">A+</p>
                                                <div className="line-container">
                                                    <div className="stat-lines coding-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-section">
                        <div className="works-title">
                            <div className="top-works">
                                <p className="start">Works</p>
                                <div className="stylizing-line blue round work-line"></div>
                            </div>
                        </div>
                        <div className="works-logo">
                            <div className="logo-description">
                                <div className="card-title">
                                    <img src={spinstar} alt="logo" className="spin-star" />
                                    <p>Logo Conception</p>
                                </div>
                                <div className="big-text-works">
                                    <p>Need a good logo for your company or anything else ?</p>
                                </div>
                                <p className="note">Notice that vector, color manipulation and line are my specialities</p>
                            </div>
                            <div className="logo-demo">
                                <div className="logo-container" id="lumens-container">
                                    <div className="logo-svg" id="lumens-logo">
                                        <img src={lumenslogo} alt="Lumens" width={38} />
                                    </div>
                                    <div className="logo-info">
                                        <div className="logo-name">Lumens</div>
                                        <div className="logo-tips">A flame logo with a circular gradient color from the middle making his way in bottom before going to the top of the ember</div>
                                    </div>
                                </div>
                                <div className="logo-container">
                                    <div className="logo-svg">
                                        <img src={serenitylogo} alt="Serenity" width={38} />
                                    </div>
                                    <div className="logo-info">
                                        <div className="logo-name">Serenity</div>
                                        <div className="logo-tips">From an idea to a project, the logo was made for “ an online music player “ still in developement</div>
                                    </div>
                                </div>
                                <div className="logo-container">
                                    <div className="logo-svg">
                                        <img src={arraylogo} alt="Array" width={38} />
                                    </div>
                                    <div className="logo-info">
                                        <div className="logo-name">Array</div>
                                        <div className="logo-tips">As a baseline for a school project, the Array logo stood out among my works and is still awaiting its project idea</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-second-section">
                        <div className="speciality">
                            <div className="card-title">
                                <img src={spinstar} alt="logo" className="spin-star" />
                                <p>Web Developement</p>
                            </div>
                            <div className="big-speciality-text">Specialized in web developement</div>
                            <div className="specialities-list">
                                <div className="vertical-left-line"></div>
                                <div className="speciality-descript">
                                    <div className="circle-exterior">
                                        <div className="little-circle"></div>
                                    </div>
                                    <div className="right-section-speciality">
                                        <p className="speciality-name">Website</p>
                                        <p className="speciality-text">
                                            Usually work with React librairies. Almost master in Html and Css, doing responsive website is fast and easier than ever.
                                        </p>
                                    </div>
                                </div>
                                <div className="speciality-descript">
                                    <div className="circle-exterior">
                                        <div className="little-circle"></div>
                                    </div>
                                    <div className="right-section-speciality">
                                        <p className="speciality-name">Figma drafts</p>
                                        <div className="image-figma"></div>
                                    </div>
                                </div>
                                <div className="speciality-descript">
                                    <div className="circle-exterior">
                                        <div className="little-circle"></div>
                                    </div>
                                    <div className="right-section-speciality">
                                        <p className="speciality-name">Integration</p>
                                        <p className="speciality-text" id="hide-bottom">
                                            Open-minded, integrating design to operational website is fast and easy with my html & css abilities!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-top">
                                <div className="card-title">
                                    <img src={spinstar} alt="logo" className="spin-star" />
                                    <p>Projects</p>
                                </div>
                                <div className="project-description">
                                    Learn by mistake and evolve in each of them
                                </div>
                                <div className="bubble-skill">
                                    <div className="float-tag">
                                        <div className="tag-container purple" id="html">Html</div>
                                        <div className="tag-container blue" id="css">CSS</div>
                                        <div className="tag-container yellow" id="javascript">JavaScript</div>
                                        <div className="tag-container blue" id="react">React</div>
                                    </div>
                                    <div className="bubbles">
                                        <div className="round-bubble" id="first-round" onMouseEnter={addHtml} onMouseLeave={removeHtml}></div>
                                        <div className="round-bubble" id="second-round" onMouseEnter={addCss} onMouseLeave={removeCss}></div>
                                        <div className="round-bubble" id="third-round" onMouseEnter={addJs} onMouseLeave={removeJs}></div>
                                        <div className="round-bubble" id="fourth-round" onMouseEnter={addReact} onMouseLeave={removeReact}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-bottom">
                                <div className="top-project-bottom">
                                    <div className="work-tag">Histogram</div>
                                </div>
                                <div className="monthly-stat">
                                    <div className="month-bar">
                                        <div className="bar blue-bar big"></div>
                                        <p className="abrev">JAN</p>
                                    </div>
                                    <div className="month-bar">
                                        <div className="bar purple-bar medium"></div>
                                        <p className="abrev">FEB</p>
                                    </div>
                                    <div className="month-bar">
                                        <div className="bar purple-bar"></div>
                                        <p className="abrev">MAR</p>
                                    </div>
                                    <div className="month-bar">
                                        <div className="bar blue-bar high"></div>
                                        <p className="abrev">APR</p>
                                    </div>
                                    <div className="month-bar">
                                        <div className="bar purple-bar medium"></div>
                                        <p className="abrev">MAI</p>
                                    </div>
                                    <div className="month-bar">
                                        <div className="bar white-bar"></div>
                                        <p className="abrev">JUL</p>
                                    </div>
                                    <div className="month-bar">
                                        <div className="bar blue-bar high"></div>
                                        <p className="abrev">AUG</p>
                                    </div>
                                    <div className="month-bar">
                                        <div className="bar purple-bar"></div>
                                        <p className="abrev">SEP</p>
                                    </div>
                                    <div className="month-bar">
                                        <div className="bar blue-bar high"></div>
                                        <p className="abrev">OCT</p>
                                    </div>
                                    <div className="month-bar">
                                        <div className="bar purple-bar medium"></div>
                                        <p className="abrev">NOV</p>
                                    </div>
                                </div>
                                <div className="monthly-description">
                                    <div className="big-text-month">Why?</div>
                                    <div className="separation-vertical"></div>
                                    This section is just for fun and for showing that I can do this
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase-text-section">
                        <div className="works-title show-title">
                            <div className="top-show">
                                <p className="start">Showcase</p>
                                <div className="stylizing-line yellow round show-line"></div>
                            </div>
                        </div>
                        <p data-splitting className="really-big-text">
                            Creations where creativity and functionality meet, An immersive experience in digital innovation.
                        </p>
                    </div>
                    <div className="showcase">
                        <div className="tablet">
                            <div className="left-list">
                                <div className="top-style">
                                    <div className="rounds">
                                        <div className="medium-round purple"></div>
                                        <div className="medium-round blue"></div>
                                        <div className="medium-round yellow"></div>
                                    </div>
                                </div>
                                <div className="project-card" id="Wiselearn"></div>
                                <div className="project-card selected-card" id="Pearl"></div>
                                <div className="project-card" id="Animo"></div>
                            </div>
                            <div className="demo-section">
                                <div className="screen">
                                    <img className="screen-image" src={pearl} alt="Demo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trick"></div>
            </div>
            <div className="Footer">
                <div className="portfolio-background"><p className="footer-text">PortfolioPortfolio</p></div>
                <div className="left-footer">
                    <div className="author">
                        <img src={ron} alt="logo" width="24px" />
                        <p>My Portfolio</p>
                    </div>
                    <p className="footer-message">Don't hesitate anymore, contact me for your projects.</p>
                </div>
                <div className="right-footer">
                    <div className="footer-list-list">
                        <div className="footer-list">
                            <p className="list-title purple-text">Thanks</p>
                            <p className="footer-list-text">Big thanks to GSAP for its user-friendly animations!</p>
                            <p className="link-footer">
                                <Link className="link-click" to="https://gsap.com/" target="_blank"> www.gsap.com</Link>
                            </p>
                        </div>
                        <div className="footer-list">
                            <p className="list-title blue-text">Service</p>
                            <div className="footer-list-text">
                                <p className="click-footer">Deadline</p>
                                <p className="click-footer">Pricing</p>
                                <p className="click-footer">Guarantee</p>
                                <p className="click-footer">Project</p>
                            </div>
                            <p className="link-footer">Services are coming soon !</p>
                        </div>
                        <div className="footer-list">
                            <p className="list-title yellow-text">Contact</p>
                            <div className="footer-list-text select-yellow">
                                <p className="click-footer contact-link">
                                    <Link className="contact-click" to="mailto:ron.andraina@gmail.com?" target="_blank">Mail</Link>
                                </p>
                                <p className="click-footer">
                                    <Link className="contact-click" to="https://github.com/ron025533" target="_blank">Github</Link>
                                </p>
                                <p className="click-footer">
                                    <Link className="contact-click" to="https://web.facebook.com/Aaron.ANdrianarivony" target="_blank">Facebook</Link>
                                </p>
                                <p className="click-footer">
                                    <Link className="contact-click" to="https://discord.com/invite/j4PRBD5N" target="_blank">Discord</Link>
                                </p>
                                <p className="click-footer">
                                    <Link className="contact-click" to="https://www.linkedin.com/in/aaron-andrianarivony-b58602315/" target="_blank">LinkedIn</Link>
                                </p>
                            </div>
                            <p className="link-footer">Let's discuss !</p>
                        </div>
                    </div>
                    <p className="footer-version">2024 Ron's portfolio, first version 0.0.1</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage