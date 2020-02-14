$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('nav.navbar').addClass("scroll");
  }
  else{
    $('nav.navbar').removeClass("scroll");
  }
});

$('.carousel').carousel({
  interval: 1000 * 3
});