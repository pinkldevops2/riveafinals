// Register GSAP plugins
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
    setTimeout(()=>{
    const path = document.querySelector("#svgpath1");
    const arrow1 = document.querySelector(".arrow-journey1");
    
    // Get total length of the path
    //const pathLength = path.getTotalLength();

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
            trigger: ".dash-journey",
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
          end: "bottom 80%", // Animation ends when path leaves viewport
          scrub: 2 // Smoothly animate on scroll
        }
      });
    // PAth 16 17
    // Define SVG path and length
    const path20 = document.querySelector("#line1");
    const pathLength20 = path20 ? path20.getTotalLength() : null;

    // Set initial styles for path
    gsap.set(path20, {
      strokeDasharray: pathLength20,
      strokeDashoffset: -pathLength20
    });

    // Animate the path drawing
    gsap.to(path20, {
      strokeDashoffset: 0, // Animate to reveal the path left to right
      ease: "power2.out",
      scrollTrigger: {
        trigger: path20,
        start: "top 80%", // Animation starts when path enters viewport
        end: "bottom 70%", // Animation ends when path leaves viewport
        scrub: 4 // Smoothly animate on scroll
      }
    });

    // Define SVG path and length
    const path21 = document.querySelector("#line2");
    const pathLength21 = path21 ? path21.getTotalLength() : null;

    // Set initial styles for path
    gsap.set(path21, {
    strokeDasharray: pathLength21,
    strokeDashoffset: -pathLength21
    });

    // Animate the path drawing
    gsap.to(path21, {
      strokeDashoffset: 0, // Animate to reveal the path left to right
      ease: "power2.out",
      scrollTrigger: {
        trigger: path21,
        start: "top 80%", // Animation starts when path enters viewport
        end: "bottom 70%", // Animation ends when path leaves viewport
        scrub: 4 // Smoothly animate on scroll
      }
    });


// =================


    // PAth 16 17
    // Define SVG path and length
    const path23 = document.querySelector("#clarity_line1");
    const pathLength23 = path23 ? path23.getTotalLength() : null;

    // Set initial styles for path
    gsap.set(path23, {
      strokeDasharray: pathLength23,
      strokeDashoffset: -pathLength23
    });

    // Animate the path drawing
    gsap.to(path23, {
      strokeDashoffset: 0, // Animate to reveal the path left to right
      ease: "power2.out",
      scrollTrigger: {
        trigger: path23,
        start: "top 100%", // Animation starts when path enters viewport
        end: "bottom 90%", // Animation ends when path leaves viewport
        scrub: 2 // Smoothly animate on scroll
      }
    });

    // Define SVG path and length
    const path24 = document.querySelector("#clarity_line3");
    const pathLength24 = path24 ? path24.getTotalLength() : null;

    // Set initial styles for path
    gsap.set(path24, {
    strokeDasharray: pathLength24,
    strokeDashoffset: -pathLength24
    });

    // Animate the path drawing
    gsap.to(path24, {
      strokeDashoffset: 0, // Animate to reveal the path left to right
      ease: "power2.out",
      scrollTrigger: {
        trigger: path24,
        start: "top 100%", // Animation starts when path enters viewport
        end: "bottom 90%", // Animation ends when path leaves viewport
        scrub: 2 // Smoothly animate on scroll
      }
    });
   }, 3000);