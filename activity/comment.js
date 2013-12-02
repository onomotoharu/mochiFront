$(document).ready(function(){
	$('#pagename').append("みんなのごはん");
  $('#l_btn a').attr("href", "javascript:history.back();");
});

$(function(){

  App = new CheeseController();

  App.signIn("ren","test",function(json){
    // console.log(json);
  });

  App.getTimeline(function(timeline){

    // 該当アクティビティを取得
    for(var i = 0;i<timeline.length;i++) {
      var activity_id = getUrlVars()["activity_id"];
      if(timeline[i].activity_id == activity_id){

        // レシピデータ
        var recipe_id = timeline[i].recipe_id;
        // var recipe_id = 1;
        App.getDetail(recipe_id,function(recipe){
          $('.recipe_name a').text(recipe.name).attr({'href':recipe.source_url});
          $('.recipe_photo img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
        });

        // 既に投稿されたコメントを生成
        for(var j = 0;j < timeline[i].comments.length;j++) {
          console.log(timeline[i]);
          $com      = timeline[i].comments[j].comment;
          console.log($com);
          $com_txt  = $('<span/>').addClass('com_txt').text($com);
          $come_com = $('<div/>').addClass('come_com').append($com_txt);
          $('.comment').append($come_com)
        };

        // つくった日
        var date = timeline[i].created_at;
        $('.right .date').text(date.split("T")[0]);

        // ユーザデータ
        // $('.user_info .user_icon img').attr({'src':localStorage.pic});
        $('#def_user,.user_info .user_id').text(timeline[i].screen_id);
        $('#def_comment').text(timeline[i].comment);
      };
    };

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

        console.log(activity_id+newComment);
        App.sendCommentToActivity(activity_id,newComment,function(){

        });

      });

      // $(".send a").attr("href", "javascript:history.back();");
      
    });

  });

});