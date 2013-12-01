$(document).ready(function(){

	$('#nav_set img').attr("src", "../img/on/set_on.png");

	App = new CheeseController();

	App.signIn("ren","test",function(json){
	 	console.log(json);
	});

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