function footer() {
	document.write ('<nav id="footer" name="nav">\n');      
	document.write ('<ul>\n');       
	document.write ('<li><a href=""><img src="../img/off/reco_off.png"></a></li>\n');    
	document.write ('<li><a href=""><img src="../img/on/act_on.png"></a></li>\n');   
	document.write ('<li><a href=""><img src="../img/off/my_off.png"></a></li>\n'); 
	document.write ('<li><a href=""><img src="../img/off/set_off.png"></a></li>\n'); 
	document.write ('</ul>\n');
	document.write ('</nav>\n');     
}

$(document).ready(function(){
	$('#pagename').append("みんなのごはん")
});

$(function(){
	$('.hyouji_btn').click(function(){
		$('.hyouji_on').toggle();
		//return false;
		$('.hyouji_off').css("display", "none");
	});
	$('.com_btn').click(function(){
		$('.com_formsend').toggle();
		return false;
	});
});
