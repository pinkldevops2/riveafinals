
// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin);
// Loader paths
setTimeout(function () {
const paths = ["#loader2", "#loader3", "#loader4", "#loader5"];

paths.forEach((selector) => {
    const path = document.querySelector(selector);
    if (path) {
    const pathLength = path.getTotalLength();

    // Set initial styles for path
    gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: -pathLength,
        visibility: "visible",
    });

    // Animate the path drawing on page load
    gsap.to(path, {
        strokeDashoffset: 0, // Animate to reveal the path
        duration: 2, // Animation duration
        ease: "power2.out",
    });
    }
});
}, 1000);
// PAth 4 
setTimeout(function () {
const path4 = document.querySelector("#svgpath2");
const pathLength4 = path4 ? path4.getTotalLength() : null;

// Set initial styles for path
gsap.set(path4, {
    strokeDasharray: pathLength4,
    strokeDashoffset: -pathLength4,
    visibility: "visible"
});

// Animate the path drawing
gsap.to(path4, {
    strokeDashoffset: 0, // Animate to reveal the path left to right
    ease: "power2.out",
    scrollTrigger: {
    trigger: path4,
    start: "top bottom", // Animation starts when path enters viewport
    end: "bottom top", // Animation ends when path leaves viewport
    scrub: 5 // Smoothly animate on scroll
    }
});
}, 5500);

setTimeout(()=>{
const path = document.querySelector("#svgpath1");
const arrow1 = document.querySelector(".arrow-journey1");


// Get total length of the path
const pathLength = path ? path.getTotalLength() : null;

// Animate the plane moving along the path
gsap.to(arrow1, {
    motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.033, 0.5],
        autoRotate: -90,
        start: 0,
        end: 1,
    },
    ease: "power1.inOut", // Smooth easing for the motion
    scrollTrigger: {
        trigger: path,
        start: "top bottom",
        end: "bottom top",
        motionStart: 0,
        motionEnd: 1,
        scrub: 2,
        onUpdate: (self) => {
            // Fade out the plane's opacity based on the scroll progress
            const opacity = self.progress === 1 ? 0 : 1; // Full opacity at the start, fade out at the end
            gsap.set(arrow1, {
                opacity: opacity,
            });
        },
    }
});

    // Path 6
// Define SVG path and length
const path6 = document.querySelector("#svgpath3");
const pathLength6 = path6 ? path6.getTotalLength() : null;

// Set up initial dash array and offset to "hide" the path
if(path6){
    path6.style.strokeDasharray = pathLength6;
    path6.style.strokeDashoffset = -pathLength6;
}


// Create timeline with ScrollTrigger
gsap.timeline({
scrollTrigger: {
    trigger: "#svgpath3",     // Trigger element for scroll
    start: "top 50%",           // Animation starts when #motionPath is near the viewport
    end: "bottom bottom",          // Animation ends at this scroll position
    scrub: 3,                // Smooth animation while scrolling
    markers: false              // Set to true for debugging if needed
}
})
.to(path6, {
strokeDashoffset: 0,          // Animate dash offset to zero to "draw" the path
duration: 12,
ease: "power3.inOut"
})

// Path 7 8 9 10 11 12 root section
// Define SVG path and length
const path7 = document.querySelector("#root1");
const path8 = document.querySelector("#root2");
const path9 = document.querySelector("#root3");
const path10 = document.querySelector("#root4");
const path11 = document.querySelector("#root5");
const path12 = document.querySelector("#root6");
const pathLength7 = path7 ? path7.getTotalLength() : null;
const pathLength8 = path8 ? path8.getTotalLength() : null;
const pathLength9 = path9 ? path9.getTotalLength() : null;
const pathLength10 = path10 ? path10.getTotalLength() : null;
const pathLength11 = path11 ? path11.getTotalLength() : null;
const pathLength12 = path12 ? path12.getTotalLength() : null;

