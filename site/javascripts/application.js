try {
  Typekit.load();
}
catch(e) {}

$(function() {
  try {
    Typekit.load();
  }
  catch(e) {}
  
  var imgHeight, imgWidth;
  function resizeImg() {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        height = 100,
        width = 100;
    if (!imgHeight) {
      imgHeight = img.height();
      imgWidth = img.width();
    }
    if (windowWidth / windowHeight > imgWidth / imgHeight) {
      width = windowWidth;
      height = windowWidth / (imgWidth / imgHeight);
    }
    else {
      height = windowHeight;
      width = windowHeight / (imgHeight / imgWidth);
    }
    img.css({
      height: height + 'px',
      width: width + 'px',
      top: (windowHeight - height) / 2 + 'px'
    });
  }

  var introImages = [1, 14, 19, 25, 30],
      introImage = introImages[Math.floor(Math.random() * introImages.length)],
      img = $('#intro img');
  img.attr('src', 'images/intro/' + introImage + '.jpg');
  img.load(function() { 
    resizeImg();
    img.animate({ opacity: 1 }, 2000);
    setTimeout(function() {
      $('#intro').fadeOut();
      if (!location.hash) {
        location.hash = "#index";
      }
    }, 3000);
  });
  $(window).bind('resize', resizeImg);
  
  $('#photography').slideshow();
  $('#paintings').slideshow();
  $('#london').slideshow();
  
  if (!Modernizr.csstransitions) {
    $('header').mouseenter(function() {
      $(this).animate({
        bottom: 0
      });
    }).mouseleave(function() {
      $(this).animate({
        bottom: '-40px'
      })
    });
  }
  
  $('#poetry header').css({ height: $(window).height() - 350 + 'px' });
});

(function($) {
  $.fn.slideshow = function() {
    var images = $(this).find('figure'), currentImage = 0, imageCount = images.length;
    var showImage = function(nextImage) {
      if (nextImage == imageCount) {
        nextImage = 0;
      }
      else if (nextImage < 0) {
        nextImage = imageCount - 1;
      }
      var current = images.eq(currentImage),
          next = images.eq(nextImage);
      current.css({
        zIndex: 10
      }).fadeOut();
      next.hide().css({
        zIndex: 11
      }).fadeIn(function() {
        current.hide();
      });
      currentImage = nextImage;
    };
    images.hide().eq(0).show();
    $(this).find('.next').click(function() {
      showImage(currentImage + 1);
      return false;
    });
    $(this).find('.previous').click(function() {
      showImage(currentImage - 1);
      return false;
    });
  };
})(jQuery);
