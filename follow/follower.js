$(function(){
	$('#r_btn a').append($("<img>").attr("src", "./img/searchicon.png"))
				 .attr("href", "../search/index.html")
});


$(function(){
	App = new CheeseController();
	// ## sample ##
	App.signIn("ren","test",function(json){
	// 	console.log(json);
	});

	App.getOwnProfile(function(data){	
	console.log(data);
	for(var i=0; i<data.followers.length; i++){
		//リストを追加
		$(".allcontents").append('<div class="follow"><div class="follow_pic"><ul><li><a href=""></a></li></ul></div><a class="account"></a><div class="follow_btn"></div></div>');
		}
		//アカウント名を追加
	    $("a.account").each(function(i){
	        $(this).append(data.followers[i].screen_id);
	    });
		//ユーザーの画像を挿入
		$(".follow_pic ul li a").each(function(i){
	    	$(this).append('<img src="img/'+data.followers[i].photo+'.png">');
	    });
	    //フォローボタンを追加
		$(".follow_btn").each(function(i){
	    	$(this).append('<ul><li><span class="toggleImage"><img src="img/follow3_on.png"></span></li></ul');

			$(".toggleImage").click(function(){
		    	var  screen_id = $("a.account").text();
		    	// var image = $(".follow_pic").text();
		        console.log(screen_id);
		        App.setFollow(screen_id,function(){ });
		        
			});
		});
	});
});

	