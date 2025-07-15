setTimeout(()=>{
  // Register GSAP plugins
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
   // Define paths and lengths
    const path18 = document.querySelector("#bannerpath1");
    const pathLength18 = path18 ? path18.getTotalLength() : null;

    const path19 = document.querySelector("#bannerpath2");
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
        trigger: "#bannerpath2", // Use the first SVG as trigger
        start: "top 10%", // When to start the animation
        end: "bottom top", // When to end the animation
        scrub: 2 // Smooth animation on scroll
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

    // PAth 15
        // Define SVG path and length
        const path15 = document.querySelector("#drip-line1");
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

          // PAth 15
    // Define SVG path and length
    const path155 = document.querySelector("#svgpath6");
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
          scrub: 2 // Smoothly animate on scroll
        }
      });
}, 1500);