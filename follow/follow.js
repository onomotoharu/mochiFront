$(function(){
	$('#r_btn a').append($("<img>").attr("src", "./img/searchicon.png"))
				 .attr("href", "../search/index.html")
<<<<<<< HEAD
<<<<<<< HEAD
});

=======
})

/*
>>>>>>> origin/master-hirayama
var data=[
{"username":"tomomi","userimg":"mob1"},
{"username":"tommy","userimg":"mob2"},
{"username":"becchi","userimg":"mob3"},
{"username":"ando","userimg":"mob4"}
]
*/

App = null;

$(function(){

	App = new CheeseController();
	// ## sample ##
	App.signIn("ren","test",function(json){
	// 	console.log(json);
	});

	App.getOwnProfile(function(data){	

		console.log(data);
		for(var i=0; i<data.following.length; i++){
			//リストを追加
			$(".allcontents").append('<div class="follow"><div class="follow_pic"><ul><li><a href=""></a></li></ul></div><a class="account"></a><div class="follow_btn"></div></div>');
		}
			
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
	        	$(this).append('<ul><li><span class="toggleImage"><img src="img/follow3_off.png"></span></li></ul');
				});

	});
			$(".toggleImage").click(function(){
				App.setFollow("screen_id",function(data){
					$(".btn_login").click(function(){
					var screen_id = data.followers[i].screen_id;
					console.log(screen_id);
				});
				});
			});
});





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
});

	




$(function (){
var data = $.ajax({url: "sample.json",async: false});
eval("var data="+data.responseText)
>>>>>>> comment_iine
 　$.ajax({
  type:'GET',
  url:'sample.json',
  dataType:'json',
  success: function(data){
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
>>>>>>> comment_iine
  error: function(jqXHR, textStatus, errorThrown){
      alert(textStatus+": "+errorThrown);
  },
  //beforeSend: authorizationHeader
});
});
<<<<<<< HEAD

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
            