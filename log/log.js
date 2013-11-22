
$(document).ready(function(){
	$('#pagename').append("マイページ")

	$('.myname').html("名前");

	$('.followcount').append("30");
	$('.followercount').append("25");

	$('#myintro').append("鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者");
});

$(function(){
  $('#nav_my img').attr("src", "../img/on/my_on.png");
});

$(function(){

	if(localStorage.getItem("hoge") !== null) {
	  var slideIn = $("<div></div>").css({
	      position: "absolute",
	      top: 0,
	      left: 0,
	      "z-index": 9999,
	      width: "100%",
	      height: 50,
	      background: "#000",
	      color: "#fff"
	    }).text("うんこほげほげほげ");
	  
	  $("body").append(slideIn);
	  slideIn.slideUp(0).slideDown('fast').delay(3000).slideUp('fast', function() {
	    // にょきっと消えた後に何か実行する
	    console.log("上のが消えたよ〜〜〜〜〜");
	    localStorage.removeItem("hoge");
	  });
	}

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
});


jQuery(function($) {

  var frag_com     = new Boolean(false);
  var frag_iine     = new Boolean(false);


  // コメントボタン

  $(".com_btn").click(function(){
    if(frag_com == false){
      frag_com = true;
      $(".com_btn img").attr("src","img/com_on.png");
      
    }else{
      frag_com = false;
      $(".com_btn img").attr("src","img/com_off.png");
    }
  })

  // イイネ！ボタン

  $(".iine_btn").click(function(){
    if(frag_iine == false){
      frag_iine = true;
      $(".iine_btn img").attr("src","img/good_on.png");
      
    }else{
      frag_iine = false;
      $(".iine_btn img").attr("src","img/good_off.png");
    }
  })


});



