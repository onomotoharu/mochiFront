$(document).ready(function(){
	$('#pagename').append("マイページ")

	$('#myintro').append("");
});

$(function(){

	// レシピデータ
	App = new CheeseController();
<<<<<<< HEAD

	App.signIn("ren","test",function(json){
		// console.log(json);
	});

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
			// if(i == 0) {
			// 	console.log("a");
			// 	$('.tab_title').after('なにもないよ');
			// 	break;
			// } else if(i > 0) {
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

=======

	App.signIn("ren","test",function(json){
		// console.log(json);
	});

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
				$menu_money = $('<span/>').addClass('fav_menu_money').text(recipe.required_money + "円");
				$menu_time = $('<span/>').addClass('fav_menu_time').text(recipe.necessary_time + "分");
				$border = $('<span/>').text(' | ');

				// シェアボタン生成
		    	$share_img  = $('<img/>').attr('src', './img/…_off.png');
		    	$open01     = $('<a href="#open01"></a>').append($share_img);
		    	$p_open01   = $('<p/>').append($open01);
		    	$share      = $('<div id="share"></div>').append($p_open01);

				$fav_menu_info = $('<span/>').addClass('fav_menu_info').append($money_img.after($menu_money).after($border).after($time_img).after($menu_time));
				$fav_info_all = $('<div/>').addClass('fav_info_all').append($fav_menu_info.after($share));
				$fav_menu = $('<div/>').addClass('fav_menu').append($fav_menu_photo_a.after($fav_menu_title_a).after($fav_info_all));
				$('div.tab_title').after($fav_menu);

			});
		};

>>>>>>> origin/master-hirayama
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

