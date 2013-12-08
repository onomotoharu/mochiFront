
$(document).ready(function(){
	$('#pagename').append("マイページ")

  	$('#nav_my img').attr("src", "../img/on/my_on.png");

	App.getOwnProfile(function(myprofile){

		// プロフィール部分DOM操作
        $('.myname').html(myprofile.screen_id);
		$('.followcount').append(myprofile.following.length);
		$('.followercount').append(myprofile.followers.length);
		$('#myphoto img').attr("src",myprofile.icon_name);
		$('#myintro').append(myprofile.bio);
		screen_id = myprofile.screen_id;

		App.getGraph(screen_id, function(graph){
			console.log(graph);
			/*$("#input1").attr("value", graph.category[0]);
			$("#input2").attr("value", graph.category[1]);
			$("#input3").attr("value", graph.category[2]);
			$("#input4").attr("value", graph.category[3]);
			$("#input5").attr("value", graph.category[4]);
			$("#input6").attr("value", graph.category[5]);*/
		});
	});

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

