<<<<<<< HEAD
//function footer() {
//  document.write ('<nav id="footer" name="nav">\n');      
//  document.write ('<ul>\n');       
//  document.write ('<li><a href=""><img src="../img/off/reco_off.png"></a></li>\n');    
//  document.write ('<li><a href=""><img src="../img/off/act_off.png"></a></li>\n');   
//  document.write ('<li><a href=""><img src="../img/off/my_off.png"></a></li>\n'); 
//  document.write ('<li><a href=""><img src="../img/on/set_on.png"></a></li>\n'); 
//  document.write ('</ul>\n');
//  document.write ('</nav>\n');     
//}
=======
>>>>>>> setup

$(document).ready(function(){
  $('#pagename').append("設定")
});

function logOutEnter(){
	myRet = confirm("cheeseをログアウトしますか？");
	if(myRet == true){
		App.signOut(function(logout){
			console.log(logout);
			location.href = '../login/signin.html';
		});
	}
}