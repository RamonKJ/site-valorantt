

$(document).ready(function () {

  var pagina = window.location.pathname.split('/').pop();
  $('.navbar__links a').each(function () {
    var href = $(this).attr('href').split('/').pop();
    if (href === pagina) {
      $(this).addClass('active');
    }
  });

  if ($('.swiper').length) {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 3000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

});
