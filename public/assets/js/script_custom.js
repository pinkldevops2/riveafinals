$(document).ready(function() {
  $(document).off("click", ".toogle_btn");
  $(document).on('click', '.toogle_btn', function(){
      $('#sidebarMenu').removeClass('show');
    });
    $(document).off("click", ".book-btn");
    $(document).on('click', '.book-btn', function(e){
      e.preventDefault();
      $('.popup_form').addClass('show_popup');
    });
    $(document).off("click", ".close_icon");
    $(document).on('click', '.close_icon', function(){
      $('.popup_form').removeClass('show_popup');
    });

  // header sticky start
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();    
      if (scroll >= 220) {
          $(".header_sec").addClass('affix');
      } else {
          $(".header_sec").removeClass('affix');
      }
  });

  $('.header_space').height($('.header_sec').outerHeight());
  // header sticky end
  if ($(".loader_sec").length) {
    $("body").css("overflow", "hidden");
  }
  
  setTimeout(function () {
    $(".loader_sec").fadeOut(500);
    $("body").css("overflow", "visible");
    if ($("#videoSec1").length) {
      $('#videoSec1').get(0).play();
    }
  }, 4000);

  // prouct 2 row slider end

  if ($(window).width() < 992) {
    $(document).off("click", ".has_sub > a");
    $(document).on('click', '.has_sub > a', function(){
      $(this).parent('li').toggleClass('on')
      $(this).next('.sub_menu').slideToggle();
      $(this).parent('li').siblings('li').removeClass('on')
      $(this).parent('li').siblings('li').find('.sub_menu').slideUp();
    });
    $(document).off("click", ".navbar-toggler");
    $(document).on('click', '.navbar-toggler', function(){
      $('.window_full_overlay').toggleClass('show');
    });

    

    // $(document).on('click', 'body', function(){
    //   $('.window_full_overlay').removeClass('show');
    // });
    $(document).off("click", ".window_full_overlay");
    $(document).on('click', '.window_full_overlay', function(){
      $('.navbar-toggler').trigger('click');
    });
    $(document).off("click", ".user_menu");
    $(document).on('click', '.user_menu', function(){
      $('.user_submenu').slideToggle();
    });
  }
  $(document).off("click", "#toggle");
  $(document).on('click', '#toggle', function()
  {
    $('#sidebarMenu').toggleClass('show');
  });
  // click outside
  setTimeout(()=>{
if ($(".care_slider").length > 0 && $(".care_slider .slick-list").length == 0 ) {
  $('.care_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    loop:true,
    autoplay: false,
    speed: 300,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 575,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   }
    // ]
  }); 
}
if ($(".review_slider").length > 0 && $(".review_slider .slick-list").length == 0 ) {
 $(".review_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    fade: true,
    cssEase: 'ease-in-out',
  });
}
 if ($(".clarity_slider").length && $(".clarity_slider .slick-list").length == 0) {
$('.clarity_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }); 
 }
  if ($(".vascular-slider").length && $(".vascular-slider .slick-list").length == 0) {
$('.vascular-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  }

if ($(".expertise_slider").length && $(".expertise_slider .slick-list").length == 0) {
$('.expertise_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
           dots: true,
        }
      }
    ]
  });
}

// latest_medical_slider

