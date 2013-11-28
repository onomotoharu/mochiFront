$(document).ready(function(){
	$('#pagename').append("みんなのごはん");
  $('#l_btn a').attr("href", "./index.html");
});

$(function(){

  var activity_id = getUrlVars()["activity_id"];

  console.log(activity_id);

  App = new CheeseController();

  App.signIn("ren","test",function(json){
    // console.log(json);
  });

  App.getOwnActivities(function(activity){

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
    $('.user_info .user_id').text(localStorage.screen_id);

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
      var newComment = $("<div/>").appendTo('div.comment').addClass('come_com');
      newComment.append($("<span/>").text(localStorage.screen_id).addClass('user_id'));
      activity.activities[0].comment = $(".com_input").val();
      newComment.append($("<span/>").text(activity.activities[0].comment).addClass('com_txt'));
    });

  });

});


