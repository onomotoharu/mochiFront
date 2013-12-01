$(document).ready(function(){
	$('#pagename').append("みんなのごはん")
});


$(function(){
  $('#nav_act img').attr("src", "../img/on/act_on.png");
});


$(function(){

	var recipeData = {
	recipeName : "おいしいよー",
	recipePhoto : "./img/foodphoto.png",
	recipeUrl : "../recipe/index.html",
	cookedDay : "2013/12/22",
	}

	var cookedUser = {
	pic : "./img/my_icon_user.png",
	id : "bechi"
	}

	// レシピデータ
	$('.re_photo img').attr({'src':recipeData.recipePhoto});
	$('.act_right .date').text(recipeData.cookedDay);
	$('.title a').text(recipeData.recipeName).attr({'href':recipeData.recipeUrl});
	// ユーザデータ
	$('#myname #myphoto img').attr({'src':cookedUser.pic});
	$('#myname .myname').text(cookedUser.id);

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
