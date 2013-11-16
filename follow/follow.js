function header() {
  document.write ('<nav id="header" name="nav">\n');      
  document.write ('<ul>\n');       
  document.write ('<li id="back_btn"><a href="">＜</a></li>\n');    
  document.write ('<li id="pagename"></li>\n');   
  document.write ('<li id="header_r"><a href="../search/index.html">■</a></li>\n');
  document.write ('</ul>\n');
  document.write ('</nav>\n');  
}

$(document).ready(function(){
	$('#pagename').append("cheese!")
 });