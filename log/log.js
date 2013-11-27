
$(document).ready(function(){
	$('#pagename').append("マイページ")

	$('.myname').html("名前");

	$('.followcount').append("30");
	$('.followercount').append("25");

	$('#myintro').append("鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者");
});

$(function(){
  $('#nav_my img').attr("src", "../img/on/my_on.png");
});

$(function(){

	if(localStorage.getItem("hoge") !== null) {
	  $('.success').slideUp(0).slideDown('fast').delay(2500).slideUp('fast', function() {
	    localStorage.removeItem("hoge");
	  });
	}

	$('#log a').hover(function(){
		$('#log a img').attr('src', $('#log a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#log a img').hasClass('current')) {
			$('#log a img').attr('src', $('#log a img').attr('src').replace('_on', '_off'));
		}
	});
	

	$('#graph a').hover(function(){
		$('#graph a img').attr('src', $('#graph a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#graph a img').hasClass('current')) {
			$('#graph a img').attr('src', $('#graph a img').attr('src').replace('_on', '_off'));
		}
	});

	$('#fav a').hover(function(){
		$('#fav a img').attr('src', $('#fav a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#fav a img').hasClass('current')) {
			$('#fav a img').attr('src', $('#fav a img').attr('src').replace('_on', '_off'));
		}
	});
	
	$('#badge a').hover(function(){
		$('#badge a img').attr('src', $('#badge a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#badge a img').hasClass('current')) {
			$('#badge a img').attr('src', $('#badge a img').attr('src').replace('_on', '_off'));
		}
	});

	var recipeData = {
	recipeName : "おいしいよー",
	recipePhoto : "./img/foodphoto.png",
	recipeUrl : "../recipe/index.html",
	cookedDay : "2013/12/22",
	}

	var cookedUser = {
	pic : "./img/my_icon_user.png",
	id : "bechi",
	comment : "おいしかったっす〜〜〜"
	}

	// レシピデータ
	$('.recipe_photo img').attr({'src':recipeData.recipePhoto});
	$('.act_right .date').text(recipeData.cookedDay);
	$('.title a').text(recipeData.recipeName).attr({'href':recipeData.recipeUrl});
	// ユーザデータ
	$('#myname #myphoto img').attr({'src':cookedUser.pic});
	$('#myname .myname').text(cookedUser.id);
	$('.my_comment').text(cookedUser.comment);

});



