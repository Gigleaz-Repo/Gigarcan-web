var swiper = new Swiper(".slider-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centeredSlides:true,
    slidesPerView: 1,
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
      breakpoints: {
        640: {
          slidesPerView:2,
            spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
            spaceBetween: 40,
        }
      },
    },


    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },

    }
  });





  
document.addEventListener('DOMContentLoaded', function() {
  const opportunitiesTrigger = document.getElementById('opportunities-trigger');
  const opportunitiesLink = document.querySelector('.hover-opportunities');
  const customopportunitiesNav = document.querySelector('.custom-opportunities-nav');
  const customheader = document.querySelector('.custom-header');
 
  opportunitiesLink.addEventListener('mouseenter', function () {
      opportunitiesTrigger.checked = true;
  });

  // customAcadilyNav.addEventListener('mouseenter', function() {
  //     acadilyTrigger.checked = true;
  // });

  customopportunitiesNav.addEventListener('mouseleave', function () {
      opportunitiesTrigger.checked = false;
  });
  // acadilyLink.addEventListener('mouseleave', function () {
  //     acadilyTrigger.checked = false;
  // });
  // customheader.addEventListener('mouseenter', function () {
  //     customheader.checked = false;
  // });

  opportunitiesLink.addEventListener('click', function(event) {
      event.preventDefault(); 
      if (opportunitiesTrigger.checked) {
          opportunitiesTrigger.checked = false;
      } else {
          opportunitiesTrigger .checked = true; 
      }
  });
});




