try {
  Typekit.load();
}
catch(e) {}

$(function() {
  try {
    Typekit.load();
  }
  catch(e) {}

  setTimeout(function() {
    $('#intro').fadeOut();
  }, 1500);
});
