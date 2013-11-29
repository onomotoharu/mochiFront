
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

		console.log(activity);

		// 過去ログの数だけ表示
		for(i=0;i<activity.activities.length;i++){

			console.log(activity.activities[i]);

			// limit

			// 1つの投稿を増やす（空タグ）
			$('div.log').prepend('<div class="my_act"><div class="act_left"><div class="recipe_photo"><img /></div></div><div class="act_right"><div class="date"></div><div class="title"><a href="#"></a></div><div class="my_comment"></div></div><div class="act_bottom"><div class="com_btn"><img src="./img/com_off.png"><span>コメント0</span></div><div class="iine_btn"><img src="./img/good_off.png"><span>イイネ！0</span></div><div id="share"><p><a href="#open01"><img src="./img/…_off.png"></a></p></div></div></div>');
			// $('div.log').prepend($('<div class="my_act">').append('<act_'))

			// 
			var date = activity.activities[i].created_at;
		    $('.act_right .date').text(date.split("T")[0]);

		    // コメント
		    var comment = activity.activities[i].comment;
		    // console.log(comment);
	    	$('.my_comment').text(comment);

		    // レシピID
			recipe_id = activity.activities[i].recipe_id;

			// レシピデータ
			App.getDetail(recipe_id,function(recipe){
				console.log(recipe);
				$('.recipe_photo img').attr({'src':"http://winvelab.net/cheese/img/" +recipe.default_picture_name});
				$('.title a').text(recipe.name).attr({'href':recipe.recipeUrl});
			});


		};

	});

});