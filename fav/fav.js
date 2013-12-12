$(document).ready(function(){
	$('#pagename').append("マイページ");
});

$(function(){

	// レシピデータ
	App.getOwnProfile(function(myprofile){

        screen_id = getUrlVars()["recipe_id"];

		App.getOwnProfile(function(myprofile){
        if(screen_id == null){

        	$('#nav_my img').attr("src", "../img/on/my_on.png");

            // プロフィール部分DOM操作
            $('.myname').html(myprofile.screen_id);
            $('.followcount').append(myprofile.following.length);
            $('.followercount').append(myprofile.followers.length);
            $('#myphoto img').attr("src",myprofile.icon_name);
            $('#myintro').append(myprofile.bio);
			for(i=0;i<myprofile.favorite_recipes.length;i++) {
				var recipe_id = myprofile.favorite_recipes[i].id;
				// お気に入りタイムラインDOM操作
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
					$menu_money = $('<span/>').addClass('fav_menu_money').text(money);
					if(recipe.necessary_time == 1){time = "5分以下";}
			    	else if(recipe.necessary_time == 2){time = "約10分";}
			    	else if(recipe.necessary_time == 3){time = "約15分";}
			    	else if(recipe.necessary_time == 4){time = "約30分";}
			    	else if(recipe.necessary_time == 5){time = "約1時間";}
			    	else if(recipe.necessary_time == 6){time = "1時間以上";}
			    	$menu_time = $('<span/>').addClass('fav_menu_time').text(time);
					$border = $('<span/>').text(' | ');

					// シェアボタン生成
					$share_img  = $('<img/>').attr('src', './img/…_off.png');
					$open01     = $('<a href="#open01"></a>').append($share_img);
					$p_open01   = $('<p/>').append($open01);
					$share      = $('<div id="share"></div>').append($p_open01);

					$fav_menu_info = $('<span/>').addClass('fav_menu_info').append($money_img.after($menu_money).after($border).after($time_img).after($menu_time));
					$fav_info_all = $('<div/>').addClass('fav_info_all').append($fav_menu_info);
					$fav_menu = $('<div/>').addClass('fav_menu').append($fav_menu_photo_a.after($fav_menu_title_a).after($fav_info_all));
					$('div.tab_title').after($fav_menu);
				});
			}

        }else{  
            App.getProfile(screen_id, function(profile){
                $('.myname').html(profile.screen_id);
                $('.followcount').append(profile.following.length);
                $('.followercount').append(profile.followers.length);
                $('#myphoto img').attr("src",profile.icon_name);
                $('#myintro').append(profile.bio);

                $('.follow a').attr("href", "../follow/follow.html?recipe_id="+screen_id);
				$('.follower a').attr("href", "../follow/follower.html?recipe_id="+screen_id);

                $('#log a').attr("href", "../log/index.html?recipe_id="+screen_id);
                $('#graph a').attr("href", "../graph/index.html?recipe_id="+screen_id);
                $('#badge a').attr("href", "../medal/index.html?recipe_id="+screen_id);

                for(i=0; i<myprofile.following.length; i++){
					if(myprofile.following[i].screen_id == profile.screen_id){
						$('#followbtn').addClass("on").removeClass("off").text("フォロー中");
					}
					else{
						$('#followbtn').text("フォローする");
					}
				}

				$('#followbtn').click(function(){
					if($('#followbtn').hasClass('off')){
						$('#followbtn').addClass('on').removeClass('off').text('フォロー中');
						App.setFollow(screen_id,function(id){});
						profile.followers.length = profile.followers.length + 1;
						$('.followercount').empty().append(profile.followers.length);
					}
					else if($('#followbtn').hasClass('on')){
						$('#followbtn').addClass('off').removeClass('on').text('フォローする');
						App.setUnfollow(screen_id,function(id){});
						profile.followers.length = profile.followers.length - 1;
						$('.followercount').empty().append(profile.followers.length);
					}
				});

                for(i=0;i<profile.favorite_recipes.length;i++) {

                	console.log(profile);
                	var recipe_id = profile.favorite_recipes[i].id;
                	// お気に入りタイムラインDOM操作
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
						$menu_money = $('<span/>').addClass('fav_menu_money').text(money);
						if(recipe.necessary_time == 1){time = "5分以下";}
				    	else if(recipe.necessary_time == 2){time = "約10分";}
				    	else if(recipe.necessary_time == 3){time = "約15分";}
				    	else if(recipe.necessary_time == 4){time = "約30分";}
				    	else if(recipe.necessary_time == 5){time = "約1時間";}
				    	else if(recipe.necessary_time == 6){time = "1時間以上";}
				    	$menu_time = $('<span/>').addClass('fav_menu_time').text(time);
						$border = $('<span/>').text(' | ');

						// シェアボタン生成
						$share_img  = $('<img/>').attr('src', './img/…_off.png');
						$open01     = $('<a href="#open01"></a>').append($share_img);
						$p_open01   = $('<p/>').append($open01);
						$share      = $('<div id="share"></div>').append($p_open01);

						$fav_menu_info = $('<span/>').addClass('fav_menu_info').append($money_img.after($menu_money).after($border).after($time_img).after($menu_time));
						$fav_info_all = $('<div/>').addClass('fav_info_all').append($fav_menu_info);
						$fav_menu = $('<div/>').addClass('fav_menu').append($fav_menu_photo_a.after($fav_menu_title_a).after($fav_info_all));
						$('div.tab_title').after($fav_menu);
					});
                }
            });
        }

    	});

    });

	// マイページメニュー切替

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

