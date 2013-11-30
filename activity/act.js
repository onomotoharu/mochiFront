$(document).ready(function(){
	$('#pagename').append("みんなのごはん")
});


$(function(){
  $('#nav_act img').attr("src", "../img/on/act_on.png");
});


$(function(){

	// CheeseController
	
	App = new CheeseController();

	App.signIn("ren","test",function(json){
		// console.log(json);
	});

	App.getTimeline(function(timeline){

		console.log(timeline);

		// タイムラインの数だけ表示
		for(i=0;i<timeline.length;i++){

			console.log(timeline[i]);

		    // レシピID取得
			// recipe_id = timeline[i].recipe_id;
			recipe_id = 1;

			// レシピデータ取得
			App.getDetail(recipe_id,function(recipe){
				console.log(recipe);
				// レシピ写真の追加
				$re_photo_img = $('<img/>').attr({'src':"http://winvelab.net/cheese/img/" +recipe.default_picture_name});
				$re_photo     = $('<div/>').addClass('re_photo').append($re_photo_img);
				// レシピ名の追加
				$title_a   = $('<a href="#"></a>').text(recipe.name).attr({'href':"../recipe/index.html?recipe_id=" + recipe_id});
				$title     = $('<div/>').addClass('title').append($title_a);
			});

			//日付生成
			$created_at = (timeline[i].created_at).split("T")[0];
			$date = $('<div/>').addClass('date').text($created_at);

		    // 投稿ユーザ名生成
		    // $myphoto_img = $('<img/>').attr({'src':timeline[i].});
		    // $myphoto     = $('<div/>').addClass('myphoto').append($myphoto_img);
		    $myname      = $('<span/>').addClass('myname').text(timeline[i].screen_id);
		    $myname_text = "さんがつくりました！";
		    $user        = $('<div/>').addClass('user').append($myname.after($myname_text));
		    // $user        = $('<div/>').addClass('user').append($myphoto.after($myname).after($myname_text));

	    	// いいねボタン生成
	    	$iine       = $('<span/>').text("イイネ！0");
	    	$iine_img   = $('<img/>').attr('src','./img/good_off.png');
	    	$iine_btn   = $('<div/>').addClass('iine_btn').append($iine_img.after($iine));

	    	// コメントボタン生成
	    	$com        = $('<span/>').text("コメント0");
	    	$com_img    = $('<img/>').attr('src','./img/com_off.png');
	    	$com_btn    = $('<div/>').addClass('com_btn').append($com_img.after($com));

	    	// シェアボタン生成
	    	$share_img  = $('<img/>').attr('src', './img/…_off.png');
	    	$open01     = $('<a href="#open01"></a>').append($share_img);
	    	$p_open01   = $('<p/>').append($open01);
	    	$share      = $('<div id="share"></div>').append($p_open01);

	    	// 親要素生成
			$act_left   = $('<div/>').addClass('act_left').append($re_photo);
			$act_right  = $('<div/>').addClass('act_right').append($date.after($title).after($user));
			$act_bottom = $('<div/>').addClass('act_bottom').append($com_btn.after($iine_btn).after($share));
			$('.all_act').prepend($act_left.after($act_right).after($act_bottom));

			var com_count  = timeline[i].comments.length;
	    	var iine_count = timeline[i].likes_count;

		    // コメントボタンをクリックしたら
		    $(".com_btn").click(function() {

		    	i = i-1;

		        // 親要素my_actのidにactivityの配列ナンバーを追加
		        $(this).parent(".my_act").attr('id', 'i');

		        // URLにパラメータとして渡す
		        location.href = "../activity/comment.html?activity_id=" + i;

			});

			// いいねボタンをクリックしたら
			$(".iine_btn").click(function() {

				i = i-1;

			// イイネ数を+1して_onデザインにする
			if($(this).hasClass('iine_btn')){
			  $(this).addClass("iine_btn_on").removeClass('iine_btn');
			  $(".iine_btn_on img").attr('src', './img/good_on.png');
			  iine_count++;
			  $(this).children('span').text("イイネ！" + iine_count);
			} else if($(this).hasClass('iine_btn_on')) {
			  $(this).addClass("iine_btn").removeClass('iine_btn_on');
			  $(".iine_btn img").attr('src', './img/good_off.png');
			  iine_count--;
			  $(this).children('span').text("イイネ！" + iine_count);
			}

			App.goodToActivity(i,function(){});

			});

		};

	});

	// App.getTimeline(function(timeline) {

	// 	var timeline_id = 0;
	// 	console.log(timeline[timeline_id]);

	//     // レシピデータ
	//     var recipe_id = timeline[timeline_id].recipe_id;
	//     App.getDetail(recipe_id,function(recipe){
	//       $('.title a').text(recipe.name).attr({'href':recipe.source_url});
	//       $('.re_photo img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
	//     });

	//     // つくった日
	//     var date = timeline[timeline_id].created_at;
	//     $('.act_right .date').text(date.split("T")[0]);

	//     // ユーザデータ
	//     $('#myphoto img').attr({'src':timeline[timeline_id].picture_path});
	//     $('.myname').text(timeline[timeline_id].user_id);

	// });

	$('.com_btn').click(function(){
		$('.com_formsend').toggle();
		return false;
	});
	$('input').focus(function(){
		$('.allcontents').css("margin", "45px 0 0 0 ");
		$('.hyouji_btn').click(function(){
			$('#header').css("position","fixed").css("top", "0");
		});
	});
	$('.hyouji_btn').click(function(){
		$('.hyouji_on').toggle();
		$('.hyouji_off').css("display", "none");
		$('input').css("margin-top", "16px")

	});
});
