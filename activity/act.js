//function footer() {
//	document.write ('<nav id="footer" name="nav">\n');      
//	document.write ('<ul>\n');       
//	document.write ('<li><a href=""><img src="../img/off/reco_off.png"></a></li>\n');    
//	document.write ('<li><a href=""><img src="../img/on/act_on.png"></a></li>\n');   
//	document.write ('<li><a href=""><img src="../img/off/my_off.png"></a></li>\n'); 
//	document.write ('<li><a href=""><img src="../img/off/set_off.png"></a></li>\n'); 
//	document.write ('</ul>\n');
//	document.write ('</nav>\n');     
//}

$(document).ready(function(){
	$('#pagename').append("みんなのごはん")
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

//$(function(){
//	$('.user_photo').append("<img src="./img/foodphoto.png">");
//	if(){
//		$('.camera img').css("display", "block");
//		$('.user_photo img').css("display", "block");
//	}
//});


