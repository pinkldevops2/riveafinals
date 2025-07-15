setTimeout(()=>{
  // Define paths and lengths
    const path18 = document.querySelector("#missionsvg1");
    const pathLength18 = path18 ? path18.getTotalLength() : null;

    const path19 = document.querySelector("#missionsvg2");
    const pathLength19 = path19 ? path19.getTotalLength() : null;

    // Set initial styles for paths
    gsap.set(path18, {
      strokeDasharray: pathLength18,
      strokeDashoffset: -pathLength18
    });

    gsap.set(path19, {
      strokeDasharray: pathLength19,
      strokeDashoffset: pathLength19
    });

    // Create a timeline to sequence the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#missionsvg2", // Use the first SVG as trigger
        start: "top 50%", // When to start the animation
        end: "bottom bottom", // When to end the animation
        scrub: 3 // Smooth animation on scroll
      }
    });
    tl.to(path18, {
      strokeDashoffset: 0, // Reveal the path
      ease: "power2.out"
    });

    // Animate missionsvg2 first
    tl.to(path19, {
      strokeDashoffset: 0, // Reveal the path
      ease: "power2.out"
    });

    // Then animate missionsvg1
    
}, 1500);