jQuery(function($) {

  var placeHolder = 'コメントを書く...';
  var frag_camera = new Boolean(false);
  var frag_good   = new Boolean(false);
  var frag_tw     = new Boolean(false);
  var frag_fb     = new Boolean(false);

  // 入力フォーム

  $("textarea")
    .focus(function() {
      var self = $(this);
      if (self.val() === placeHolder) { self.val(''); }
    })
    .blur(function() {
      var self = $(this);
      if (self.val() === "") { self.val(placeHolder); }
  });

  // 写真投稿ボタン

  $("#camera").click(function(){
    if(frag_camera == false){
      frag_camera = true;
      $("#camera img").attr("src","img/camera_on.png");

    }
    else{
      frag_camera = false;
      $("#camera img").attr("src","img/camera.png");
    }
  })

  // おすすめボタン

  $("#good").click(function(){
    if(frag_good == false){
      frag_good = true;
      $("#good img").attr("src","img/good_on.png");
      
    }else{
      frag_good = false;
      $("#good img").attr("src","img/good.png");
    }
  })

  // Twitterシェア

  $("#tw").click(function(){
    if(frag_tw == false){
      frag_tw = true;
      $("#tw img").attr("src","img/twitter_on.png");
      
    }else{
      frag_tw = false;
      $("#tw img").attr("src","img/twitter.png");
    }
  })

  // FBシェア

  $("#fb").click(function(){
    if(frag_fb == false){
      frag_fb = true;
      $("#fb img").attr("src","img/facebook_on.png");
      
    }else{
      frag_fb = false;
      $("#fb img").attr("src","img/facebook.png");
    }
  })

  // つくったボタン

  $('.cookedBtn').click(function(){
    $(this).addClass("cookedBtn_on");
    location.href = "../mypage/mypage.html";
  })


});



$(document).ready(function(){

  $('.r_name').text("作った！したいレシピのなまえ");

});

$(function(){

  $('#log a').hover(function(){
    $('#log a img').attr('src', $('#log a img').attr('src').replace('_off', '_on'));
  }, function(){
    if (!$('#log a img').hasClass('current')) {
      $('#log a img').attr('src', $('#log a img').attr('src').replace('_on', '_off'));
    }
  });
  

  $('#graph a').hover(function(){
    $('#graph a img').attr('src', $('#graph a img').attr('src').replace('_off', '_on'));
  }, function(){
    if (!$('#graph a img').hasClass('current')) {
      $('#graph a img').attr('src', $('#graph a img').attr('src').replace('_on', '_off'));
    }
  });

  $('#fav a').hover(function(){
    $('#fav a img').attr('src', $('#fav a img').attr('src').replace('_off', '_on'));
  }, function(){
    if (!$('#fav a img').hasClass('current')) {
      $('#fav a img').attr('src', $('#fav a img').attr('src').replace('_on', '_off'));
    }
  });
  
  $('#badge a').hover(function(){
    $('#badge a img').attr('src', $('#badge a img').attr('src').replace('_off', '_on'));
  }, function(){
    if (!$('#badge a img').hasClass('current')) {
      $('#badge a img').attr('src', $('#badge a img').attr('src').replace('_on', '_off'));
    }
  });

  var doneData = {
  recipeName : "たまごちゃーはん",
  recipePhoto : "./img/food2.jpg",
  cookedDay : "2013/12/22",
  }

  var cookedUser = {
  pic : "./img/my_icon_user.png",
  id : "bechi",
  comment : "おいしかったっす〜〜〜"
  }

  // レシピデータ
  $('.foodTitle img').attr({'src':doneData.recipePhoto});
  $('.act_right .date').text(recipeData.cookedDay);
  $('.title a').text(recipeData.recipeName).attr({'href':recipeData.recipeUrl});
  // ユーザデータ
  $('#myname #myphoto img').attr({'src':cookedUser.pic});
  $('#myname .myname').text(cookedUser.id);
  $('.my_comment').text(cookedUser.comment);

});



