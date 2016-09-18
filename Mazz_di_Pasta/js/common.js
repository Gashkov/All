$(document).ready(function() {	
	$('.single-item').slick();

	//search
	$('.search__button').click(function(){
		$('.search-result').fadeIn( 500 );
		$('.search__field').fadeOut( 200 );
	})
	$('.search-result__choose-restaurant').click(function() {
		$('.search-result').fadeOut(500);
		$('.search__field').fadeIn(500);
	})
});