$(document).ready(function(){
	$('#pagename').append("プロフィール設定")
	// $('textarea').maxlength();
});

App = null;

$(function(){
	App = new CheeseController();

	App.signIn("ren","test",function(json){
		console.log(json);
	});

	App.getOwnProfile(function(proData){
		console.log(proData);
		$('#comment').val(proData.bio);
		$('#username').val(proData.screen_id);


$(function(){
	$('input[value=""]').val("キーワードを入力")
		.css("color","#969696");
    $("input").focus(function(){
        $(this).css("background-color" , "#dbdbff");
        if(this.value == "キーワードを入力"){
        	$(this).val("").css("color","#000");
        }
    });
    $("input").blur(function(){
        $(this).css("background-color" , "#fff");
        if(this.value == ""){
            $(this).val("キーワードを入力")
            	.css("color","#969696");
        }
        if(this.value != "キーワードを入力"){
            $(this).css("color","#000");

        }
    });
});



   $("#changeImg").click(function(){
         alert(proData.screen_id);

	});

	});




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
