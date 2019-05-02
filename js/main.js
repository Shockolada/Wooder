// Menu
$('.burger-menu__toggle').click(function (evt) {
  evt.preventDefault();
  $('.main-navigation__site').toggleClass('main-navigation__site--opened');
});


// add header background when scroll
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= 50) {
    $('.page-header__wrapper').addClass('scroll');
  } else {
    $('.page-header__wrapper').removeClass('scroll');
  }
});


// Link styles
var showSectionNumber = function () {
  var sectionNumber = $('.navbar__current');
  var buttonCurrent = $('a.navbar__link--active');
  var sectionCounter = buttonCurrent.attr('data-section-count');
  sectionNumber.text(sectionCounter);
}
jQuery(window).scroll(function () {
  var $sections = $('.block');
  $sections.each(function (i, el) {
    var top = $(el).offset().top - 150,
    bottom = top + $(el).height(),
    scroll = $(window).scrollTop(),
    id = $(el).attr('id');
    if (scroll > top && scroll < bottom) {
      $('a.main-navigation__link').removeClass('main-navigation__link--active');
      $('a.navbar__link--active').removeClass('navbar__link--active');
      $('a.main-navigation__link[href="#' + id + '"]').addClass('main-navigation__link--active');
      $('a.navbar__link[href="#' + id + '"]').addClass('navbar__link--active');
      showSectionNumber();
    }
  })
});

$(".main-navigation__link, .navbar__link").on("click", function (evt) {
  evt.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top - 90;
    $('body,html').animate({
    scrollTop: top
  }, 600);
});

$('.main-navigation__link').click(function () {
  if ($(window).width() < 800) {
    $('.main-navigation__site').toggleClass('main-navigation__site--opened');
  }
});


// Share links
$('.share__button').click(function (evt) {
  evt.preventDefault();
  $('.share__list').toggleClass('share__list--opened');
});
