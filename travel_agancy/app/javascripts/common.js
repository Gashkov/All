$(document).ready(function() {
	var newsIndex = 1;
	function NewsRotator() {
	  $(".title").hide();
	  $(".title" + newsIndex).show();
	  
	  var newsCount = 3;
	  newsIndex++;
	  if(newsIndex > newsCount) {
	    newsIndex = 1;
	  }
	}

	$(document).ready(function() {
	  NewsRotator();
	  setInterval(NewsRotator, 5000);
	});
});