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

  $(".cookedBtn img").hide();

  $('.cookedBtn').click(function(){
    $(this).addClass("cookedBtn_on");
    // location.href = "../log/index.html";

    // loading.gifを表示
    $(".cookedBtn img").show();
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