$(document).ready(function() {
	$('.icon-close').click(function() {
		$('.toggle-menu').css('display', 'block');
		$('.icon-close').css('display', 'none');
	});
	$('.stop').click(function() {
		$('.toggle-menu').css('display', 'none');
		$('.icon-close').css('display','block');
	})
});

//Datepicker
  $(function() {
    $( "#datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "img/datepicker.png",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  });
  //Back to top
  if ($('#back-to-top').length) {
    var scrollTrigger = 500, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}