// Set up initial dash array and offset to "hide" the path
if(path7){
    path7.style.strokeDasharray = pathLength7;
    path7.style.strokeDashoffset = pathLength7;
}
if(path8){
path8.style.strokeDasharray = pathLength8;
path8.style.strokeDashoffset = pathLength8;
}
if(path9){
path9.style.strokeDasharray = pathLength9;
path9.style.strokeDashoffset = -pathLength9;
}
if(path10){
path10.style.strokeDasharray = pathLength10;
path10.style.strokeDashoffset = -pathLength10;
}
if(path11){
path11.style.strokeDasharray = pathLength11;
path11.style.strokeDashoffset = pathLength11;
}
if(path12){
path12.style.strokeDasharray = pathLength12;
path12.style.strokeDashoffset = -pathLength12;
}
// Create timeline with ScrollTrigger
gsap.timeline({
scrollTrigger: {
    trigger: "#root4",     // Trigger element for scroll
    start: "top 100%",           // Animation starts when #motionPath is near the viewport
    end: "bottom bottom",          // Animation ends at this scroll position
    scrub: 4,                // Smooth animation while scrolling
    markers: false              // Set to true for debugging if needed
}
})
.to(path7, {
strokeDashoffset: 0,          // Animate dash offset to zero to "draw" the path
duration: 100,
ease: "power3.inOut"
})
.to(path8, {
strokeDashoffset: 0, // Draw motionPath2
duration: 100, // Can be adjusted to sync better
ease: "power3.inOut"
}, "<")
.to(path9, {
strokeDashoffset: 0, // Draw motionPath2
duration: 100, // Can be adjusted to sync better
ease: "power3.inOut"
}, "<")
.to(path10, {
strokeDashoffset: 0, // Draw motionPath2
duration: 100, // Can be adjusted to sync better
ease: "power3.inOut"
}, "<")

gsap.timeline({
scrollTrigger: {
    trigger: "#root5",     // Trigger element for scroll
    start: "top 100%",           // Animation starts when #motionPath is near the viewport
    end: "bottom bottom",          // Animation ends at this scroll position
    scrub: 4,                // Smooth animation while scrolling
    markers: false              // Set to true for debugging if needed
}
})
.to(path11, {
strokeDashoffset: 0, // Draw motionPath2
duration: 100, // Can be adjusted to sync better
ease: "power3.inOut"
}, "<")
.to(path12, {
strokeDashoffset: 0, // Draw motionPath2
duration: 100, // Can be adjusted to sync better
ease: "power3.inOut"
}, "<")

// Ensure all elements exist before animating
const arrow3 = document.querySelector(".arrow-journey4");
const path18 = document.querySelector("#svgpath4");

// Get total length of the path (if needed)
const pathLength18 = path18 ? path18.getTotalLength() : null;

// Animate arrow along the path on scroll
gsap.to(arrow3, {
    scrollTrigger: {
    trigger: path18, // Ensure the SVG is the trigger
    start: "top bottom", // When the top of the SVG hits the top of the viewport
    end: "bottom top", // End when the bottom of the SVG leaves the viewport
    scrub: 2, // Smooth scrubbing
    onLeave: () => gsap.set(arrow3, { autoAlpha: 0 }), // Hide arrow when leaving
    onEnterBack: () => gsap.set(arrow3, { autoAlpha: 1 }), // Show arrow when re-entering
    },
    motionPath: {
    path: path18,
    align: path18,
    alignOrigin: [0.033, 0.5], // Center align for better accuracy
    autoRotate: -90, // Ensure natural rotation along the path
    onUpdate: (self) => {
            // Fade out the plane's opacity based on the scroll progress
        const opacity = self.progress === 1 ? 0 : 1; // Full opacity at the start, fade out at the end
        gsap.set(arrow3, {
            opacity: opacity,
        });
        },
    },
    ease: "none",
});

// PAth 15
// Define SVG path and length

    const path15 = document.querySelector("#svgpath6");
    const pathLength15 = path15 ? path15.getTotalLength() : null;

    // Set up initial dash array and offset to "hide" the path
    if(path15){
        path15.style.strokeDasharray = pathLength15;
        path15.style.strokeDashoffset = pathLength15;
    }
    

    // Set initial styles for path
    gsap.set(path15, {
        strokeDasharray: pathLength15,
        strokeDashoffset: pathLength15
    });

    // Animate the path drawing
    gsap.to(path15, {
        strokeDashoffset: 0, // Animate to reveal the path left to right
        ease: "power2.out",
        scrollTrigger: {
        trigger: path15,
        start: "top 50%", // Animation starts when path enters viewport
        end: "bottom 50%", // Animation ends when path leaves viewport
        scrub: 2 // Smoothly animate on scroll
        }
    });
}, 3000);
