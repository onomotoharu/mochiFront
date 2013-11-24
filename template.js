function header() {
	document.write ('<nav id="header" name="nav">\n');      
	document.write ('<ul>\n');       
	document.write ('<li id="l_btn"><a href=""><img src="../img/back.png"></a></li>\n');    
	document.write ('<li id="pagename"><img src="../img/h_logo.png" height="20" width="69"></li>\n');   
	document.write ('<li id="r_btn"><a href=""></a></li>\n');
	document.write ('</ul>\n');
	document.write ('</nav>\n');  
}

function footer() {
	document.write ('<nav id="footer" name="nav">\n');      
	document.write ('<ul>\n');       
	document.write ('<li id="nav_reco"><a href="../recommend/index.html"><img src="../img/off/reco_off.png"></a></li>\n');    
	document.write ('<li id="nav_act"><a href="../activity/index.html"><img src="../img/off/act_off.png"></a></li>\n');   
	document.write ('<li id="nav_my"><a href="../log/index.html"><img src="../img/off/my_off.png"></a></li>\n'); 
	document.write ('<li id="nav_set"><a href="../setup/index.html"><img src="../img/off/set_off.png"></a></li>\n'); 
	document.write ('</ul>\n');
	document.write ('</nav>\n');     
}



//
function CheeseController(){
	this.domain = "https://fmap.d.r3n.cc/api/v1";
}


CheeseController.prototype._authorizationHeader = function(xhr) {
	var credentials = $.base64.encode(localStorage.api_token + ":" + localStorage.api_token_secret);
	xhr.setRequestHeader("Authorization", "Basic " + credentials);
}

CheeseController.prototype._throwRequest = function(url,data,type){
	return $.ajax({
		type: type,
		data: data,
		url: this.domain + url,
		beforeSend: this._authorizationHeader,
		async:false
	}).responseText;
}

//sign_in
CheeseController.prototype.signIn = function(screen_id,password,callback){
	url = "/sign_in";
	data = {"user": {"screen_id": screen_id, "password": password}}
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	localStorage.api_token = response.api_token;
	localStorage.api_token_secret = response.api_token_secret;
	callback(response);
};

//sign_out
CheeseController.prototype.signOut = function(callback){
	url = "/sign_out";
	data = null
	type = "post";
	response = this._throwRequest(url,data,type,callback);
	// localStorage.api_token.clear();
	// localStorage.api_token_secret.clear();
	callback(response);
}

CheeseController.prototype.recommend = function(callback){
	url = "/users/ren/activities	";
	data = null;
	type = "get";
	response = this._throwRequest(url,data,type,callback);
	callback(response);
};


$(function(){
	$('#l_btn a').attr("href", "javascript:history.back();");
	App = new CheeseController();
	
	App.recommend(function(data){
		console.log(JSON.stringify(data,null,"	"));
	});

	// App.signIn("ren","test",function(data){
	// 	console.log(JSON.stringify(data,null,"	"));
	// });
})





// //return boolean
// CheeseController.prototype.isLoggedIn? = function(){
// 	return (localStorage.api_token != null && localStorage.api_token_secret != null);
// };

// CheeseController.prototype.authorizationHeader = function(xhr) {
//     var credentials = $.base64.encode(localStorage.api_token+":"+localStorage.api_token_secret);
//      xhr.setRequestHeader("Authorization", "Basic " + credentials);
// }


// //return json
// CheeseController.prototype.userCreate = function(args){

// };


//args => {"screen_id": "ren", "password": "test"}
//return json
// CheeseController.prototype.signIn = function(args){
// 	$.ajax({
// 		type:"POST"
// 		url: this.domain + "/sign_in",
// 		success: function(jsontext){
// 			json = $.parseJSON(jsontext)
// 			alert(json.api_token);
// 		},
// 		error: function(jqXHR, textStatus, errorThrown){
// 			alert(textStatus+": "+errorThrown);
// 		},
// 			beforeSend: authorizationHeader
// 	});
// };

// CheeseController.prototype.getRecommendToday = function(){

// 	$.ajax({
// 		type:”GET”
// 		url: "https://fmap.d.r3n.cc/api/v1/timeline/",
// 		success: function(json){
// 			$(“h1”).text = json.midasi
// 		},
// 		error: function(jqXHR, textStatus, errorThrown){
// 			alert(textStatus+": "+errorThrown);
// 		},
// 			beforeSend: authorizationHeader
// 	});

// };









