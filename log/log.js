$(function(){
  	$('#pagename').append("マイページ");
});

$(function() {

	if(localStorage.getItem("hoge") !== null) {
	  $('.success').slideUp(0).slideDown('fast').delay(2500).slideUp('fast', function() {
	    localStorage.removeItem("hoge");
	  });
	}

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

	screen_id = getUrlVars()["recipe_id"];

	App.getOwnProfile(function(myprofile){
		if(screen_id == null || screen_id == myprofile.screen_id){
			$('#nav_my img').attr("src", "../img/on/my_on.png");
			// プロフィール部分DOM操作
		    $('.myname').html(myprofile.screen_id);
			$('.followcount').text(myprofile.following.length);
			$('.followercount').text(myprofile.followers.length);
			$('#myphoto img').attr("src",myprofile.icon_name);
			$('#myintro').append(myprofile.bio);

			$('#followbtn').css("display", "none");

			App.getOwnActivities(function(myactivity){
				console.log(myactivity);
				for(i=0;i<myactivity.activities.length;i++){

					// 過去ログの数だけ表示
					if(myactivity.activities[i].type_code == 100){

					    // レシピID
						recipe_id = myactivity.activities[i].recipe_id;

						// レシピデータ
						App.getDetail(recipe_id,function(recipe){
							// レシピ写真の追加
							$recipe_photo_img = $('<img/>').attr({'src':"http://winvelab.net/cheese/img/" +recipe.default_picture_name});
							$recipe_photo     = $('<div/>').addClass('recipe_photo').append($recipe_photo_img);
							// レシピ名の追加
							$recipe_title_a   = $('<a href="#"></a>').text(recipe.name).attr({'href':"../recipe/index.html?recipe_id=" + recipe_id});
							$recipe_title     = $('<div/>').addClass('title').append($recipe_title_a);
						});

						//日付
						$created_at = (myactivity.activities[i].created_at).split("T")[0];
						$hour = (myactivity.activities[i].created_at).split("T")[1].split(":")[0];
						$minute = (myactivity.activities[i].created_at).split("T")[1].split(":")[1];
						$date = $('<div/>').addClass('date').text($created_at + " " + $hour + ":" + $minute);

					    // コメント
					    if(myactivity.activities[i].comment == "undefined" || myactivity.activities[i].comment == "") {
					    	$recipe_title.removeClass('title').addClass('recipe_title2');
					    	$my_comment = $('<div/>').addClass('my_comment').css({display: 'none'});
					    } else if(myactivity.activities[i].comment != "undefined") {
				    		$my_comment = $('<div/>').addClass('my_comment').text(myactivity.activities[i].comment);
				    	};

				    	// いいねボタン生成
				    	if(myactivity.activities[i].is_liked == false) {
				    		$iine_count = $('<span>').text(myactivity.activities[i].likes_count).addClass('iine_count');
					    	$iine       = $('<span/>').text("イイネ！").after($iine_count);
					    	$iine_img   = $('<img/>').attr('src','./img/good_off.png');
					    	$iine_btn   = $('<div/>').addClass('iine_btn').append($iine_img.after($iine));
					    } else if(myactivity.activities[i].is_liked == true){
					    	$iine_count = $('<span>').text(myactivity.activities[i].likes_count).addClass('iine_count');
					    	$iine       = $('<span/>').text("イイネ！").after($iine_count);
					    	$iine_img   = $('<img/>').attr('src','./img/good_on.png');
					    	$iine_btn   = $('<div/>').addClass('iine_btn_on').append($iine_img.after($iine));
					    };

				    	// コメントボタン生成
				    	$com_count  =  $('<span/>').text(myactivity.activities[i].comments.length);
				    	$com        = $('<span/>').text("コメント").after($com_count);
				    	$com_img    = $('<img/>').attr('src','./img/com_off.png');
				    	$com_btn    = $('<div/>').addClass('com_btn').append($com_img.after($com));

				    	// シェアボタン生成
				    	$share_img  = $('<img/>').attr('src', './img/…_off.png');
				    	$open01     = $('<a href="#open01"></a>').append($share_img);
				    	$p_open01   = $('<p/>').append($open01);
				    	$share      = $('<div id="share"></div>').append($p_open01);

				    	activity_id  = myactivity.activities[i].id;
				    	$activity_id = $('<div/>').addClass('activity_id').text(activity_id);

				    	// 親要素生成
						$act_left   = $('<div/>').addClass('act_left').append($recipe_photo);
						$act_right  = $('<div/>').addClass('act_right').append($date.after($recipe_title).after($my_comment));
						$act_bottom = $('<div/>').addClass('act_bottom').append($com_btn.after($activity_id).after($iine_btn));
						$('.log').append($act_left.after($act_right).after($act_bottom));
					};
				};

				// コメントボタンをクリックしたら
			    $(".com_btn").click(function() {

					activity_id = $(this).next(activity_id).text();
			        // URLにパラメータとして渡す
			        location.href = "../activity/comment.html?activity_id=" + activity_id;

				});

				// いいねボタンをクリックしたら
				$('.iine_btn,.iine_btn_on').click(function() {

					activity_id = $(this).prev(activity_id).text();
					for(var i = 0;i<myactivity.activities.length;i++) {
						if(myactivity.activities[i].id == activity_id){
							iine_count  = myactivity.activities[i].likes_count;

							// イイネ数を+1して_onデザインにする
							if($(this).hasClass('iine_btn')){
								$(this).addClass("iine_btn_on").removeClass('iine_btn');
								$(".iine_btn_on img").attr('src', './img/good_on.png');
								iine_count++;
								$(this).children('span.iine_count').text(iine_count);
								activity_id = myactivity.activities[i].id;
								App.goodToActivity(activity_id,function(){});
								location.reload();
							} else if($(this).hasClass('iine_btn_on')) {
								$(this).addClass("iine_btn").removeClass('iine_btn_on');
								$(".iine_btn img").attr('src', './img/good_off.png');
								iine_count--;
								$(this).children('span.iine_count').text(iine_count);
								activity_id = myactivity.activities[i].id;
								App.goodToActivity(activity_id,function(){});
								location.reload();
							};
						};
					};
				});
			});
		}else{
			App.getProfile(screen_id, function(profile){

				console.log(profile);

				$('.myname').html(profile.screen_id);
				$('.followcount').text(profile.following.length);
				$('.followercount').text(profile.followers.length);
				$('#myphoto img').attr("src",profile.icon_name);
				$('#myintro').append(profile.bio);

				$('.follow a').attr("href", "../follow/follow.html?recipe_id="+screen_id);
				$('.follower a').attr("href", "../follow/follower.html?recipe_id="+screen_id);

				$('#graph a').attr("href", "../graph/index.html?recipe_id="+screen_id);
				$('#fav a').attr("href", "../fav/index.html?recipe_id="+screen_id);
				$('#badge a').attr("href", "../medal/index.html?recipe_id="+screen_id);

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

				App.getActivities(screen_id, function(activity){

					console.log(activity);

					for(i=0;i<activity.activities.length;i++){

						// 過去ログの数だけ表示
						if(activity.activities[i].type_code == 100){

							// レシピID
							recipe_id = activity.activities[i].recipe_id;

							// レシピデータ
							App.getDetail(recipe_id,function(recipe){
								// レシピ写真の追加
								$recipe_photo_img = $('<img/>').attr({'src':"http://winvelab.net/cheese/img/" +recipe.default_picture_name});
								$recipe_photo     = $('<div/>').addClass('recipe_photo').append($recipe_photo_img);
								// レシピ名の追加
								$recipe_title_a   = $('<a href="#"></a>').text(recipe.name).attr({'href':"../recipe/index.html?recipe_id=" + recipe_id});
								$recipe_title     = $('<div/>').addClass('title').append($recipe_title_a);
							});

							//日付
							$created_at = (activity.activities[i].created_at).split("T")[0];
							$hour = (activity.activities[i].created_at).split("T")[1].split(":")[0];
							$minute = (activity.activities[i].created_at).split("T")[1].split(":")[1];
							$date = $('<div/>').addClass('date').text($created_at + " " + $hour + ":" + $minute);

						    // コメント
						    if(activity.activities[i].comment == "undefined" || activity.activities[i].comment == "") {
						    	$recipe_title.removeClass('title').addClass('recipe_title2');
						    	$my_comment = $('<div/>').addClass('my_comment').css({display: 'none'});
						    } else if(activity.activities[i].comment != "undefined") {
						   		$my_comment = $('<div/>').addClass('my_comment').text(activity.activities[i].comment);
						    };

						    // いいねボタン生成
						    if(activity.activities[i].is_liked == false) {
						    	$iine_count = $('<span>').text(activity.activities[i].likes_count).addClass('iine_count');
							   	$iine       = $('<span/>').text("イイネ！").after($iine_count);
							   	$iine_img   = $('<img/>').attr('src','./img/good_off.png');
							   	$iine_btn   = $('<div/>').addClass('iine_btn').append($iine_img.after($iine));
							} else if(activity.activities[i].is_liked == true){
								$iine_count = $('<span>').text(activity.activities[i].likes_count).addClass('iine_count');
							   	$iine       = $('<span/>').text("イイネ！").after($iine_count);
							   	$iine_img   = $('<img/>').attr('src','./img/good_on.png');
							   	$iine_btn   = $('<div/>').addClass('iine_btn_on').append($iine_img.after($iine));
							};

						    // コメントボタン生成
						    $com_count  =  $('<span/>').text(activity.activities[i].comments.length);
						    $com        = $('<span/>').text("コメント").after($com_count);
						    $com_img    = $('<img/>').attr('src','./img/com_off.png');
						    $com_btn    = $('<div/>').addClass('com_btn').append($com_img.after($com));

							// シェアボタン生成
						    $share_img  = $('<img/>').attr('src', './img/…_off.png');
						    $open01     = $('<a href="#open01"></a>').append($share_img);
						    $p_open01   = $('<p/>').append($open01);
						    $share      = $('<div id="share"></div>').append($p_open01);

						    activity_id  = activity.activities[i].id;
						    $activity_id = $('<div/>').addClass('activity_id').text(activity_id);

						    // 親要素生成
							$act_left   = $('<div/>').addClass('act_left').append($recipe_photo);
							$act_right  = $('<div/>').addClass('act_right').append($date.after($recipe_title).after($my_comment));
							$act_bottom = $('<div/>').addClass('act_bottom').append($com_btn.after($activity_id).after($iine_btn));
							$('.log').append($act_left.after($act_right).after($act_bottom));
						}
					}

					// コメントボタンをクリックしたら
					$(".com_btn").click(function() {
						activity_id = $(this).next(activity_id).text();
					    // URLにパラメータとして渡す
					    location.href = "../activity/comment.html?activity_id=" + activity_id;
					});

					// いいねボタンをクリックしたら
					$('.iine_btn,.iine_btn_on').click(function() {
						activity_id = $(this).prev(activity_id).text();
						for(var i = 0;i<activity.activities.length;i++) {
							if(activity.activities[i].id == activity_id){
								iine_count  = activity.activities[i].likes_count;

								// イイネ数を+1して_onデザインにする
								if($(this).hasClass('iine_btn')){
									$(this).addClass("iine_btn_on").removeClass('iine_btn');
									$(".iine_btn_on img").attr('src', './img/good_on.png');
									iine_count++;
									$(this).children('span.iine_count').text(iine_count);
									activity_id = activity.activities[i].id;
									App.goodToActivity(activity_id,function(){});
									location.reload();
								} else if($(this).hasClass('iine_btn_on')) {
									$(this).addClass("iine_btn").removeClass('iine_btn_on');
									$(".iine_btn img").attr('src', './img/good_off.png');
									iine_count--;
									$(this).children('span.iine_count').text(iine_count);
									activity_id = activity.activities[i].id;
									App.goodToActivity(activity_id,function(){});
									location.reload();
								};
							};
						};
					});
				});
			});

			
		}
	});
});