if ($(".latest_medical_slider").length && $(".latest_medical_slider .slick-list").length == 0) {
$('.latest_medical_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
}
if ($(".care_Experts_slider").length && $(".care_Experts_slider .slick-list").length == 0) {
$('.care_Experts_slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  loop:true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
}
  $(document).off("click", ".about-tab .nav-item .nav-link");
  $(".about-tab .nav-item .nav-link").on("click", function () {
  setTimeout(function () {
    $(".care_Experts_slider").slick("setPosition");
  }, 300); // Delay helps ensure tab content is visible before refresh
});
$(document).off("click", ".nav-link");
 $(".nav-link").on("click", function () {
    $('.expertise_slide .expertise_box').removeClass('hover_active');
    $('.expertise_slide:first-child .expertise_box').addClass('hover_active');
});

if ($(".care_slider2").length && $(".care_slider2 .slick-list").length == 0) {
$('.care_slider2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
}
if ($(".care_slider_full").length && $(".care_slider_full .slick-list").length == 0) {
$('.care_slider_full').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
}


// expertise_slider
$(document).off("click", ".toggle_btn");
  $(document).on("click", ".toggle_btn", function () {
    // $('.toggle_btn').toggleClass('active');
    $(this).toggleClass('active');
    // $('.toggle_text').toggleClass('active');
    $(this).siblings('.toggle_text').toggleClass('active');
  })

  $('.video_sec').each(function() {
    let video = $(this).find('video')[0];
    let playBtn = $(this).find('.playBtn');

    playBtn.off("click").on('click', function() {
      if (video.paused) {
        video.play();
        playBtn.hide(); // Hide play button after play
      } else {
        video.pause();
        playBtn.show(); // Show play button if paused
      }
    });
  });

  // faq start
  $(document).off("click", ".faq_item_ques");
  $(document).on("click", ".faq_item_ques", function () {
    $(this).toggleClass("on");
    $(this).parent(".faq_item").toggleClass("on");
    $(this).next(".faq_item_ans").slideToggle();
    $(this).parent(".faq_item").siblings(".faq_item").children(".faq_item_ans").slideUp();
    $(this).parent(".faq_item").siblings(".faq_item").children(".faq_item_ques").removeClass("on");
    $(this).parent(".faq_item").siblings(".faq_item").removeClass("on");
  });

 // faq start
 $(document).off("click", ".faq_head");
$(document).on("click", ".faq_head", function () {
    var $faqSec = $(this).closest(".faq_sec");

    // Toggle the clicked title and its content
    $(this).toggleClass("on");
    $faqSec.toggleClass("on");
    $(this).next(".faq-content").slideToggle();

    // Collapse all other FAQ sections
    $faqSec.siblings(".faq_sec").each(function () {
        $(this).removeClass("on");
        $(this).find(".faq_head").removeClass("on");
        $(this).find(".faq-content").slideUp();
    });
});

setTimeout(()=>{
        $(document).off("click", ".learn-more-btn");
        $(".learn-more-btn").click(function(){
          $('.inner-accordion .accordion-item').removeClass('active');
          $('.inner-accordion .accordion-button').addClass('collapsed');
          $('.inner-accordion .accordion-collapse').removeClass('show');
        });

        $(document).off("click", ".faq_head_v");
        $('.faq_head_v').on('click', function () {
          var $header = $(this);
          var isActive = $header.hasClass('on');
     
          // Close all others
          $('.faq_head_v').removeClass('on');
          $('.faq-content_v').slideUp(200);
     
          if (!isActive) {
            $header.addClass('on');
            $header.next('.faq-content_v').slideDown(200);
     
            // Scroll to the header with offset
            setTimeout(function () {
              var offset = 80; // adjust for fixed headers
              $('html, body').animate({
                scrollTop: $header.offset().top - offset
              }, 300);
            }, 200); // wait for slideDown to finish
          }
        });
      },2000);

  // script start for effects
  setTimeout(()=>{
  AOS.init({
    duration: 1000,
  })
  }, 800);



     // let lastScrollTop = 0;
     //  let isAutoScrolling = false;

     //  // Detect scroll and handle auto-scroll
     //  function handleAutoScroll() {
     //    if (isAutoScrolling) return; // Prevent multiple triggers

     //    const scrollSections = document.querySelectorAll('.scroll');
     //    const stuckSections = document.querySelectorAll('.stuck');
     //    const scrollY = window.scrollY;
     //    const scrollDown = scrollY > lastScrollTop;

     //    // Check if we're in a .scroll section
     //    const currentScrollSection = getCurrentSection(scrollSections);

     //    if (currentScrollSection) {
     //      const nextStuck = findNextStuck(stuckSections, scrollY, scrollDown);

     //      // Auto-scroll to the next .stuck section with offset +100px
     //      if (nextStuck) {
     //        isAutoScrolling = true;

     //      window.scrollTo({
     //        top: nextStuck.offsetTop - 200, // Add 100px offset
     //        behavior: 'smooth',
     //      });

     //        // Unlock scrolling after 2000ms (2 seconds)
     //        setTimeout(() => {
     //          isAutoScrolling = false;
     //        }, 5000);
     //      }
     //    }

     //    lastScrollTop = scrollY; // Update last scroll position
     //  }

     //  // Helper to get the current .scroll section in view
     //  function getCurrentSection(sections) {
     //    return Array.from(sections).find((section) => {
     //      const rect = section.getBoundingClientRect();
     //      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
     //    });
     //  }

     //  // Helper to find the next .stuck section
     //  function findNextStuck(stuckSections, scrollY, scrollDown) {
     //    return Array.from(stuckSections).find((stuck) => {
     //      const stuckTop = stuck.offsetTop;
     //      return scrollDown ? stuckTop > scrollY : stuckTop < scrollY;
     //    });
     //  }

     //  // Attach scroll event listener
     //  window.addEventListener('scroll', handleAutoScroll);



      if ($("#videoSec1").length) {
        // Zoom Video
        const video = document.getElementById("videoSec1");

        window.addEventListener("scroll", () => {
          // Get scroll position and calculate zoom effect
          const scrollPosition = window.scrollY;
          const scaleValue = 1 + scrollPosition * 0.0015; // Adjust zoom intensity

          // Apply scale transformation
          video.style.transform = `scale(${scaleValue})`;
        });
      }

        $('#TreatmentTab .nav-link').on('shown.bs.tab', function (e) {
            // Reinitialize slick slider on the active tab
            $('.care_Experts_slider  ').slick('setPosition');
        });
        },2500);  
});  //document.ready end

