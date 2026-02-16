// Partner Section Swiper
// const partner_swiper = new Swiper(".partner-swiper", {
//   slidesPerView: 3,
//   spaceBetween: 40,
//   loop: true,
//   speed: 8000,
//   freeMode: true,
//   freeModeMomentum: false,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true ,
//   },
//   centeredSlides: true,
//   allowTouchMove: false,
//   simulateTouch: false,
//   grabCursor: false,
//   roundLengths: true,
//   observer: true,
//   observeParents: true,

//   breakpoints: {
//     1700: {
//       spaceBetween: 80,
//     },
//     1250: {
//       spaceBetween: 40,
//     },
//   },


const partner_swiper = new Swiper(".partner-swiper", {
  speed: 1000,              
  loop: true,               
  slidesPerView: "auto",
  spaceBetween: 30,        

  freeMode: true,
  freeModeMomentum: false,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  allowTouchMove: false,
});



// const testimonialSwiper = new Swiper(".testimonial-swiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//         delay: 5000,
//     },
//     pagination: {
//         el: ".testimonial-pagination",
//         clickable: true,
//     },
// });


// var swiper = new Swiper(".testimonialSwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".testimonial-pagination",
//     clickable: true,
//   },
// });


var swiper = new Swiper(".testimonialSwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});


AOS.init({
  once: false
});




