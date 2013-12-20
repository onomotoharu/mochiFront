$(function() {

	if(localStorage.getItem("hoge") !== null) {
	  $('.success').slideUp(0).slideDown('fast').delay(2500).slideUp('fast', function() {
	    localStorage.removeItem("hoge");
	  });
	}

	/*if(localStorage.getItem("hoge") !== null) {
	  $('.success').slideUp(0).slideDown('fast').delay(2500).slideUp('fast', function() {
	    localStorage.removeItem("hoge");
	  });
	}*/

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


$(function(){
<<<<<<< HEAD
	  	$('#pagename').append("マイページ");
		App.getOwnProfile(function(myprofile){
		// プロフィール部分DOM操作
	    $('.myname').html(myprofile.screen_id);
		$('.followcount').append(myprofile.following.length);
		$('.followercount').append(myprofile.followers.length);
		$('#myphoto img').attr("src",myprofile.icon_name);
		$('#myintro').append(myprofile.bio);
	});


	App.getOwnBadges(function(medals){
		console.log(medals);

	//JSON.parse(medals)[0].created_at.split(" ")[0]



// 	debugger;

// 	$.each(medals,function(i,medal){
//
// 		alert(medal.title);
// 	});
//


	for(var i=0 ; i < medals.length ; i++){
	  //リストを追加
	  $(".tab_contents").append('<ul><li><div class="medalimg"><a class="zoom" style="display:block;" href="" title=""></a></div><div id="coment"><div class="medallog"></div><div class ="getdate"></div><div class="medalintro"></div></div></li></ul>');
	    };
	  //メダルの画像とタイトルを挿入
	  $(".medalimg a").each(function(i){
	  $(this).append('<img src="medal_img/'+medals[i].picture_name+'">');
// 	  	$(this).attr("title", "medals[i].description.split(" ")[0]");
		});

	  //バッジ名を挿入
	  $(".medallog").each(function(i){
	  $(this).append('<p class="b">'+medals[i].title+'</p>');
	  });

	  //メダル取得の日付を挿入
 	  $(".getdate").each(function(i){
	  $(this).append(medals[i].created_at.split("T")[0] + " ").append(medals[i].created_at.split("T")[1].split(":")[0] + ":").append(medals[i].created_at.split("T")[1].split(":")[1]);
	  });

	　//バッジ名を追加
 	  $(".medalintro").each(function(i){
	  $(this).append(medals[i].description);
	  });
=======
	$('#pagename').append("マイページ");
		
	screen_id = getUrlVars()["recipe_id"];

	App.getOwnProfile(function(myprofile){
		if(screen_id == null || screen_id == myprofile.screen_id){
			$('#nav_my img').attr("src", "../img/on/my_on.png");
			// プロフィール部分DOM操作
			$('.myname').html(myprofile.screen_id);
			$('.followcount').append(myprofile.following.length);
			$('.followercount').append(myprofile.followers.length);
			$('#myphoto img').attr("src",myprofile.icon_name);
			$('#myintro').append(myprofile.bio);

			$('#followbtn').css("display", "none");

			App.getOwnBadges(function(mymedals){

				for(var i=0 ; i < mymedals.length ; i++){
					//リストを追加
					$(".tab_contents").append('<ul><li><div class="medalimg"><a class="zoom" style="display:block;" href="" title=""></a></div><div id="coment"><div class="medallog"></div><div class ="getdate"></div><div class="medalintro"></div></div></li></ul>');
				};
				//メダルの画像とタイトルを挿入
				$(".medalimg a").each(function(i){
				  	$(this).append('<img src="medal_img/'+mymedals[i].picture_name+'">');
					//$(this).attr("title", "mymedals[i].description.split(" ")[0]");
				});
				//バッジ名を挿入
				$(".medallog").each(function(i){
				  	$(this).append('<p class="b">'+mymedals[i].title+'</p>');
				});
				//メダル取得の日付を挿入
				$(".getdate").each(function(i){
					$(this).append(mymedals[i].created_at.split("T")[0]);
				});
				//バッジ名を追加
				$(".medalintro").each(function(i){
				  	$(this).append(mymedals[i].description);
				});
			});
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
				$('#fav a').attr("href", "../fav/index.html?recipe_id="+screen_id);

				for(i=0; i<myprofile.following.length; i++){
					if(myprofile.following[i].screen_id == profile.screen_id){
						$('#followbtn').addClass("on").removeClass("off").text("フォロー中");
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

				App.getBadges(screen_id, function(medals){

					for(var i=0 ; i < medals.length ; i++){
						//リストを追加
						$(".tab_contents").append('<ul><li><div class="medalimg"><a class="zoom" style="display:block;" href="" title=""></a></div><div id="coment"><div class="medallog"></div><div class ="getdate"></div><div class="medalintro"></div></div></li></ul>');
					};
					//メダルの画像とタイトルを挿入
					$(".medalimg a").each(function(i){
					  	$(this).append('<img src="medal_img/'+medals[i].picture_name+'">');
						//$(this).attr("title", "medals[i].description.split(" ")[0]");
					});
					//バッジ名を挿入
					$(".medallog").each(function(i){
					  	$(this).append('<p class="b">'+medals[i].title+'</p>');
					});
					//メダル取得の日付を挿入
					$(".getdate").each(function(i){
						$(this).append(medals[i].created_at.split("T")[0]);
					});
					//バッジ名を追加
					$(".medalintro").each(function(i){
						$(this).append(medals[i].description);
					});
				});
			});
		}
>>>>>>> other_profile
	});
});

