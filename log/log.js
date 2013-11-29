
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

	// CheeseController
	
	App = new CheeseController();

	App.signIn("ren","test",function(json){
		// console.log(json);
	});

	App.getOwnActivities(function(activity){

		// 1つの投稿を増やす（空タグ）
		$('div.log').prepend('<div class="my_act"><div class="act_left"><div class="recipe_photo"><img /></div></div><div class="act_right"><div class="date"></div><div class="title"><a href="#"></div><div class="my_comment"></div></div><div class="act_bottom"><div class="com_btn"><img src="./img/com_off.png"><span>コメント0</span></div><div class="iine_btn"><img src="./img/good_off.png"><span>イイネ！0</span></div><div id="share"><p><a href="#open01"><img src="./img/…_off.png"></a></p></div></div></div>');

		// 作った日
		var date = activity.activities[0].created_at;
	    $('.act_right .date').text(date.split("T")[0]);

	    // コメント
    	$('.my_comment').text(activity.activities[0].comment);

	    // レシピID
		recipe_id = activity.activities[0].recipe_id;

		// レシピデータ
		App.getDetail(recipe_id,function(recipe){
			console.log(recipe);
			$('.recipe_photo img').attr({'src':recipe.default_picture_name});
			$('.title a').text(recipe.name).attr({'href':recipe.recipeUrl});
		});

	});

});