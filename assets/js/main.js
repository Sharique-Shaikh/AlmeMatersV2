document.addEventListener("DOMContentLoaded", () => {

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);




function SectionTopSpace() {

    let headerH = document.querySelector("header").offsetHeight;

    document.querySelector("main .hero-section").style.height = "auto";
    document.querySelector("main .hero-section").style.paddingTop = (window.innerWidth > 992 ? (headerH - 18) : headerH) + "px";

}
SectionTopSpace();

window.addEventListener("resize", () => {
    SectionTopSpace();
});


const scrollHeader = (element) => {
    document.addEventListener("scroll", () => {
        let getElem = document.querySelector(element)
        //  console.log(getElem)
        if (window.scrollY > 30) {
            getElem.classList.add("headerActive")
        } else {
            getElem.classList.remove("headerActive")
        }

    })
}
scrollHeader("header");


let didScroll;
let lastScrollT = 0;
let delta = 5;
let siteHeader = document.querySelector('header').offsetHeight;

window.addEventListener('scroll', function(event) {
didScroll = true;
});

setInterval(function() {
if (didScroll) {
    hasScroll();
    didScroll = false;
}
}, 250);

function hasScroll() {
let scrollT = window.scrollY || document.documentElement.scrollTop;
if (Math.abs(lastScrollT - scrollT) <= delta)
    return;
if (scrollT > lastScrollT && scrollT > siteHeader) {
    document.querySelector("header").style.transform = "translateY(-100%)";
} else {
    if (scrollT + window.innerHeight < document.documentElement.scrollHeight) {
        document.querySelector("header").style.transform = "translateY(0%)";
    }
}
lastScrollT = scrollT;
}


    const MarqueeDuplicateAndTime = (marqueeWrap, marqueeList, loopVal) => {

        let getCloneWrapper = document.querySelectorAll(marqueeWrap);
        getCloneWrapper.forEach((getCloneWrap) => {



            getCloneWrap.querySelectorAll(marqueeList).forEach((item) => {
                let cloneList = item.cloneNode(true)

                 for(let i=0; i<=loopVal; i++){ 
                getCloneWrap.append(cloneList) 
            }

                let getListOfSlide = getCloneWrap.querySelectorAll(marqueeList).length,
                    getFirstSlideW = getCloneWrap.offsetWidth;
 
                getCloneWrap.style.animationDuration = getFirstSlideW / (getListOfSlide + 100) + "s";


            })
        })
    }


    MarqueeDuplicateAndTime(".client-logos-wrap", ".client-logos-wrap .logo-col", 4) 
    MarqueeDuplicateAndTime(".team-cards-wrap", ".team-cards-wrap .team-card-col", 4)
    MarqueeDuplicateAndTime(".marquee-wrap", ".marquee-wrap p", 4)


 
 // Parallax Effect start

 gsap.utils.toArray("[data-module-parallax]").forEach((section) => {
    gsap.utils
        .toArray(section.querySelectorAll("[data-parallax]"))
        .forEach((parallax) => {
            const depth = parallax.dataset.speed;
            const movement = -(parallax.offsetHeight * depth);
            const rotate = parallax.dataset.rotate;

            gsap.fromTo(
                parallax,
                {
                    y: -movement,
                    rotate: 0,
                },
                {
                    y: movement,
                    rotate: -rotate,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 100%",
                        end: "bottom bottom",
                        scrub: true,
                        // markers: true
                    },
                }
            );
        });
});

// Parallax Effect end


}); /* DOMContent END */ 