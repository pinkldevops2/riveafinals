setTimeout(()=>{
 // PAth 15
    // Define SVG path and length
    const path155 = document.querySelector("#svgpath10");
    const pathLength155 = path155 ? path155.getTotalLength() : null;

    // Set up initial dash array and offset to "hide" the path
    if(path155){
    path155.style.strokeDasharray = pathLength155;
    path155.style.strokeDashoffset = pathLength155;
    }
     // Set initial styles for path
      gsap.set(path155, {
        strokeDasharray: pathLength155,
        strokeDashoffset: pathLength155
      });

      // Animate the path drawing
      gsap.to(path155, {
        strokeDashoffset: 0, // Animate to reveal the path left to right
        ease: "power2.out",
        scrollTrigger: {
          trigger: path155,
          start: "top 50%", // Animation starts when path enters viewport
          end: "bottom 80%", // Animation ends when path leaves viewport
          scrub: 4 // Smoothly animate on scroll
        }
      });

      // Register GSAP plugins
          gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

          const path11 = document.querySelector("#svgpath111");
          const arrow111 = document.querySelector(".arrow-journey111");
          
          // Get total length of the path11
          const pathLength1 = path11 ? path11.getTotalLength() : null;

          // Animate the plane moving along the path11
          gsap.to(arrow111, {
              motionPath: {
                  path: path11,
                  align: path11,
                  alignOrigin: [0.033, 0.5],
                  autoRotate: -90,
                  start: 0,
                  end: 1,
              },
              ease: "power1.inOut", // Smooth easing for the motion
              scrollTrigger: {
                  trigger: ".dash-journey_cond",
                  start: "top bottom",
                  end: "bottom top",
                  motionStart: 0,
                  motionEnd: 1,
                  scrub: 2,
                  onUpdate: (self) => {
                      // Fade out the plane's opacity based on the scroll progress
                      const opacity = self.progress === 1 ? 0 : 1; // Full opacity at the start, fade out at the end
                      gsap.set(arrow111, {
                          opacity: opacity,
                      });
                  },
              }
          });

          // PAth 15
    // Define SVG path and length
    const path156 = document.querySelector("#svgpath11");
    const pathLength156 = path156 ? path156.getTotalLength() : null;

    // Set up initial dash array and offset to "hide" the path
    if(path156){
    path156.style.strokeDasharray = pathLength156;
    path156.style.strokeDashoffset = pathLength156;
    }
     // Set initial styles for path
      gsap.set(path156, {
        strokeDasharray: pathLength156,
        strokeDashoffset: pathLength156
      });

      // Animate the path drawing
      gsap.to(path156, {
        strokeDashoffset: 0, // Animate to reveal the path left to right
        ease: "power2.out",
        scrollTrigger: {
          trigger: path156,
          start: "top 50%", // Animation starts when path enters viewport
          end: "bottom 80%", // Animation ends when path leaves viewport
          scrub: 2 // Smoothly animate on scroll
        }
      });

      // Register GSAP plugins
                gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
      
                const path101 = document.querySelector("#svgpath101");
                const arrow101 = document.querySelector(".arrow-journey101");
                
                // Get total length of the path101
                const pathLength101 = path101 ? path101.getTotalLength() : null;
      
                // Animate the plane moving along the path101
                gsap.to(arrow101, {
                    motionPath: {
                        path: path101,
                        align: path101,
                        alignOrigin: [0.033, 0.5],
                        autoRotate: -90,
                        start: 0,
                        end: 1,
                    },
                    ease: "power1.inOut", // Smooth easing for the motion
                    scrollTrigger: {
                        trigger: ".dash-journey_cond1",
                        start: "top bottom",
                        end: "bottom top",
                        motionStart: 0,
                        motionEnd: 1,
                        scrub: 2,
                        onUpdate: (self) => {
                            // Fade out the plane's opacity based on the scroll progress
                            const opacity = self.progress === 1 ? 0 : 1; // Full opacity at the start, fade out at the end
                            gsap.set(arrow101, {
                                opacity: opacity,
                            });
                        },
                    }
                });

                // Register GSAP plugins
          gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

          const path102 = document.querySelector("#svgpath102");
          const arrow102 = document.querySelector(".arrow-journey102");
          
          // Get total length of the path101
          const pathLength102 = path102 ? path102.getTotalLength() : null;

          // Animate the plane moving along the path101
          gsap.to(arrow102, {
              motionPath: {
                  path: path102,
                  align: path102,
                  alignOrigin: [0.033, 0.5],
                  autoRotate: -90,
                  start: 0,
                  end: 1,
              },
              ease: "power1.inOut", // Smooth easing for the motion
              scrollTrigger: {
                  trigger: ".dash-journey_cond2",
                  start: "top bottom",
                  end: "bottom top",
                  motionStart: 0,
                  motionEnd: 1,
                  scrub: 2,
                  onUpdate: (self) => {
                      // Fade out the plane's opacity based on the scroll progress
                      const opacity = self.progress === 1 ? 0 : 1; // Full opacity at the start, fade out at the end
                      gsap.set(arrow102, {
                          opacity: opacity,
                      });
                  },
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
        scrub: 2 // Smoothly animate on scroll
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
        scrub: 2 // Smoothly animate on scroll
      }
    });


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
}, 1500);