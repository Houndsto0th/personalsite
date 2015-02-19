$(document).ready(function(){
    $('.parallax').parallax();
    $('.materialboxed').materialbox();


    $('.btn-ink').hover(function () {
      $(this).toggleClass('picture');
      $(this).toggleClass('link');

    });

    $('.social').on('click', function () {
      $(this).toggleClass('octicon-mark-github');
      $(this).toggleClass('octicon-ruby')
    });
});
