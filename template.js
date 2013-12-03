//get GET params
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i <hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


//$.base64
(function(e){var t={};var n=new function(){var e="utf";var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var n=t.split("");var i=[];for(var s=0;s<t.length;s++)i[t.charAt(s)]=s;this.encode=function(e,t){return o(t?f(e):c(e))};var o=function(e){var t=e.length%3;var r="";var i,s=0;if(t)for(i=3-t;i>0;i--)e[e.length]=0;for(i=0;i<e.length;i+=3){s=e[i]<<16|e[i+1]<<8|e[i+2];r+=n[s>>>18&63]+n[s>>>12&63]+n[s>>>6&63]+n[s&63]}if(t){t=3-t;r=r.substr(0,r.length-t);while(t--)r+="="}return r};this.decode=function(e,t){var n=u(e);return t?a(n):l(n)};var u=function(e){e=e.replace(/[^A-Za-z0-9\+\/]/g,"");var t=e.length%4;var n,r,s;var o=[];if(t)for(r=0;r<4-t;r++)e+="A";for(n=r=0;r<e.length;r+=4,n+=3){s=i[e.charAt(r)]<<18|i[e.charAt(r+1)]<<12|i[e.charAt(r+2)]<<6|i[e.charAt(r+3)];o[n]=s>>>16;o[n+1]=s>>>8&255;o[n+2]=s&255}if(t)o.length-=[0,0,2,1][t];return o};var a=function(e){return r.packUTF8(e)};var f=function(e){return r.unpackUTF8(e)};var l=function(e){return r.packChar(e)};var c=function(e){return r.unpackChar(e)}};var r=new function(){this.unpackUTF16=function(e){var t,n=[];for(t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n};this.unpackChar=function(e){var t=this.unpackUTF16(e);var n,r,i=[];for(r=n=0;n<t.length;n++){if(t[n]<=255)i[r++]=t[n];else{i[r++]=t[n]>>8;i[r++]=t[n]&255}}return i};this.packChar=this.packUTF16=function(e){var t,n="";for(t in e)n+=String.fromCharCode(e[t]);return n};this.unpackUTF8=function(e){return this.toUTF8(this.unpackUTF16(e))};this.packUTF8=function(e){return this.packUTF16(this.toUTF16(e))};this.toUTF8=function(e){var t=[];var n=0;var r,i,s;for(r=0;r<e.length;r++){s=e[r];if(s<=127)t[n++]=s;else if(s<=2047){t[n++]=192|s>>>6;t[n++]=128|s&63}else if(s<=65535){t[n++]=224|s>>>12;t[n++]=128|s>>>6&63;t[n++]=128|s&63}else{i=4;while(s>>6*i)i++;t[n++]=65280>>>i&255|s>>>6*--i;while(i--)t[n++]=128|s>>>6*i&63}}return t};this.toUTF16=function(e){var t=[];var n=0;var r,i;for(r=0;r<e.length;r++,n++){if(e[r]<=127)t[n]=e[r];else{if(e[r]>>5==6){t[n]=(e[r]&31)<<6|e[++r]&63}else if(e[r]>>4==14){t[n]=(e[r]&15)<<12|(e[++r]&63)<<6|e[++r]&63}else{i=1;while(e[r]&32>>>i)i++;t[n]=e[r]&31>>>i;while(i-->=0)t[n]=t[n]<<6^e[++r]&63}}}return t};this.URLencode=function(e){return e.replace(/([^a-zA-Z0-9_\-\.])/g,function(e,t){if(t==" ")return"+";var n=r.toUTF8([t.charCodeAt(0)]);var i="";for(var s in n){s=n[s].toString(16);if(s.length==1)s="0"+s;i+="%"+s}return i})};this.URLdecode=function(e){e=e.replace(/\+/g," ");e=e.replace(/%([a-fA-F0-9][a-fA-F0-9])/g,function(e,t){return String.fromCharCode(parseInt(t,16))});return this.packChar(this.toUTF16(this.unpackUTF16(e)))}};e.extend({base64:{encode:n.encode,decode:n.decode,codec:typeof atob=="function"?"builtin":"alternate"}});e.ajax=function(t){return function(n){var r=0;if(n.dataType&&n.dataType.match(/:b64/)){n.dataType=n.dataType.replace(":b64","");r=1}if(r){n.success=function(t){return function(n,r,i){n=e.base64.decode(n);t(n,r,i)}}(n.success||function(e,t,n){})}return t.apply(this,arguments)}}(e.ajax)})(jQuery)

//template
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
		async:false
	}).responseText;
}

 
/*=====================
	Auth
======================*/

