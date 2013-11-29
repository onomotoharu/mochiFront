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



/*
|||||||||||||||||||||||||||||||
        CheeseController
|||||||||||||||||||||||||||||||
*/
function CheeseController(){
	this.domain = "http://fmap.d.r3n.cc/api/v1";
	this.isLoggedIn = false;
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
		crossDomain: true,
		async:false
	}).responseText;
}

 
/*=====================
	Auth
======================*/

CheeseController.prototype.signIn = function(screen_id,password,callback){
	url = "/sign_in";
	data = {"user": {"screen_id": screen_id, "password": password}}
	type = "post";
	var response = $.parseJSON(this._throwRequest(url,data,type));
	localStorage.screen_id = screen_id;
	localStorage.api_token = response.api_token;	
	localStorage.api_token_secret = response.api_token_secret;
	this.isLoggedIn = true;
	callback(response);
};

CheeseController.prototype.signOut = function(callback){
	url = "/sign_out";
	data = null
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	localStorage.clear();
	this.isLoggedIn = false;
	callback(response);
}


CheeseController.prototype.checkAuth = function(){
	this.isLoggedIn = true;
}


/*=====================
	User
======================*/

CheeseController.prototype.userCreate = function(screen_id,password,callback){
	url = "/users/create";
	data = {"screen_id": screen_id, "password":"password"};
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
};

CheeseController.prototype.getOwnProfile = function(callback){
	url = "/users/"  + localStorage.screen_id + "/profile";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}

CheeseController.prototype.getOwnBadges = function(callback){
	url = "/users/"  + localStorage.screen_id + "/badges";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	response = $.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}

CheeseController.prototype.getOwnActivities = function(callback){
	url = "/users/"  + localStorage.screen_id + "/activities";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}

CheeseController.prototype.setFollow = function(screen_id,callback){
	url = "/users/"  + screen_id + "/follow";
	data = null;
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}

CheeseController.prototype.setUnfollow = function(screen_id,callback){
	url = "/users/"  + screen_id + "/unfollow";
	data = null;
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}


/*=====================
	Recommned
======================*/

CheeseController.prototype.getRecommend = function(callback){
	url = "/recommend/today";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
};


/*=====================
	Activity
======================*/

CheeseController.prototype.getTimeline = function(callback){
	url = "/timeline";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}

CheeseController.prototype.goodToActivity = function(activity_id,callback){
	url = "/activities/" + activity_id + "/good";
	data = {"activity_id": activity_id};
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}


/*=====================
	Recipe
======================*/

CheeseController.prototype.sendMade = function(recipe_id,callback){
	url = "/recipes/" + recipe_id + "/made";
	data = null;
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}

CheeseController.prototype.sendFavorite = function(recipe_id,callback){
	url = "/recipes/" + recipe_id + "/favorite"
	data = null;
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}

CheeseController.prototype.getDetail = function(recipe_id,callback){
	url = "/recipes/" + recipe_id +  "/detail"
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}

CheeseController.prototype.getSample = function(callback){
	url = "/recipes/sample";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	callback(response);
}


/*
||||||||||||||||||||||||||||||||||||||||||||||||||
*/


// App = null;

$(function(){
	App = new CheeseController();

	// ## sample ##
	// App.signIn("ren","test",function(json){
	// 	console.log(json);
	// });

	// App.getRecommend(function(json){

	// });

})
