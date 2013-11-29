$(function(){
	App.signIn("screen_id","screen_ps",function(signin){
		console.log(signin);
    });
});


$(function(){
	$(".btn_login").click(function(){
    	var screen_id = $(".login_id").val();
        var screen_ps = $(".login_ps").val();
        alert(screen_id);
        alert(screen_ps);
    });
});