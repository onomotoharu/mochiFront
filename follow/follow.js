$(function(){
	$('#l_btn a').attr("href", "javascript:history.back();");
	$('#r_btn a').append($("<img>").attr("src", "./img/searchicon.png")).attr("href", "../search/index.html");
});

/*

var data=[
{"username":"tomomi","userimg":"mob1"},
{"username":"tommy","userimg":"mob2"},
{"username":"becchi","userimg":"mob3"},
{"username":"ando","userimg":"mob4"}
]
*/
$(function(){
	App.getOwnProfile(function(data){	

		for(var i=0; i<data.following.length; i++){
			//リストを追加
			$pic_img = $("<img/>").attr("src", "img/"+data.following[i].photo+".png");
			$pic_a = $("<a/>").attr("href", "").append($pic_img);
			$pic_li = $("<li/>").append($pic_a);
			$pic_ul = $("<ul/>").append($pic_li);
			$pic = $("<div/>").addClass("follow_pic").append($pic_ul);

			$account = $("<a/>").addClass("account").append(data.following[i].screen_id);

			$btn_img = $("<img/>").attr("src", "./img/follow3_off.png").addClass("off");
			$btn_span = $("<span/>").addClass("toggleImage").append($btn_img);
			$btn_li = $("<li/>").append($btn_span);
			$btn_ul = $("<ul/>").append($btn_li);
			$btn = $("<div/>").addClass("follow_btn").append($btn_ul);

			$follow = $("<div/>").addClass("follow").append($pic).append($account).append($btn);

			$(".allcontents").append($follow);

			//クリックイベント
			$(".toggleImage img").click(function(){
				if($(this).hasClass("on")){
					$(this).addClass("off").removeClass("on");
					$(this).attr("src", "./img/follow3_off.png");
					var index = $(".toggleImage img").index(this);　
					screen_id = data.following[index].screen_id;
					App.setFollow(screen_id,function(id){
					});
		    	} else if ($(this).hasClass("off")){
		    		$(this).addClass("on").removeClass("off");
		    		$(this).attr("src", "./img/follow3_on.png");
					var index = $(".toggleImage img").index(this);
					screen_id = data.following[index].screen_id;
					App.setUnfollow(screen_id,function(id){
					});
				}
			});
		}
	});
});

/*
App = null;

$(function(){

	App = new CheeseController();
<<<<<<< HEAD
	App.getOwnProfile(function(data){
=======
	// ## sample ##
	App.signIn("ren","test",function(json){
	// 	console.log(json);
	});

	App.getOwnProfile(function(data){	
	console.log(data);
>>>>>>> debug_hirayama

		for(var i=0; i<data.following.length; i++){
			//リストを追加
			$(".allcontents").append('<div class="follow"><div class="follow_pic"><ul><li><a href=""></a></li></ul></div><a class="account"></a><div class="follow_btn"></div></div>');
<<<<<<< HEAD
		}

=======
			
>>>>>>> debug_hirayama
			//アカウント名を追加
		    $("a.account").each(function(i){
		        $(this).append(data.following[i].screen_id);
		    });
		  	//ユーザーの画像を挿入
		  	$(".follow_pic ul li a").each(function(i){
	        	$(this).append('<img src="img/'+data.following[i].photo+'.png">');
	    	});
		  	//フォローボタンを追加
		   	$(".follow_btn").each(function(i){
	        	$(this).append('<ul><li><span class="toggleImage"><img src="img/follow3_off.png"></span></li></ul>');
				});
			$(".toggleImage").click(function(){
			//	var img_url =$(".toggleImage img").attr("src");
			//	var img_off = "img/follow3_off.png"
			//	var img_on = "img/follow3_on.png";
			//	if($(img_url == img_off)){
			var screen_id = (data.following[i]);
			App.setFollow(screen_id,function(data){
				console.log(data);
			});
		    
		//} else if($(img_url == img_on)){
			var screen_id = (data.followers[i]);
			App.setUnfollow(screen_id,function(data){
				console.log(data);
			});
		//}
				});
	}
				});
});

*/

