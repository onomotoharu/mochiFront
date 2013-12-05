$(document).ready(function(){
	$('#nav_set img').attr("src", "../img/on/set_on.png");
});

function logOutEnter(){
	myRet = confirm("cheeseをログアウトしますか？");
	if(myRet == true){
		App.signOut(function(logout){
			console.log(logout);
		});
	};
};