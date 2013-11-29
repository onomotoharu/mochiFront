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

	App.getTimeline(function(timeline) {

		var timeline_id = 0;
		console.log(timeline[timeline_id]);

	    // レシピデータ
	    var recipe_id = timeline[timeline_id].recipe_id;
	    App.getDetail(recipe_id,function(recipe){
	      $('.title a').text(recipe.name).attr({'href':recipe.source_url});
	      $('.re_photo img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
	    });

	    // つくった日
	    var date = timeline[timeline_id].created_at;
	    $('.act_right .date').text(date.split("T")[0]);

	    // ユーザデータ
	    $('#myphoto img').attr({'src':timeline[timeline_id].picture_path});
	    $('.myname').text(timeline[timeline_id].user_id);

	});

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
