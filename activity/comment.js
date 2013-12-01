$(document).ready(function(){
	$('#pagename').append("みんなのごはん");
  $('#l_btn a').attr("href", "javascript:history.back();");
});

$(function(){

  App = new CheeseController();

  App.signIn("ren","test",function(json){
    // console.log(json);
  });

  App.getOwnActivities(function(activity){

    console.log(activity);
    var activity_id = getUrlVars()["activity_id"]-1;
    // レシピデータ
    var recipe_id = activity.activities[activity_id].recipe_id;
    App.getDetail(recipe_id,function(recipe){
      $('.recipe_name a').text(recipe.name).attr({'href':recipe.source_url});
      $('.recipe_photo img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
    });

    // つくった日
    var date = activity.activities[activity_id].created_at;
    $('.right .date').text(date.split("T")[0]);

    // ユーザデータ
    // $('.user_info .user_icon img').attr({'src':localStorage.pic});
    $('#def_user,.user_info .user_id').text(activity.activities[activity_id].user_id);
    $('#def_comment').text(activity.activities[activity_id].comment);

  });

  // inputの挙動
  $('input').focus(function(){
    $('.allcontents').css("margin", "45px 0 0 0 ");
    $('.hyouji_btn').click(function(){
      $('#header').css("position","fixed").css("top", "0");
    });
  });

  // 送信ボタンをクリックしたら
  $(".send").click(function() {

    // コメントを投稿
    App.getOwnActivities(function(activity){
      var newCommentEl = $("<div/>").appendTo('div.comment').addClass('come_com');
      newCommentEl.append($("<span/>").text(localStorage.screen_id).addClass('user_id'));
      var newComment = $(".com_input").val();
      newCommentEl.append($("<span/>").text(newComment).addClass('com_txt'));
    });

    $(".send a").attr("href", "javascript:history.back();");
    
  });

});