$(document).ready(function () {
  setTimeout(()=>{
  if ($(window).width() > 992) {
    $('.expertise_box').hover(
        function () {
            $('.expertise_box').removeClass('hover_active');
            $(this).addClass('hover_active');
        },
    );

    $('.box-main .cmn-box').hover(
        function () {
            $('.box-main .cmn-box').removeClass('hover_active');
            $(this).addClass('hover_active');
        },
    );

  }

  if ($(window).width() < 991) {
    $(".expertise_box").click(function(){
      $('.expertise_box').removeClass('hover_active');
      $('.expertise_box').removeClass('active_hover');
      $(this).addClass('active_hover');
    });
      $(document).off("click", ".box-main .cmn-box");
      $(document).on("click", ".box-main .cmn-box", function () {
        $('.box-main .cmn-box').removeClass('hover_active');
        $('.box-main .cmn-box').removeClass('active_hover');
        $(this).addClass('active_hover');
      });

      $(document).off("click", ".highway_advance .cmn-box");
      $(document).on("click", ".highway_advance .cmn-box", function () {
        $('.highway_advance .cmn-box').removeClass('active_hover');
        $(this).addClass('active_hover');
      });
  }
  $(document).off("click", "#scrollTopBtn");
  $(document).on("click", "#scrollTopBtn", function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow'); // You can use 'fast' or number in ms
  });

  $(document).off("click", ".doctor_list .btn_cmn");
  $(document).on('click', '.doctor_list .btn_cmn', function(e){
      e.preventDefault();
      var dataId = $(this).attr('data-id');
      $('#'+dataId).addClass('show_popup');
  });
  $(document).off("click", ".doctor_list .icon_close");
  $(document).on('click', '.doctor_list .icon_close', function(){
    $(this).parent().parent().parent().removeClass('show_popup');
  });

},2500);



});



var newVideomb = document.getElementById('videoSec1');
if(newVideomb){
  newVideomb.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
  newVideomb.play();
}
document.addEventListener("DOMContentLoaded", function() {
     let lazyVideos = [...document.querySelectorAll("video.lazy")]
     if ("IntersectionObserver" in window) {
       let lazyVideoObserver = new IntersectionObserver(function(entries) {
         entries.forEach(function(video) {
           if (video.isIntersecting) {
             for (let source in video.target.children) {
               let videoSource = video.target.children[source];
               if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                 videoSource.src = videoSource.dataset.src;
               }
             }
             video.target.load();
             video.target.classList.remove("lazy");
             lazyVideoObserver.unobserve(video.target);
           }
         });
       });
       lazyVideos.forEach(function(lazyVideo) {
         lazyVideoObserver.observe(lazyVideo);
       });
     }
    }); 
