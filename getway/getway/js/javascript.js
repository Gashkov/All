	//Fixed menu start
$('#fopen').click(function(){
	$('#fixedmenu').animate({'left':'170px'}, 1500);	
	$('#fopen').hide(2000);
	$('#fclose').show(2000);
});
$('#fclose').click(function(){
	$('#fixedmenu').animate({'left':'-255px'}, 1500);	
	$('#fopen').show(2000);
	$('#fclose').hide(2000);
});
	//fixed menu finish
	
	//Start Jakor
 $(document).ready(function() {
    $("a.ancLinks").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 2000 );
      return false;
    });
  });
 //finish
$(document).ready(function() { 
	$('a#go').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});


 
