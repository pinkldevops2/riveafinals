setTimeout(()=>{
  // Register GSAP plugins
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    // Define paths and lengths
    const paths = ['#banner_path', '#banner_path1', '#banner_path2', '#banner_path3', '#banner_path4'];

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

    
}, 1500);