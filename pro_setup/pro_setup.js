$(document).ready(function(){
  // $('textarea').maxlength();
  $('#pagename').append("プロフィール設定")
  });

  App = null;

  $(function(){

  App.getOwnProfile(function(proData){
    console.log(proData);
    $('#comment').val(proData.bio);
    $('#username').val(proData.screen_id);
    $('#preview').attr({'src':"http://winvelab.net/cheese/img/" + proData.icon_name + ".png"});
  });

  var screen_id = $('#username').text();
  var password = $('#pass').text();
  var bio = $('#comment').text();
  App.userCreate(screen_id,password,function(){})




//画像のサムネイル処理
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


  $('input[type=file]').after('<div id="preview"></div>');

  $('input[type=file]').change(function() {
    var file = $(this).prop('files')[0];
    $('#preview').find("noimage").fadeOut(0);

    if (! file.type.match('image.*')) {
      $('#preview').html('');
      return;
    }

    var reader = new FileReader();
    reader.onload = function() {
      var img_src = $('<img>').attr('src', reader.result);
      $('#preview').html(img_src);
    }
    reader.readAsDataURL(file);
  });


});
