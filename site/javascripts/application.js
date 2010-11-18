
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
    }, 500);
  });
  $(window).bind('resize', resizeImg);
  
  var photos = $('#photography img'), currentPhoto = 0, photoCount = photos.length;
  var showPhoto = function(nextPhoto) {
    console.log(nextPhoto);
    if (nextPhoto == photoCount) {
      nextPhoto = 0;
    }
    else if (nextPhoto < 0) {
      nextPhoto = photoCount - 1;
    }
    var current = photos.eq(currentPhoto),
        next = photos.eq(nextPhoto);
    current.css({
      zIndex: 100
    });
    next.hide().css({
      zIndex: 101//,
    //}).animate({ opacity: 1 }, function() {
    }).fadeIn(function() {
      current.hide();
    });
    currentPhoto = nextPhoto;
  };
  photos.hide().eq(0).show();
  $('.next').click(function() {
    showPhoto(currentPhoto + 1);
    return false;
  });
  $('.previous').click(function() {
    showPhoto(currentPhoto - 1);
    return false;
  });
});
