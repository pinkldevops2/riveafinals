setTimeout(()=>{
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
        start: "top 100%", // Animation starts when path enters viewport
        end: "bottom top", // Animation ends when path leaves viewport
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
        start: "top 100%", // Animation starts when path enters viewport
        end: "bottom top", // Animation ends when path leaves viewport
        scrub: 2 // Smoothly animate on scroll
      }
    });


document.getElementById("vascular-tab")?.addEventListener("click", displayLine);

function displayLine() {
  // alert('test')
  // PAth 16 17
    // Define SVG path and length
    const path22 = document.querySelector("#line3");
    const pathLength22 = path22.getTotalLength();

    // Set initial styles for path
    gsap.set(path22, {
      strokeDasharray: pathLength22,
      strokeDashoffset: -pathLength22
    });

    // Animate the path drawing
    gsap.to(path22, {
      strokeDashoffset: 0, // Animate to reveal the path left to right
      ease: "power2.out",
      scrollTrigger: {
        trigger: path22,
        start: "top 100%", // Animation starts when path enters viewport
        end: "bottom top", // Animation ends when path leaves viewport
        scrub: 2 // Smoothly animate on scroll
      }
    });

    // Define SVG path and length
    const path23 = document.querySelector("#line4");
    const pathLength23 = path23.getTotalLength();

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
        end: "bottom top", // Animation ends when path leaves viewport
        scrub: 2 // Smoothly animate on scroll
      }
    });
}
    
  // Register GSAP plugins
          gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

          const path1 = document.querySelector("#svgpath11");
          const arrow11 = document.querySelector(".arrow-journey11");
          
          // Get total length of the path1
          const pathLength1 = path1 ? path1.getTotalLength() : null;

          // Animate the plane moving along the path1
          gsap.to(arrow11, {
              motionPath: {
                  path: path1,
                  align: path1,
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
                      gsap.set(arrow11, {
                          opacity: opacity,
                      });
                  },
              }
          });

          $(document).ready(function() {
             const accordionItems = document.querySelectorAll(".accordion-item");

             accordionItems.forEach(item => {
                 const collapseElement = item.querySelector(".accordion-collapse");

                 collapseElement.addEventListener("show.bs.collapse", function () {
                     item.classList.add("active");
                 });

                 collapseElement.addEventListener("hide.bs.collapse", function () {
                     item.classList.remove("active");
                 });
             });
         });
}, 1500);