
$("#btn_login").click(function(){
	
	var screen_id = textarea;
	var password = textarea;
	
	App.signIn("screen_id","password",function(signin){
		console.log(signin);

	});
});


