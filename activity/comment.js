$(document).ready(function(){
	$('#pagename').append("みんなのごはん");
  $('#l_btn a').attr("href", "javascript:history.back();");
});

$(function(){


  App = new CheeseController();


  App.getTimeline(function(timeline){

    // 該当アクティビティを取得
    for(var i = 0;i<timeline.length;i++) {
      console.log(timeline[i]);
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
          $user     = timeline[i].comments[j].screen_id;
          $com_user = $('<span/>').addClass('user_id').append($user);
          $com      = timeline[i].comments[j].comment;
          $com_txt  = $('<span/>').addClass('com_txt').text($com);
          $come_com = $('<div/>').addClass('come_com').append($com_user.after($com_txt));
          $('.comment').append($come_com)
        };

        // いいねボタン生成
        if(timeline[i].is_liked == false) {
          $iine_count = $('<span>').text(timeline[i].likes_count).addClass('iine_count');
          $iine       = $('<span/>').text("イイネ！").after($iine_count);
          $iine_img   = $('<img/>').attr('src','./img/good_off.png');
          $iine_btn   = $('<div/>').addClass('iine_btn').append($iine_img.after($iine));
          $activity_id = $('<div/>').addClass('activity_id').text(activity_id);
          $('.com_formsend').after($iine_btn.after($activity_id));
        } else if(timeline[i].is_liked == true){
          $iine_count = $('<span>').text(timeline[i].likes_count).addClass('iine_count');
          $iine       = $('<span/>').text("イイネ！").after($iine_count);
          $iine_img   = $('<img/>').attr('src','./img/good_on.png');
          $iine_btn   = $('<div/>').addClass('iine_btn_on').append($iine_img.after($iine));
          $activity_id = $('<div/>').addClass('activity_id').text(activity_id);
          $('.com_formsend').after($iine_btn.after($activity_id));
        };

        // つくった日
        var date = timeline[i].created_at;
        $('.right .date').text(date.split("T")[0]);

        // ユーザデータ
        // $('.user_info .user_icon img').attr({'src':localStorage.pic});
        if(timeline[i].comment !== "") {
          $('#def_user,.user_info .user_id').text(timeline[i].screen_id);
          $('#def_comment').text(timeline[i].comment);
        };
      };
    };

    // inputの挙動
    $('input').focus(function(){
      $('.allcontents').css("margin", "45px 0 0 0 ");
      $('.hyouji_btn').click(function(){
        $('#header').css("position","fixed").css("top", "0");
      });
    });

    // いいねボタンをクリックしたら
    $('.iine_btn,.iine_btn_on').click(function() {

      activity_id = $(this).next('.activity_id').text();
      for(var j = 0;j<timeline.length;j++) {
        if(timeline[j].activity_id == activity_id){
          iine_count  = timeline[j].likes_count;

          // イイネ数を+1して_onデザインにする
          if($(this).hasClass('iine_btn')){
            $(this).addClass("iine_btn_on").removeClass('iine_btn');
            $(".iine_btn_on img").attr('src', './img/good_on.png');
            iine_count++;
            App.goodToActivity(activity_id,function(){});
            $(this).children('span.iine_count').text(iine_count);
            $(this).prev('.activity_id').text(activity_id);
            location.reload();
          } else if($(this).hasClass('iine_btn_on')) {
            $(this).addClass("iine_btn").removeClass('iine_btn_on');
            $(".iine_btn img").attr('src', './img/good_off.png');
            iine_count--;
            App.goodToActivity(activity_id,function(){});
            $(this).children('span.iine_count').text(iine_count);
            $(this).prev('.activity_id').text(activity_id);
            location.reload();
          };
        };
      };

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

      $(".send a").attr("href", "javascript:history.back();");

    });

  });

});