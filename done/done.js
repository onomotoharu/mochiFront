jQuery(function($) {

  $('#l_btn a').attr("href", "javascript:history.back();");

  var frag_camera = new Boolean(false);
  var frag_good   = new Boolean(false);
  var frag_tw     = new Boolean(false);
  var frag_fb     = new Boolean(false);

  var pageH       = $("#container").height();

  var doneData = {
    doneComment : ".doneComment",
    donePhoto : "#imageInput",
    doneDay : "new Date()",
  };

  recipe_id = getUrlVars()["recipe_id"];

  App = new CheeseController();

  App.getDetail(recipe_id,function(recipe){
    console.log(recipe);
    $('.r_name').text(recipe.name);
    $('.foodTitle img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});

  });

  // 入力フォーム
    $("textarea")
      .focus(function() {
        var self = $(this);
        if (self.val() === placeHolder) { self.val('');}
      })
      .blur(function() {
        var self = $(this);
        if (self.val() === "") { self.val(placeHolder);}
    });

    $(function(){
  	$('input[type=text],textarea').focus(function(){
  		$(this).addClass('focus');
  	}).blur(function(){
  		$(this).removeClass('focus');
  	});
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

  $(".cookedBtn img").hide();

  $('.cookedBtn').click(function(){

    $(this).addClass("cookedBtn_on");

    text = $(".doneComment").val();

    App.sendMade(recipe_id,text,function(toukou){
      // console.log(toukou);
    });

    // var text = $(".doneComment").val();
    // alert(text);

    // loading画像を表示
    $('head').append('<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>');
    $("#fade").css("height", pageH).delay(300).fadeOut(1500);
    $("#loader").delay(300).fadeOut(1000);
    $("#container").css("display", "block");

    var content = "",
        recommend = false,
        img = "";

    // 通信に成功
    setTimeout(function(){
        localStorage.setItem("hoge", 1)
        location.href = "../log/index.html";
      },1300);

    return false;

  });


});

$(function() {
  $('input[type=file]').after('<span></span>');

  $('input[type=file]').change(function() {
    var file = $(this).prop('files')[0];
    $('#preview').find("img").fadeOut(0);


    if (! file.type.match('image.*')) {
      $('span').html('');
      return;
    }

    var reader = new FileReader();
    reader.onload = function() {
      var img_src = $('<img>').attr('src', reader.result);
      $('span').html(img_src);
    }
    reader.readAsDataURL(file);
  });
});
