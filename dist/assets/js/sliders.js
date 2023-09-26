// Слайдер Акции
const firstScreen_slider = new Swiper('.firstScreen-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
    speed: 650,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

// Слайдер Акции
const actions_slider = new Swiper('.actions-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
})

// Слайдер проектами
const projects_slider = new Swiper('.projects-slider', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: false,
      }
    },
})

// Слайдер отзывы
const feedback_slider = new Swiper('.feedback-slider', {
    loop: true,
    centeredSlides: false,
    slidesPerView: 3,
    breakpoints: {
        320: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 3
        }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})

// Слайдер портфолио
const portfolio_slider = new Swiper('.portfolio-slider', {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

// Слайдер проекты - фото
const projectsPhoto_slider = new Swiper('.projects-photo_slider', {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
})

// Слайдер команда
const team_slider = new Swiper('.team-slider', {
    spaceBetween: 20,
    loop: false,
    centeredSlides: false,
    slidesPerView: 4,
    breakpoints: {
        320: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
    }
})

// Слайдер этапы работы
const timeLine_slider = new Swiper(".timeLine-slider", {
    direction: "vertical",
    breakpoints: {
        320: {
          allowTouchMove: false,
        },
        768: {
          allowTouchMove: true,
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-custom-next",
        prevEl: ".swiper-button-custom-prev",
    },
});

// Галерея "Single Home"
const singleHome_thumb = new Swiper(".singleHome-thumbnail", {
  spaceBetween: 20,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  rewind: true,
});

const singleHome_main = new Swiper(".singleHome-mainSlider", {
  spaceBetween: 10,
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: singleHome_thumb,
  },
});

// Галерея "Single Project"
const singleProject_thumb = new Swiper(".singleProject-thumbnail", {
  spaceBetween: 20,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  rewind: true,
});

const singleProject_main = new Swiper(".singleProject-mainSlider", {
  spaceBetween: 10,
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: singleProject_thumb,
  },
});

const ipotekaSlider_slider = new Swiper('.ipotekaSlider', {
  spaceBetween: 20,
  loop: true,
  centeredSlides: false,
  freeMode: true,
  slidesPerView: 'auto',
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})