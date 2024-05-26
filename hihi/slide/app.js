$(document).ready(function () {
  $(".slide-banner").slick({
    arrows: false,
    dots: false,
  });
  $(".project-banner__mini-slide").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".project-banner__big-slide").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".target-project__top-slide").slick({
    arrows: false,
    dots: true,
  });
  $(".target-project__bottom-slide").slick({
    arrows: false,
    dots: true,
  });
  $(".detail-processs__accept-slide").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
  });
  $(".category-slick").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
  });
});
