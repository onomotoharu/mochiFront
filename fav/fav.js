$(document).ready(function(){
	$('#pagename').append("マイページ");
});

$(function(){

	// レシピデータ
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

			var recipe_id = myprofile.favorite_recipes[i].id;
			App.getDetail(recipe_id,function(recipe){
				$fav_menu_photo = $('<img/>').addClass('fav_menu_photo').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
				$fav_menu_title = $('<div/>').addClass('fav_menu_title').text(recipe.name);
				$fav_menu_photo_a = $('<a href="#"></a>').attr({'href':"../recipe/index.html?recipe_id=" + recipe_id}).append($fav_menu_photo);
				$fav_menu_title_a = $('<a href="#"></a>').attr({'href':"../recipe/index.html?recipe_id=" + recipe_id}).append($fav_menu_title);

				$money_img = $('<img/>').addClass('fav_icon').attr('src', './img/money.png');
				$time_img = $('<img/>').addClass('fav_icon').attr('src', './img/time.png');
				if(recipe.required_money == 1){money = "100円以下";}
    			else if(recipe.required_money == 2){money = "300円前後";}
    			else if(recipe.required_money == 3){money = "500円前後";}
    			else if(recipe.required_money == 4){money = "1000円前後";}
    			else if(recipe.required_money == 5){money = "2000円前後";}
    			else if(recipe.required_money == 6){money = "3000円前後";}
    			else if(recipe.required_money == 7){money = "5000円前後";}
    			else if(recipe.required_money == 8){money = "10000円以上";}
    			else if(recipe.required_money == 0){money = "不明";}
				$menu_money = $('<span/>').addClass('fav_menu_money').text(money);
				if(recipe.necessary_time == 1){time = "5分以下";}
    			else if(recipe.necessary_time == 2){time = "約10分";}
    			else if(recipe.necessary_time == 3){time = "約15分";}
    			else if(recipe.necessary_time == 4){time = "約30分";}
    			else if(recipe.necessary_time == 5){time = "約1時間";}
    			else if(recipe.necessary_time == 6){time = "1時間以上";}
    			else if(recipe.necessary_time == 0){time = "不明";}
				$menu_time = $('<span/>').addClass('fav_menu_time').text(time);

				// シェアボタン生成
		    	$share_img  = $('<img/>').attr('src', './img/…_off.png');
		    	$open01     = $('<a href="#open01"></a>').append($share_img);
		    	$p_open01   = $('<p/>').append($open01);
		    	$share      = $('<div id="share"></div>').append($p_open01);

				$fav_menu_info = $('<span/>').addClass('fav_menu_info').append($money_img.after($menu_money).after($time_img).after($menu_time));
				$fav_info_all = $('<div/>').addClass('fav_info_all').append($fav_menu_info);
				$fav_menu = $('<div/>').addClass('fav_menu').append($fav_menu_photo_a.after($fav_menu_title_a).after($fav_info_all));
				$('div.tab_title').after($fav_menu);

			});
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


	// $('#graph a').hover(function(){
	// 	$('#graph a img').attr('src', $('#graph a img').attr('src').replace('_off', '_on'));
	// }, function(){
	// 	if (!$('#graph a img').hasClass('current')) {
	// 		$('#graph a img').attr('src', $('#graph a img').attr('src').replace('_on', '_off'));
	// 	}
	// });

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

