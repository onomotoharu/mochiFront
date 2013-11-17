
$(document).ready(function(){
	$('#pagename').append("みんなのごはん");
});


$(function(){
  $('#nav_act img').attr("src", "../img/on/act_on.png");
});


$(function(){

	$('.com_btn').click(function(){
		$('.com_formsend').toggle();
		return false;
	});
	$('input').focus(function(){
		$('.allcontents').css("margin", "45px 0 0 0 ");
		$('.hyouji_btn').click(function(){
			$('#header').css("position","fixed").css("top", "0");
		});
	});
	$('.hyouji_btn').click(function(){
		$('.hyouji_on').toggle();
		$('.hyouji_off').css("display", "none");
		$('input').css("margin-top", "16px")

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
      location.href = "comment.html";
      
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
