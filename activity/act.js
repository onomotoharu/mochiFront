$(document).ready(function(){	$('#pagename').append("みんなのごはん")});$(function(){  $('#nav_act img').attr("src", "../img/on/act_on.png");});$(function(){	// CheeseController	App = new CheeseController();	App.getTimeline(function(timeline){		console.log(timeline);		// タイムラインの数だけ表示		for(i=0;i<timeline.length;i++){			// アクティビティID取得			activity_id = timeline[i].activity_id;		    // レシピID取得			recipe_id = timeline[i].recipe_id;			// recipe_id = 1;			// レシピデータ取得			App.getDetail(recipe_id,function(recipe){				// レシピ写真の追加				$re_photo_img = $('<img/>').attr({'src':"http://winvelab.net/cheese/img/" +recipe.default_picture_name});				$re_photo     = $('<div/>').addClass('re_photo').append($re_photo_img);				// レシピ名の追加				$title_a   = $('<a href="#"></a>').text(recipe.name).attr({'href':"../recipe/index.html?recipe_id=" + recipe_id});				$title     = $('<div/>').addClass('title').append($title_a);			});			//日付生成			$created_at = (timeline[i].created_at).split("T")[0];			$date = $('<div/>').addClass('date').text($created_at);		    // 投稿ユーザ名生成		    // $myphoto_img = $('<img/>').attr({'src':timeline[i].});		    // $myphoto     = $('<div/>').addClass('myphoto').append($myphoto_img);		    $myname       = $('<span/>').addClass('myname').text(timeline[i].screen_id);		    $myname_text  = "さんがつくりました！";		    $user         = $('<div/>').addClass('user').append($myname.after($myname_text));		    // $user        = $('<div/>').addClass('user').append($myphoto.after($myname).after($myname_text));	    	// いいねボタン生成	    	if(timeline[i].is_liked == false) {	    		$iine_count = $('<span>').text(timeline[i].likes_count).addClass('iine_count');		    	$iine       = $('<span/>').text("イイネ！").after($iine_count);		    	$iine_img   = $('<img/>').attr('src','./img/good_off.png');		    	$iine_btn   = $('<div/>').addClass('iine_btn').append($iine_img.after($iine));		    } else if(timeline[i].is_liked == true){		    	$iine_count = $('<span>').text(timeline[i].likes_count).addClass('iine_count');		    	$iine       = $('<span/>').text("イイネ！").after($iine_count);		    	$iine_img   = $('<img/>').attr('src','./img/good_on.png');		    	$iine_btn   = $('<div/>').addClass('iine_btn_on').append($iine_img.after($iine));		    };	    	// コメントボタン生成	    	$com_count   =  $('<span/>').text(timeline[i].comments.length);	    	$com         = $('<span/>').text("コメント").append($com_count);	    	$com_img     = $('<img/>').attr('src','./img/com_off.png');	    	$com_btn     = $('<div/>').addClass('com_btn').append($com_img.after($com));	    	// シェアボタン生成	    	$share_img   = $('<img/>').attr('src', './img/…_off.png');	    	$open01      = $('<a href="#open01"></a>').append($share_img);	    	$p_open01    = $('<p/>').append($open01);	    	$share       = $('<div id="share"></div>').append($p_open01);	    	$activity_id = $('<div/>').addClass('activity_id').text(activity_id);	    	// 親要素生成			$act_left    = $('<div/>').addClass('act_left').append($re_photo);			$act_right   = $('<div/>').addClass('act_right').append($date.after($title).after($user));			$act_bottom  = $('<div/>').addClass('act_bottom').append($com_btn.after($activity_id).after($iine_btn));			$('.all_act').append($act_left.after($act_right).after($act_bottom));		};		// コメントボタンをクリックしたら	    $(".com_btn").click(function() {	    	activity_id = $(this).next(activity_id).text();	        // URLにパラメータとして渡す	        location.href = "../activity/comment.html?activity_id=" + activity_id;		});		// いいねボタンをクリックしたら		$('.iine_btn,.iine_btn_on').click(function() {			activity_id = $(this).prev('.activity_id').text();			for(var j = 0;j<timeline.length;j++) {				if(timeline[j].activity_id == activity_id){					iine_count  = timeline[j].likes_count;					// イイネ数を+1して_onデザインにする					if($(this).hasClass('iine_btn')){						$(this).addClass("iine_btn_on").removeClass('iine_btn');						$(".iine_btn_on img").attr('src', './img/good_on.png');						iine_count++;						App.goodToActivity(activity_id,function(){});						$(this).children('span.iine_count').text(iine_count);						$(this).prev('.activity_id').text(activity_id);					} else if($(this).hasClass('iine_btn_on')) {						$(this).addClass("iine_btn").removeClass('iine_btn_on');						$(".iine_btn img").attr('src', './img/good_off.png');						iine_count--;						App.goodToActivity(activity_id,function(){});						$(this).children('span.iine_count').text(iine_count);						$(this).prev('.activity_id').text(activity_id);					};				};			};		});	});	$('input').focus(function(){		$('.allcontents').css("margin", "45px 0 0 0 ");		$('.hyouji_btn').click(function(){			$('#header').css("position","fixed").css("top", "0");		});	});	$('.hyouji_btn').click(function(){		$('.hyouji_on').toggle();		$('.hyouji_off').css("display", "none");		$('input').css("margin-top", "16px")	});});