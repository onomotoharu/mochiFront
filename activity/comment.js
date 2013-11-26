$(document).ready(function(){
	$('#pagename').append("みんなのごはん");
  $('#l_btn a').attr("href", "./index.html");
});

$(function(){
  var recipeData = {
    recipeName : "おいしいよー",
    recipePhoto : "./img/foodphoto.png",
    recipeUrl : "../recipe/index.html",
    cookedDay : "2013/12/22",
  }

  var cookedUser = {
    pic : "./img/my_icon_user.png",
    id : "bechi"
  }

  var commentObj = {
    userId : "namaedesu",
    comment : ""
  };
  
  App = new CheeseController();

  App.signIn("ren","test",function(json){
    // console.log(json);
  });

  // レシピデータ
  App.getDetail(1,function(recipe){
    console.log(recipe);
    $('.recipe_name a').text(recipe.name).attr({'href':recipe.source_url});
    $('.recipe_photo img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
    // $('.right .date').text(recipeData.cookedDay);
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

  // コメントを投稿
  $(".send").click(function(userId,comment) {

    var newComment = $("<div/>").appendTo('div.comment').addClass('come_com');

    newComment.append($("<span/>").text(commentObj.userId).addClass('user_id'));
    commentObj.comment = $(".com_input").val();
    newComment.append($("<span/>").text(commentObj.comment).addClass('com_txt'));

  });

});


