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

    console.log(timeline);
    var activity_id = getUrlVars()["activity_id"];

    // 該当アクティビティを取得
    for(var i = 0;i<timeline.length;i++) {
      if(timeline[i].activity_id == activity_id){
        console.log(activity_id+i);

        // レシピデータ
        // var recipe_id = timeline[i].recipe_id;
        var recipe_id = 1;
        App.getDetail(recipe_id,function(recipe){
          $('.recipe_name a').text(recipe.name).attr({'href':recipe.source_url});
          $('.recipe_photo img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
        });

        // つくった日
        var date = timeline[i].created_at;
        $('.right .date').text(date.split("T")[0]);

        // アクティビティID
        $activity_id = $('<div/>').addClass('activity_id').text(activity_id);

        // ユーザデータ
        // $('.user_info .user_icon img').attr({'src':localStorage.pic
        $('#def_user,.user_info .user_id').text(timeline[i].screen_id);
        $('#def_comment').text(timeline[i].comment);

        // いいねボタンをクリックしたら
        $('.iine_btn,.iine_btn_on').click(function() {

          // イイネ数を+1して_onデザインにする
          if($(this).hasClass('iine_btn')){
            console.log("+1");
            $(this).addClass("iine_btn_on").removeClass('iine_btn');
            $(".iine_btn_on img").attr('src', './img/good_on.png');
            iine_count++;
            $(this).children('span').text("イイネ！" + iine_count);
          } else if($(this).hasClass('iine_btn_on')) {
            $(this).addClass("iine_btn").removeClass('iine_btn_on');
            $(".iine_btn img").attr('src', './img/good_off.png');
            iine_count--;
            $(this).children('span').text("イイネ！" + iine_count);
          };

          App.goodToActivity(activity_id,function(){});
        });
      };
    };
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


