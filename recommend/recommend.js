

$(document).ready(function(){
	$('#pagename').append("cheese!")
 });

$(function(){
  $('#nav_reco img').attr("src", "../img/on/reco_on.png");
});

function footer() {
	document.write ('<nav id="footer" name="nav">\n');      
	document.write ('<ul>\n');       
	document.write ('<li id="nav_reco"><a href=""><img src="../img/off/reco_off.png"></a></li>\n');    
	document.write ('<li id="nav_act"><a href=""><img src="../img/off/act_off.png"></a></li>\n');   
	document.write ('<li id="nav_my"><a href=""><img src="../img/off/my_off.png"></a></li>\n'); 
	document.write ('<li id="nav_set"><a href=""><img src="../img/off/set_off.png"></a></li>\n'); 
	document.write ('</ul>\n');
	document.write ('</nav>\n');     
}
