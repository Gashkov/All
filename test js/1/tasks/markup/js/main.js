	$(".box").css("height", "100px");
	$(".block").css("height", "150px");
	$("ul li:first-child").css("color", "red");
	$(".btn-clean").click(function() {
		$("fieldset input:first-child").val("");
		$("input[type='password']").val("");
		});
	$("li:nth-child(2n)").eq(0).prepend("2. ");
	$("li:nth-child(2n)").eq(1).prepend("4. ");
	$("li:nth-child(2n)").eq(2).prepend("6. ");
	$("li:nth-child(2n)").eq(3).prepend("2. ");
	$("li:nth-child(2n)").eq(4).prepend("4. ");
	$("li:nth-child(2n)").eq(5).prepend("6. ");
	$("li:nth-child(2n)").eq(6).prepend("2. ");
	$("li:nth-child(2n)").eq(7).prepend("4. ");
	$("li:nth-child(2n)").eq(8).prepend("6. ");
	$("ul").css("list-style-type", "none");
	/*$('li:nth-child(2n)').prepend("1");*/
/*	$("li:odd").prepend("111");*/
	$('li').click(function(){
		$("li").addClass("active")
	})
	.mouseout(function(){
		$("li").removeClass("active")
	})