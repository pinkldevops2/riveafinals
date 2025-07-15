setTimeout(()=>{
  // Register GSAP plugins
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    // Define paths and lengths
    const paths = ['#banner_path', '#banner_path1', '#banner_path2'];

    // Set initial styles for each path
    paths.forEach(selector => {
      const path = document.querySelector(selector);
      const pathLength = path ? path.getTotalLength() : null;

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });
    });

    // Create a timeline to sequence the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#banner_path", // Use the first SVG path as trigger
        start: "top 10%", // When to start the animation
        end: "bottom 70%", // When to end the animation
        scrub: 2 // Smooth animation on scroll
      }
    });

    // Animate each path
    paths.forEach(selector => {
      tl.to(selector, {
        strokeDashoffset: 0, // Reveal the path
        ease: "power2.out"
      }, "-=0.5"); // Overlap animations slightly for smoother effect
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
    

          // Define SVG path and length
        // const path156 = document.querySelector("#svgpath66");
        // const pathLength156 = path156 ? path156.getTotalLength() : null;
    
        // // Set up initial dash array and offset to "hide" the path
        // if(path156){
        // path156.style.strokeDasharray = pathLength156;
        // path156.style.strokeDashoffset = pathLength156;
        // }
        //  // Set initial styles for path
        //   gsap.set(path156, {
        //     strokeDasharray: pathLength156,
        //     strokeDashoffset: pathLength156
        //   });
    
        //   // Animate the path drawing
        //   gsap.to(path156, {
        //     strokeDashoffset: 0, // Animate to reveal the path left to right
        //     ease: "power2.out",
        //     scrollTrigger: {
        //       trigger: path156,
        //       start: "top 50%", // Animation starts when path enters viewport
        //       end: "bottom 80%", // Animation ends when path leaves viewport
        //       scrub: 2 // Smoothly animate on scroll
        //     }
        //   });
    
          const path17 = document.querySelector("#svgpath7");
        const pathLength17 = path17 ? path17.getTotalLength() : null;
    
        // Set up initial dash array and offset to "hide" the path
        if(path17){
        path17.style.strokeDasharray = pathLength17;
        path17.style.strokeDashoffset = pathLength17;
        }
         // Set initial styles for path
          gsap.set(path17, {
            strokeDasharray: pathLength17,
            strokeDashoffset: pathLength17
          });
    
          // Animate the path drawing
          gsap.to(path17, {
            strokeDashoffset: 0, // Animate to reveal the path left to right
            ease: "power2.out",
            scrollTrigger: {
              trigger: path17,
              start: "top 50%", // Animation starts when path enters viewport
              end: "bottom 80%", // Animation ends when path leaves viewport
              scrub: 2 // Smoothly animate on scroll
            }
          });
    
}, 2500);