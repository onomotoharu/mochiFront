$(document).ready(function(){
	$('#pagename').append("マイページ")

	App = new CheeseController();

    App.signIn("ren","test",function(json){
        console.log(json);
    });

    App.getOwnProfile(function(myprofile){
        console.log(myprofile);
        $('.myname').html(myprofile.screen_id);
		$('.followcount').append(myprofile.following.length);
		$('.followercount').append(myprofile.followers.length);
		$('#myphoto img').attr("src",myprofile.icon_name);
		$('#myintro').append(myprofile.bio);    
    });

  $('#nav_my img').attr("src", "../img/on/my_on.png");


	$('.list a').hover(function(){
		$('.list a img').attr('src', $('.list a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.list a img').hasClass('current')) {
			$('.list a img').attr('src', $('.list a img').attr('src').replace('_on', '_off'));
		}
	});

	$('.graph a').hover(function(){
		$('.graph a img').attr('src', $('.graph a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.graph a img').hasClass('current')) {
			$('.graph a img').attr('src', $('.graph a img').attr('src').replace('_on', '_off'));
		}
	});

	$('.fav a').hover(function(){
		$('.fav a img').attr('src', $('.fav a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.fav a img').hasClass('current')) {
			$('.fav a img').attr('src', $('.fav a img').attr('src').replace('_on', '_off'));
		}
	});
	
	$('.badge a').hover(function(){
		$('.badge a img').attr('src', $('.badge a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.badge a img').hasClass('current')) {
			$('.badge a img').attr('src', $('.badge a img').attr('src').replace('_on', '_off'));
		}
	});
});