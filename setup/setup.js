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
	};
};