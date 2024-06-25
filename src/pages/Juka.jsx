import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from "gsap/gsap-core"

function Juka() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, Timeline)

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

    })

    return (
        <div className="home-container juka">
            Hello world
        </div>
    )
}

export default Juka