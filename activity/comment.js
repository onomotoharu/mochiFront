$(document).ready(function(){
	$('#pagename').append("みんなのごはん");
  $('#l_btn a').attr("href", "./index.html");
});

$(function(){
  
  App = new CheeseController();

  App.signIn("ren","test",function(json){
    // console.log(json);
  });

  // レシピデータ
  App.getDetail(1,function(recipe){
    $('.recipe_name a').text(recipe.name).attr({'href':recipe.source_url});
    $('.recipe_photo img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
  });

  // つくった日
  App.getOwnActivities(function(activity){
    var date = activity.user[0].created_at;
    $('.right .date').text(date);
    console.log(activity);
  });

  // ユーザデータ
  // $('.user_info .user_icon img').attr({'src':localStorage.pic});
  $('.user_info .user_id').text(localStorage.screen_id);

  // inputの挙動
  $('input').focus(function(){
    $('.allcontents').css("margin", "45px 0 0 0 ");
    $('.hyouji_btn').click(function(){
      $('#header').css("position","fixed").css("top", "0");
    });
  });

  // 送信ボタンをクリックしたら
  $(".send").click(function(userId,comment) {

    // コメントを投稿
    App.getOwnActivities(function(activity){
      var newComment = $("<div/>").appendTo('div.comment').addClass('come_com');
      newComment.append($("<span/>").text(commentObj.userId).addClass('user_id'));
      commentObj.comment = $(".com_input").val();
      newComment.append($("<span/>").text(commentObj.comment).addClass('com_txt'));
    });

  });

});


