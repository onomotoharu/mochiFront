


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

    var goodOn = 0;

    if(frag_good == false){
      frag_good = true;
      $("#good img").attr("src","img/good_on.png");
      goodOn= 1;
    }else{
      frag_good = false;
      $("#good img").attr("src","img/good.png");
      goodOn= 0;
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
  var doneData = {
  recipePhoto : "./img/food2.jpg",
  doneComment : ".doneComment",
  donePhoto : "#imageInput",
  doneDay : "new Date()",
  }


  // つくった！写真
  $('.foodTitle img').attr({'src':doneData.recipePhoto});

  App = new CheeseController();

  App.signIn("ren","test",function(js){
   // console.log(js);
  });

  App.getDetail(1,function(recipe){
    console.log(recipe);
  });


});




