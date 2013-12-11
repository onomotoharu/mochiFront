$(function(){
	$(".btn_login").click(function(){
    	var screen_id = $(".screen_id").val();
      var password  = $(".password").val();
      App.createUser(screen_id,password,function(){});
      location.href = "../survey/index.html";        
    });
});