//$(".followcount").append("ああああ");

//  今、logのindex.htmlのカウントを増やしたい。
// →followのfollow.jsをindex.htmlで呼んで、
// followcountにdeta.following.lengthをappendしてるんだけどね（54行目）
// うまくいかない。←いまここ。

/*
$(function(){
	for(var i=0; i<data.length; i++){
	 			 //リストを追加
	  $(".allcontents").append('<div class="follow"><div class="follow_pic"><ul><li><a href=""></a></li></ul></div>                                                 <a class="account"></a><div class="follow_btn"></div></div>');
	}
	   //アカウント名を追加
    $("a.account").each(function(i){
        $(this).append(data[i].username);
    });
	  //ユーザーの画像を挿入
	  $(".follow_pic ul li a").each(function(i){
        $(this).append('<img src="img/'+data[i].userimg+'.png">');
    });
	  //フォローボタンを追加
	   $(".follow_btn").each(function(i){
        $(this).append('<ul><li><span class="toggleImage"><img src="img/follow3_off.png"></span></li></ul');
    });

});
/*
$(function (){
=======
=======
>>>>>>> origin/profile_setup
});






$(function (){
var data = $.ajax({url: "sample.json",async: false});
eval("var data="+data.responseText)
<<<<<<< HEAD
>>>>>>> comment_iine
=======
>>>>>>> origin/profile_setup
 　$.ajax({
  type:'GET',
  url:'sample.json',
  dataType:'json',
  success: function(data){
<<<<<<< HEAD
<<<<<<< HEAD
  for(var i in data){
	   console.log(data[1].username);
	  //リストを追加
	  $(".allcontents").append('<div class="follow"><div class="follow_pic"><ul><li><a href=""></a></li></ul></div>                                                 <a class="account"></a><div class="follow_btn"></div></div>');
	   //アカウント名を追加
	  $("a.account").append(data[i].username);
	  //ユーザーの画像を挿入
	   $(".follow_pic ul li a").append('<img src="img/'+data[i].userimg+'.png">');

	  //フォローボタンを追加
	  $(".follow_btn").append('<ul><li><span class="toggleImage"><img src="img/follow3_on.png"></span></li></ul');
  }},
=======
=======
>>>>>>> origin/profile_setup
  console.log(data[1].username);
   for(var i=0; i<2; i++){

	  //リストを追加
	  $(".allcontents").append('<div class="follow"><div class="follow_pic"><ul><li><a href=""></a></li></ul></div>                                                 <a class="account"></a><div class="follow_btn"></div></div>');
	   //アカウント名を追加
	  $("a.account").append(json[i].username);
	  //ユーザーの画像を挿入
	   $(".follow_pic ul li a").append('<img src="img/'+json[i].userimg+'.png">');

	  //フォローボタンを追加
	  $(".follow_btn").append('<ul><li><span class="toggleImage"><img src="img/follow3_on.png"></span></li></ul');
   }},
<<<<<<< HEAD
>>>>>>> comment_iine
=======
>>>>>>> origin/profile_setup
  error: function(jqXHR, textStatus, errorThrown){
      alert(textStatus+": "+errorThrown);
  },
  //beforeSend: authorizationHeader
});
});


function jsonParser(data) {
        var message = data.errorCode;
        message = message + '<br/>';
        message = message + data.errorMessage;
        return message;
    }
*/

/*
 $(function(){
	 			//リストを追加
	  			$(".allcontents").append('<div class="follow"><div class="follow_pic"></div>                                                 <a class="account"></a><div class="follow_btn"></div></div>');
                //ユーザーの画像を挿入
           $(".follow_pic").append('<ul><li><a href=""><img src="img/mob1.png"></a></li></ul>');
                //アカウント名を追加
           $("a.account").append("ONOmotoharu");
                //フォローボタンを追加
             $(".follow_btn").append('<ul><li><span class="toggleImage"><img src="img/follow3_on.png"></span></li></ul');

});*/
