


$(document).ready(function(){
	$('#pagename').append("マイページ")

	$('#myintro').append("");
});

$(function(){

	// レシピデータ
	App = new CheeseController();

	App.signIn("ren","test",function(json){
		// console.log(json);
	});


	// App.getOwnActivities(function(favRecipe) {
	// 	console.log(favRecipe);
	// 	for(i=0;i<favRecipe.activities.length;i++) {
	// 		if(favRecipe.activities[i].type_code === 100) {
	// 			$('.tab_title').after('<div class="fav_menu"><img src="#" class="fav_menu_photo"><div class="fav_menu_title"></div><div class="fav_info_all"><span class="fav_menu_info"><img src="./img/money.png" width="25" height="25" class="fav_icon"><span class="fav_menu_money"></span>円 |<img src="./img/time.png" width="25" height="25" class="fav_icon"> <span class="fav_menu_time"></span>分</span><div id="share"><p><a href="#open01"><img src="./img/…_off.png"></a></p></div></div></div>')
	// 			var recipe_id = i + 1;
	// 			App.getDetail(recipe_id,function(recipe){
	// 				console.log(recipe);
	// 				$(".fav_menu_photo").attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
	// 				$(".fav_menu_title").text(recipe.name);
	// 				$(".fav_menu_money").text(recipe.required_money);
	// 				$(".fav_menu_time").text(recipe.necessary_time);
	// 			});

	// 			$(".fav_menu_title,.fav_menu_photo").click(function() {
	// 				location.href = "../recipe/index.html";
	// 			});
	// 		} else {
	// 			return false;
	// 		};
	// 	};
	// });


	App.getOwnProfile(function(myprofile){
        console.log(myprofile);

		// プロフィール部分DOM操作
        $('.myname').html(myprofile.screen_id);
		$('.followcount').append(myprofile.following.length);
		$('.followercount').append(myprofile.followers.length);
		$('#myphoto img').attr("src",myprofile.icon_name);
		$('#myintro').append(myprofile.bio);

		// お気に入りタイムラインDOM操作
		for(i=0;i<myprofile.favorite_recipes.length;i++) {
			if(i === 0) {
				$('.tab_title').after('なにもないよ');
			} else if(i > 0) {
				$('.tab_title').after('<div class="fav_menu"><img src="#" class="fav_menu_photo"><div class="fav_menu_title"></div><div class="fav_info_all"><span class="fav_menu_info"><img src="./img/money.png" width="25" height="25" class="fav_icon"><span class="fav_menu_money"></span>円 |<img src="./img/time.png" width="25" height="25" class="fav_icon"> <span class="fav_menu_time"></span>分</span><div id="share"><p><a href="#open01"><img src="./img/…_off.png"></a></p></div></div></div>')
				var recipe_id = i + 1;
				App.getDetail(recipe_id,function(recipe){
					console.log(recipe);
					$(".fav_menu_photo").attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
					$(".fav_menu_title").text(recipe.name);
					$(".fav_menu_money").text(recipe.required_money);
					$(".fav_menu_time").text(recipe.necessary_time);
				});

				$(".fav_menu_title,.fav_menu_photo").click(function() {
					location.href = "../recipe/index.html";
				});
			};
		};

    });

	// マイページメニュー切替

	$('#nav_my img').attr("src", "../img/on/my_on.png");

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
});

