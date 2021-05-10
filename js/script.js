// show nav
$(document).ready(function () {
  $("i.icona").click(function () {
    $(".list").slideToggle();
  });
});

// sticky navbar
$(window).scroll(function () {
  var scr = $(this).scrollTop();
  if (scr > 100) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
  // scroll-top
  if(scr>800){
    $('.scroll-top').fadeIn();
  }else{
     $('.scroll-top').fadeOut();
  }
});
$('.scroll-top').click(function(){
  $('body,html').animate({
    scrollTop:0
  },500)
})
// nav2 collor active on click li
$(".nav2 li").click(function () {
  $(this).addClass("active-btn").siblings().removeClass("active-btn");

  var allId = $(this).attr("id");
  if (allId === "all") {
    $(".portfolio-content> div").fadeIn();
  } else {
    $(".portfolio-content> div").fadeOut();
    $(".portfolio-content")
      .contents()
      .filter("." + allId)
      .fadeIn();
  }
});

// smooth scrol
$(".list a").click(function () {
  $("body,html").animate({
    scrollTop: $($(this).attr("href")).offset().top,
  });
});

//default settings:
autoplay:false
autoplayTimeout:5000
autoplayHoverPause:false

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})