$(document).ready(function(){
    $('.parallax').parallax();
    $('.materialboxed').materialbox();


    $('.btn-ink').hover(function () {
      $(this).toggleClass('picture');
      $(this).toggleClass('link');

    });

    $('.btn-ink.download').hover(function () {
      $(this).toggleClass('download');
      $(this).toggleClass('downloadarrow');

    });


    $('.social').on('click', function () {
      $(this).toggleClass('octicon-mark-github');
      $(this).toggleClass('octicon-ruby')
    });
});