CheeseController.prototype.signIn = function(screen_id,password,callback){
	url = "/sign_in";
	data = {"user": {"screen_id": screen_id, "password": password}};
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	localStorage.screen_id = screen_id;
	localStorage.api_token = response.api_token;	
	localStorage.api_token_secret = response.api_token_secret;
	this.isLoggedIn = true;
	if(callback!=null){callback(response);}
};

CheeseController.prototype.signOut = function(callback){
	url = "/sign_out";
	data = null
	type = "post";
	response = 	this._throwRequest(url,data,type);
	localStorage.clear();
	this.isLoggedIn = false;
	if(callback!=null){callback(response);}
}


CheeseController.prototype.checkAuth = function(){
	this.isLoggedIn = true;
}


/*=====================
	User
======================*/


CheeseController.prototype.createUser = function(screen_id,password,callback){
	url = "/users/create";
	data = {"user": {"screen_id": screen_id, "password": password, "password_confirmation": password}}	
	type = "post";
	response = this._throwRequest(url,data,type);
	if(callback!=null){callback(response);}
};

CheeseController.prototype.getOwnProfile = function(callback){
	url = "/users/"  + localStorage.screen_id + "/profile";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
}

CheeseController.prototype.getOwnBadges = function(callback){
	url = "/users/"  + localStorage.screen_id + "/badges";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
}

CheeseController.prototype.getOwnActivities = function(callback){
	url = "/users/"  + localStorage.screen_id + "/activities";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
}

CheeseController.prototype.setFollow = function(screen_id,callback){
	url = "/users/"  + screen_id + "/follow";
	data = null;
	type = "post";
	response = 	this._throwRequest(url,data,type);
	if(callback!=null){callback(response);}
}

CheeseController.prototype.setUnfollow = function(screen_id,callback){
	url = "/users/"  + screen_id + "/unfollow";
	data = null;
	type = "post";
	response = 	this._throwRequest(url,data,type) 
	if(callback!=null){callback(response);}
}
/*=====================
	Recommned
======================*/

CheeseController.prototype.getRecommend = function(callback){
	url = "/recommend/today";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
};



CheeseController.prototype.updateRecommend = function(callback){
	url = "/recommend/today/update";
	data = null;
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
};



/*=====================
	Activity
======================*/

CheeseController.prototype.getTimeline = function(callback){
	url = "/timeline";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
}

CheeseController.prototype.goodToActivity = function(activity_id,callback){
	url = "/activities/" + activity_id + "/good";
	data = null;
	type = "post";
	response = 	this._throwRequest(url,data,type);
	if(callback!=null){callback(response);}
}

CheeseController.prototype.sendCommentToActivity = function(activity_id,comment,callback){
	url = "/activities/" + activity_id + "/comment";
	data = {"comment" : comment};
	type = "post";
	response = 	this._throwRequest(url,data,type);
	if(callback!=null){callback(response);}
}

CheeseController.prototype.deleteActivity = function(activity_id,callback){
	url = "/activities/" + activity_id + "/delete";
	data = null;
	type = "post";
	response = this._throwRequest(url,data,type);
	if(callback!=null){callback(response);}
}


/*=====================
	Recipe
======================*/

CheeseController.prototype.sendMade = function(recipe_id,comment,callback){
	url = "/recipes/" + recipe_id + "/made";
	data = {"comment" : comment};
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
}

CheeseController.prototype.sendFavorite = function(recipe_id,callback){
	url = "/recipes/" + recipe_id + "/favorite"
	data = null;
	type = "post";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
}

CheeseController.prototype.getDetail = function(recipe_id,callback){
	url = "/recipes/" + recipe_id +  "/detail"
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
}

CheeseController.prototype.getSample = function(callback){
	url = "/recipes/sample";
	data = null;
	type = "get";
	response = 	$.parseJSON(this._throwRequest(url,data,type));
	if(callback!=null){callback(response);}
}

/*
||||||||||||||||||||||||||||||||||||||||||||||||||
*/



App = null;

$(function(){
	App = new CheeseController();

	// ## sample ##
	// App.signIn("ren","test",function(json){
	// 	console.log(json);
	// });

	// // App.deleteActivity(1,null)

<<<<<<< HEAD
	// App.updateRecommend(function(json){
	// 	console.log(json);
	// });
=======
	App.updateRecommend(function(json){
	});
>>>>>>> karimaster

})
