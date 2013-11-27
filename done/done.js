
jQuery(function($) {

  var frag_camera = new Boolean(false);
  var frag_good   = new Boolean(false);
  var frag_tw     = new Boolean(false);
  var frag_fb     = new Boolean(false);

  var pageH       = $("#container").height();

  
  

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

  $(".cookedBtn img").hide();
  $('.cookedBtn').click(function(){
    $(this).addClass("cookedBtn_on");



    // loading画像を表示
    $('head').append(
    '<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>');
    $("#fade").css("height", pageH).delay(700).fadeOut(600);
    $("#loader").delay(500).fadeOut(300);
    $("#container").css("display", "block");
    
    var content = "",
        recommend = false,
        img = "";

    // 通信に成功
    localStorage.setItem("hoge", 1);
    location.href = "../log/index.html";


    // $.ajax({
    //   method: "POST",
    //   url: "/hoge/hoge",
    //   data: {
    //     hoge: content,
    //     foo: recommend,
    //     buzz: img
    //   },
    //   success: function(res) {
    //     // 通信に成功
    //     localStorage.setItem("hoge", 1);
    //     location.href = "../log/index.html";
    //   },
    //   error: function() {
    //     // 通信に失敗
    //     alert("失敗だよー");
    //   },
    //   complete: function() {
    //     $(".cookedBtn img").hide();
    //     $('.cookedBtn').removeClass("cookedBtn_on");
    //     alert("hogehoge");
    //   }
    // });

    return false;
  })


});



// $(document).ready(function(){

//   $('.r_name').text(

// });

$(function(){
    var doneData = {
      doneComment : ".doneComment",
      donePhoto : "#imageInput",
      doneDay : "new Date()",
    }


  App = new CheeseController();

  App.signIn("ren","test",function(json){
   console.log(json);
  });

  recipe_id = getUrlVars()["recipe_id"];

  App.getDetail(recipe_id,function(recipe){
    console.log(recipe);
    $('.r_name').text(recipe.name);
    $('.foodTitle img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});

  });




  App.sendMade(1,function(toukou){
    console.log(toukou);
    // $('.r_name').text(recipe.name);

  });


});







