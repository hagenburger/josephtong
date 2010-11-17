
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
  img.load(resizeImg);
  $(window).bind('resize', resizeImg);
  $('#intro').css({
    display: 'block',
    opacity: 1,
    visibility: 'visible'
  });
  
  setTimeout(function() {
    $('#intro').fadeOut();
  }, 5500);
});
