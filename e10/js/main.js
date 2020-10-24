$(document).ready(function() {
    // run function on initial page load
    highlight();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function highlight() {
  $('.onebyone-r').click(function() {
    $('.onebyone-r').toggleClass('tomato');
  });
  $('.onebytwo-r').click(function() {
    $('.onebytwo-r').toggleClass('blue');
  });
  $('.twobytwo-r').click(function() {
    $('.twobytwo-r').toggleClass('gold');
  });
  $('.twobythree-r').click(function() {
    $('.twobythree-r').toggleClass('whitesmoke');
  });
}
