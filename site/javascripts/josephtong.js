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
    //$('#intro').fadeOut();
    location.href = "#index";
  }, 3500);
});

location.href = "#intro";