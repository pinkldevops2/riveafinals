    setTimeout(()=>{
    const path18 = document.querySelector("#missionsvg1");
        const pathLength18 = path18 ? path18.getTotalLength() : null;

        const path19 = document.querySelector("#missionsvg2");
        const pathLength19 = path19 ? path19.getTotalLength() : null;

        // Set initial styles for paths
        gsap.set(path18, {
        strokeDasharray: pathLength18,
        strokeDashoffset: pathLength18
        });

        gsap.set(path19, {
        strokeDasharray: pathLength19,
        strokeDashoffset: -pathLength19
        });

        // Create a timeline to sequence the animations
        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#missionsvg2", // Use the first SVG as trigger
            start: "top 50%", // When to start the animation
            end: "bottom bottom", // When to end the animation
            scrub: 3   // Smooth animation on scroll
        }
        });

        // Animate missionsvg2 first
        tl.to(path19, {
        strokeDashoffset: 0, // Reveal the path
        ease: "power2.out"
        });

        // Then animate missionsvg1
        tl.to(path18, {
        strokeDashoffset: 0, // Reveal the path
        ease: "power2.out"
        });




        // Register GSAP plugins
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

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
            trigger: ".dash-journey-middle",
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

    // PAth 16 17
    // Define SVG path and length
    const path20 = document.querySelector("#rad1");
    const pathLength20 = path20 ? path20.getTotalLength() : null;

    // Set initial styles for path
    gsap.set(path20, {
      strokeDasharray: pathLength20,
      strokeDashoffset: pathLength20
    });

    // Animate the path drawing
    gsap.to(path20, {
      strokeDashoffset: 0, // Animate to reveal the path left to right
      ease: "power2.out",
      scrollTrigger: {
        trigger: path20,
        start: "top 50%", // Animation starts when path enters viewport
        end: "bottom 20%", // Animation ends when path leaves viewport
        scrub: 3 // Smoothly animate on scroll
      }
    });

    // Define SVG path and length
    const path21 = document.querySelector("#rad2");
    const pathLength21 = path21 ? path21.getTotalLength() : null;

    // Set initial styles for path
    gsap.set(path21, {
    strokeDasharray: pathLength21,
    strokeDashoffset: pathLength21
    });

    // Animate the path drawing
    gsap.to(path21, {
      strokeDashoffset: 0, // Animate to reveal the path left to right
      ease: "power2.out",
      scrollTrigger: {
        trigger: path21,
        start: "top 90%", // Animation starts when path enters viewport
        end: "bottom 80%", // Animation ends when path leaves viewport
        scrub: 3 // Smoothly animate on scroll
      }
    });

    const path2 = document.querySelector("#svgpath3");
    const arrow2 = document.querySelector(".arrow-journey2");
    
    // Get total length of the path
    const pathLength2 = path2 ? path2.getTotalLength() : null;

    // Animate the plane moving along the path
    gsap.to(arrow2, {
        motionPath: {
            path: path2,
            align: path2,
            alignOrigin: [0.033, 0.5],
            autoRotate: -90,
            start: 0,
            end: 1,
        },
        ease: "power1.inOut", // Smooth easing for the motion
        scrollTrigger: {
            trigger: path2,
            start: "top bottom",
            end: "bottom top",
            motionStart: 0,
            motionEnd: 1,
            scrub: 2,
            onUpdate: (self) => {
                // Fade out the plane's opacity based on the scroll progress
                const opacity = self.progress === 1 ? 0 : 1; // Full opacity at the start, fade out at the end
                gsap.set(arrow2, {
                    opacity: opacity,
                });
            },
        }
    });

// Ensure all elements exist before animating
    const arrow3 = document.querySelector(".arrow-journey4");
    const path9 = document.querySelector("#svgpath4");

      // Get total length of the path (if needed)
      const pathLength9 = path9 ? path9.getTotalLength() : null;

      // Animate arrow along the path on scroll
      gsap.to(arrow3, {
        scrollTrigger: {
          trigger: path9, // Ensure the SVG is the trigger
          start: "top bottom", // When the top of the SVG hits the top of the viewport
          end: "bottom top", // End when the bottom of the SVG leaves the viewport
          scrub: 3, // Smooth scrubbing
          onLeave: () => gsap.set(arrow3, { autoAlpha: 0 }), // Hide arrow when leaving
          onEnterBack: () => gsap.set(arrow3, { autoAlpha: 1 }), // Show arrow when re-entering
        },
        motionPath: {
          path: path9,
          align: path9,
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
      }, 2500);