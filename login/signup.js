$(function(){
	App.signIn("screen_id","screen_ps",function(signup){
		console.log(signup);
    });
});


$(function(){
	$(".btn_login").click(function(){
    	var screen_id = $(".login_ac").val();
    	var screen_ac = $(".login_id").val();
        var screen_ps = $(".login_ps").val();
        alert(screen_id);
        alert(screen_ac);
        alert(screen_ps);
    });
});

function change(){
	if (event.keyCode == 13){
	    var screen_id = $(".login_ac").val();
    	var screen_id = $(".login_id").val();
        var screen_ps = $(".login_ps").val();
        alert(screen_ac);
        alert(screen_id);
        alert(screen_ps);
        document.location = "../survey/index.html";
	}
	else
	return
}