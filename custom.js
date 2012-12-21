$(function() 
{
	$("code").hide();

	$(".code").click(function() {
	
		$(this)
			.find("code")
			.slideToggle();
	
	});
});