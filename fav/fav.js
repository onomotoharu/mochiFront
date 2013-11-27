


$(document).ready(function(){
	$('#pagename').append("マイページ")

	$('#myintro').append("");
});

$(function(){

	// レシピデータをJSONから自動追加

	var recipeData = {
		name : "鮭といくらのなんたら",
		price : "400",
		time : "20"
	}

	App = new CheeseController();

	App.signIn("ren","test",function(json){
		// console.log(json);
	});

	App.getDetail(1,function(recipe){
		console.log(recipe);
		$(".fav_menu_photo").attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
		$(".fav_menu_title").text(recipe.name);
		$(".fav_menu_money").text(recipe.required_money);
		$(".fav_menu_time").text(recipe.necessary_time);
	});

	$(".fav_menu_title,.fav_menu_photo").click(function() {
		location.href = "../recipe/index.html";
	});

	App.getOwnProfile(function(myprofile){
        console.log(myprofile);
        $('.myname').html(myprofile.screen_id);
		$('.followcount').append(myprofile.following.length);
		$('.followercount').append(myprofile.followers.length);
		$('#myphoto img').attr("src",myprofile.icon_name);
		$('#myintro').append(myprofile.bio);
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

