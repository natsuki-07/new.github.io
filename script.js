'use strict';
{

  //slideshow
  $('.slides').each(function(){
   var $slides = $(this).find('img'),
       $slideCount = $slides.length,
       currentIndex = 0;
       
       $slides.eq(currentIndex).fadeIn();
       setInterval(showNextSlide,4000);

       function showNextSlide(){
         var nextIndex = (currentIndex + 1) % $slideCount;
         $slides.eq(currentIndex).fadeOut();
         $slides.eq(nextIndex).fadeIn();
         currentIndex = nextIndex;

       }
  });
  //ふわっと
  $(window).scroll(function (){
   $('.effect_fade').each(function(){
    var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight){
        $(this).addClass('effect_scroll');
      }

   });
  });


  //Humberger
  $('.humberger').click(function(){
    $('.humberger').toggleClass('open');
    $('.nav').toggleClass('nav_close');
  });

  //スマホ版スクロールヘッダー
  var _window= $(window),
      _header = $('header'),
      headerHeight;  

    _window.on('scroll',function(){
     headerHeight =$('header').height();
     if(_window.scrollTop() > headerHeight){
       _header.addClass('header_transform');
     } else {
       _header.removeClass('header_transform');
     }
    });


    
}