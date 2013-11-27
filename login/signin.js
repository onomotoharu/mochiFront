
var name;
var pass;

$(document).ready(function(){
	App.signIn("name","pass",function(json){
		console.log(json);
	});
});


