$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions-wrap .slider-navigation .slick-next"),
  });

  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: { slidesToShow: 2, focusOnSelect: true },
      },
      {
        breakpoint: 768,
        settings: { vertical: false, centerMode: true, slidesToShow: 2, focusOnSelect: true },
      },
      {
        breakpoint: 475,
        settings: { vertical: false, centerMode: true, slidesToShow: 2, focusOnSelect: true },
      },
    ],
  });

  // Логика переключения вкладок
  const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      contents.forEach(c => c.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');

      // Пересчитываем slick слайдеры после переключения вкладок с небольшой задержкой для плавности
      setTimeout(() => {
        $(".slider-for").slick('setPosition');
        $(".slider-nav").slick('setPosition');
      }, 10);
    });
  });

  $(".scroll").smoothScroll({
    speed: 1000,
  });


  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    cssEase: "ease-in-out",
    speed: 800,
  });

  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    cssEase: "ease-in-out",
    speed: 800,
    prevArrow: $(".main-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".main-slider-wrap .slider-navigation .slick-next"),
  });

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".header-menu").toggleClass("open");
    $("body, html").toggleClass("overflow");
});



  AOS.init();
});
