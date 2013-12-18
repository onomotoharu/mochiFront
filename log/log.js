$(function(){
	$('#nav_my img').attr("src", "../img/on/my_on.png");
  	$('#pagename').append("マイページ");
});

$(function() {

	if(localStorage.getItem("hoge") !== null) {
	  $('.success').slideUp(0).slideDown('fast').delay(2500).slideUp('fast', function() {
	    localStorage.removeItem("hoge");
	  });
	}

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

	// CheeseController

	App.getOwnProfile(function(myprofile){
		// プロフィール部分DOM操作
	    $('.myname').html(myprofile.screen_id);
		$('.followcount').append(myprofile.following.length);
		$('.followercount').append(myprofile.followers.length);
		$('#myphoto img').attr("src",myprofile.icon_name);
		$('#myintro').append(myprofile.bio);
	});

	App.getOwnActivities(function(activity){

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
				$date = $('<div/>').addClass('date').text($created_at);

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
