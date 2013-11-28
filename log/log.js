
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


	App = new CheeseController();

	App.signIn("ren","test",function(json){
		// console.log(json);
	});

	App.getOwnActivities(function(activity){


		// 過去ログの配列をすべて表示
		for(var i = 0;i < activity.user[i];i++) {

			// 作った日
			var date = activity.user[i].created_at;
			console.log(date);
		    $('.act_right .date').text(date.split("T")[i]);

		    // コメント
	    	$('.my_comment').text(activity.user[i].comment);

		    // レシピID
			recipe_id = activity.user[i].recipe_id;

			// レシピデータ
			App.getDetail(recipe_id,function(recipe){
				console.log(recipe);
				$('.recipe_photo img').attr({'src':recipe.default_picture_name});
				$('.title a').text(recipe.name).attr({'href':recipe.recipeUrl});
			});

			// コメントボタンをクリックしたら
			$(".com_btn").click(function() {
				
				// 親要素my_actのidにactivityの配列ナンバーを追加
				$(this).parent(".my_act").attr('id', 'i');

				// URLにパラメータとして渡す
				location.href = "../activity/index.html?activity_id=1";


			});

		};

	});

});