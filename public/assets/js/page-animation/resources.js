setTimeout(()=>{
 // Register GSAP plugins
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    // Define paths and lengths
    const paths = ['#banner_path', '#banner_path1', '#banner_path2', '#banner_path3', '#banner_path4', '#banner_path5'];

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
        end: "bottom 50%", // When to end the animation
        scrub: 2 // Smooth animation on scroll
      }
    });

    // Animate each path
    paths.forEach(selector => {
      tl.to(selector, {
        strokeDashoffset: 0, // Reveal the path
        ease: "power2.in"
      }, "-=0.5"); // Overlap animations slightly for smoother effect
    });

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
}, 2000);