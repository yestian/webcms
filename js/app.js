$(function() {
	winx=$(window).width();
	winy=$(window).height();
	//iframe auto height
	$("#rightframe").height(document.documentElement.clientHeight+50);
	//addClass to leftmenu when active
	$(".leftmenu a").click(function(){
		$(this).addClass("active")
			   .siblings().removeClass("active");
		$(this).parent().siblings().children().removeClass('active');
	});
});
