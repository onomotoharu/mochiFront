jQuery(function($) {

	$('.btn_login').click(function(){
		$(this).addClass("btn_login_on");
		location.href = "./login/signin.html";
	})

});
