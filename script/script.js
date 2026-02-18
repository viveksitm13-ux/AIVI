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


const statCounters = document.querySelectorAll(".stat-number");
let statAnimated = false;

const startStatCounting = () => {
  statCounters.forEach((counter) => {

    const originalText = counter.innerText.trim(); // "32K+" , "5+" , "50+"
    const isK = originalText.toLowerCase().includes("k");

    let target = parseInt(originalText.replace(/\D/g, ""));
    if (isK) target = target * 1000;

    let current = 0;

    const updateCount = () => {
      const increment = target / 200;

      if (current < target) {
        current += increment;

        if (isK) {
          counter.innerText = Math.floor(current / 1000) + "K+";
        } else {
          counter.innerText = Math.floor(current) + "+";
        }

        setTimeout(updateCount, 10);
      } else {
        // final value
        if (isK) {
          counter.innerText = (target / 1000) + "K+";
        } else {
          counter.innerText = target + "+";
        }
      }
    };

    counter.innerText = "0+";
    updateCount();
  });
};

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !statAnimated) {
        startStatCounting();
        statAnimated = true;
      }
    });
  },
  { threshold: 0.5 }
);

const statSection = document.querySelector(".stats-wrapper");
statObserver.observe(statSection);




