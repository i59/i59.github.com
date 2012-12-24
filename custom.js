$(function() 
{
	$("code").slideDown();
	$("code").slideUp();

	$(".code").click(function() {
	
		$(this).find("code").slideToggle();
	});
});