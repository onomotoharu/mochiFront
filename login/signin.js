$(function(){
});


$(function(){
	$(".btn_login").click(function(){
    	var screen_id = $(".login_id").val();
        var screen_ps = $(".login_ps").val();
        App.signIn(screen_id,screen_ps,function(a){console.log(a);});
    });
});
