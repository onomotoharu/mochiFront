$(function(){
	$(".btn_login").click(function(){
    	var screen_id = $(".screen_id").val();
        var password  = $(".password").val();

        App.signIn(screen_id,password,function(signup){
        });

    });
});