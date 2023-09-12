// Слайдер Акции
const firstScreen_slider = new Swiper('.firstScreen-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
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
})

// Слайдер отзывы
const feedback_slider = new Swiper('.feedback-slider', {
    loop: true,
    centeredSlides: false,
    slidesPerView: 3,
    // spaceBetween: 20,
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

// Слайдер портфолио
const team_slider = new Swiper('.team-slider', {
    spaceBetween: 20,
    loop: false,
    centeredSlides: false,
    slidesPerView: 4,
})