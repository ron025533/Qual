import gsap from "gsap/gsap-core"    
    
    export const addHtml = () => {
        gsap.to("#html", {
            scale: 1,
            duration: 0.2,
            rotate: "-10deg"
        })

        gsap.to("#first-round", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#A94CC8",
        })
    }

    export const removeHtml = () => {
        gsap.to("#html", {
            scale: 0,
            duration: 0.2,
        })

        gsap.to("#first-round", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#090909",
        })
    }
    
    export const addCss = () => {
        gsap.to("#css", {
            scale: 1,
            duration: 0.2,
        })

        gsap.to("#second-round", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#37DBFF",
        })
    }

    export const removeCss = () => {
        gsap.to("#css", {
            scale: 0,
            duration: 0.2,
        })

        gsap.to("#second-round", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#090909",
        })
    }
    
    export const addJs = () => {
        gsap.to("#javascript", {
            scale: 1,
            duration: 0.2,
            rotate: "4deg"
        })

        gsap.to("#third-round", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#EDD554",
        })
    }

    export const removeJs = () => {
        gsap.to("#javascript", {
            scale: 0,
            duration: 0.2,
        })

        gsap.to("#third-round", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#090909",
        })
    }
    
    export const addReact = () => {
        gsap.to("#react", {
            scale: 1,
            duration: 0.2,
            rotate: "10deg",
        })

        gsap.to("#fourth-round", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#37DBFF",
        })
    }

    export const removeReact = () => {
        gsap.to("#react", {
            scale: 0,
            duration: 0.2,
        })

        gsap.to("#fourth-round", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#090909",
        })
    }