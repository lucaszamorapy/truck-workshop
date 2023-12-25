export default function initSwiper() {
  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 100,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 3,
        },
        425: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
      },
    });
  });
}
