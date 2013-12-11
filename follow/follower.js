$(function(){
	$('#l_btn a').attr("href", "javascript:history.back();");
	$('#r_btn a').append($("<img>").attr("src", "./img/searchicon.png")).attr("href", "../search/index.html");
});

$(function(){
	
	screen_id = getUrlVars()["recipe_id"];

	App.getOwnProfile(function(myprofile){
		if(screen_id == null){
			for(var i=0; i<myprofile.followers.length; i++){
			//リストを追加
			$pic_img = $("<img/>").attr("src", "img/"+myprofile.followers[i].icon_name+".png");
			$pic_a = $("<a/>").attr("href", "").append($pic_img);
			$pic_li = $("<li/>").append($pic_a);
			$pic_ul = $("<ul/>").append($pic_li);
			$pic = $("<div/>").addClass("follow_pic").append($pic_ul);
			
			$account = $("<a/>").attr("href", "../log/index.html?recipe_id="+myprofile.followers[i].screen_id).addClass("account").append(myprofile.followers[i].screen_id);
			
			
			if(myprofile.followers[i].is_followed){
				$btn_img = $("<img/>").attr("src", "./img/follow3_off.png").addClass("off");
			}else{
				$btn_img = $("<img/>").attr("src", "./img/follow3_on.png").addClass("on");
			}
			/*
			if(myprofile.following.length == 0){
				$btn_img = $("<img/>").attr("src", "./img/follow3_on.png").addClass("on");
					}else if(myprofile[i].is_followed){
						$btn_img = $("<img/>").attr("src", "./img/follow3_off.png").addClass("off");
					}else{
						$btn_img = $("<img/>").attr("src", "./img/follow3_on.png").addClass("on");
			}
			*/
			
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
					screen_id = myprofile.followers[index].screen_id;
					App.setFollow(screen_id,function(id){　
					});
		    	} else if ($(this).hasClass("off")){
		    		$(this).addClass("on").removeClass("off");
		    		$(this).attr("src", "./img/follow3_on.png");
					var unindex = $(".toggleImage img").index(this);
					screen_id = myprofile.followers[unindex].screen_id;
					App.setUnfollow(screen_id,function(id){
					});
				}
			});
		}
		}else{	
			App.getProfile(screen_id, function(profile){
				for(var i=0; profile.followers.length; i++){
					//リストを追加
					$pic_img = $("<img/>").attr("src", "img/"+profile.followers[i].photo+".png");
					$pic_a = $("<a/>").attr("href", "").append($pic_img);
					$pic_li = $("<li/>").append($pic_a);
					$pic_ul = $("<ul/>").append($pic_li);
					$pic = $("<div/>").addClass("follow_pic").append($pic_ul);

					$account = $("<a/>").attr("href", "../log/index.html?recipe_id="+profile.followers[i].screen_id).addClass("account").append(profile.followers[i].screen_id);

					$btn_img = $("<img/>").attr("src", "./img/follow3_off.png").addClass("off");
					$btn_span = $("<span/>").addClass("toggleImage").append($btn_img);
					$btn_li = $("<li/>").append($btn_span);
					$btn_ul = $("<ul/>").append($btn_li);
					$btn = $("<div/>").addClass("follow_btn").append($btn_ul);

					$follow = $("<div/>").addClass("follow").append($pic).append($account).append($btn);

					$(".allcontents").append($follow);

				}

			});
		}
	});
	
});
/*
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
				var screen_id = (data.following[i].screen_id);
				App.setFollow("screen_id",function(){});
		        console.log(screen_id);
			});
		});
	});
});
*/