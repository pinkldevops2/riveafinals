// Register GSAP plugins
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
setTimeout(()=>{


    // Define paths and lengths
    const paths = ['#banner_path', '#banner_path1'];

    // Set initial styles for each path
    paths.forEach(selector => {
      const path = document.querySelector(selector);
      const pathLength = path ? path.getTotalLength() : null;

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: -pathLength
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
        end: "bottom 90%", // Animation ends when path leaves viewport
        scrub: 2 // Smoothly animate on scroll
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
        start: "top 50%", // Animation starts when path enters viewport
        end: "bottom 90%", // Animation ends when path leaves viewport
        scrub: 2 // Smoothly animate on scroll
      }
    });
}, 1500);