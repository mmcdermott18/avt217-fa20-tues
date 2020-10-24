$(document).ready(function() {
    // run function on initial page load
    lightbox();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function lightbox() {
  $('img').click(function() {
    var imgSrc = $(this).attr('src');
    imgSrc = "url('" + imgSrc + "')";
    $('#lightbox').removeClass('hidden');
    $('#lightbox-dim').removeClass('hidden');
    $('body').addClass('scroll-lock');
    $('#lightbox').css("background-image", imgSrc);
    $('#lightbox').click(function() {
      $('#lightbox').addClass('hidden');
      $('#lightbox-dim').addClass('hidden');
      $('body').removeClass('scroll-lock');
    })
  });
}
