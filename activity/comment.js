
$(document).ready(function(){
	$('#pagename').append("みんなのごはん");
	$('#l_btn a').append("＜");
});

$(function(){

	$('#l_btn a').attr("href", "./index.html");

	$('.com_btn').click(function(){
		$('.com_formsend').toggle();
		return false;
	});
	$('input').focus(function(){
		$('.allcontents').css("margin", "45px 0 0 0 ");
		$('.hyouji_btn').click(function(){
			$('#header').css("position","fixed").css("top", "0");
		});
	});
	$('.hyouji_btn').click(function(){
		$('.hyouji_on').toggle();
		$('.hyouji_off').css("display", "none");
		$('input').css("margin-top", "16px")

	});
});


