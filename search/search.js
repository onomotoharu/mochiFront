$(function(){

	$('.cheese a').hover(function(){
		$('.cheese a img').attr('src', $('.cheese a img').attr('src').replace('_off', '_on'));}, function(){

		if (!$('.cheese a img').hasClass('current')) {
			$('.cheese a img').attr('src', $('.cheese a img').attr('src').replace('_on', '_off'));
		}
	});

	$('.twitter a').hover(function(){
		$('.twitter a img').attr('src', $('.twitter a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.twitter a img').hasClass('current')) {
			$('.twitter a img').attr('src', $('.twitter a img').attr('src').replace('_on', '_off'));
		}
	});

	$('.facebook a').hover(function(){
		$('.facebook a img').attr('src', $('.facebook a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.facebook a img').hasClass('current')) {
			$('.facebook a img').attr('src', $('.facebook a img').attr('src').replace('_on', '_off'));
		}
	});
	
});

//友達検索
/*
$(function(){
			App.search(function(data){
			$("#searchBtn1").click(function(){
				var username = $('#keywords1').val();
				for(var j=0; j<data.length; j++){
				if(username == data[j].icon_name){
					
			$pic_img = $("<img/>").attr("src", "img/"+username+".png");
			$pic_a = $("<a/>").attr("href", "").append($pic_img);
			$pic_li = $("<li/>").append($pic_a);
			$pic_ul = $("<ul/>").append($pic_li);
			$pic = $("<div/>").addClass("follow_pic").append($pic_ul);

			$account = $("<a/>").addClass("account").append(data[i].screen_id);
			
			if(data[i].is_followed){
				$btn_img = $("<img/>").attr("src", "./img/follow3_off.png").addClass("off");
				}else{
					$btn_img = $("<img/>").attr("src", "./img/follow3_on.png").addClass("on");
				}
			$btn_span = $("<span/>").addClass("toggleImage").append($btn_img);
			$btn_li = $("<li/>").append($btn_span);
			$btn_ul = $("<ul/>").append($btn_li);
			$btn = $("<div/>").addClass("follow_btn").append($btn_ul);

			$follow = $("<div/>").addClass("follow").append($pic).append($account).append($btn);

			$(".subcontent").append($follow);
				}
				}
			});
			});
			});
*/

$(function(){
	App.searchFriends(function(data){

		for(var i=0; i<data.length; i++){
			//リストを追加
			$pic_img = $("<img/>").attr("src", "img/"+data[i].icon_name+".png");
			$pic_a = $("<a/>").attr("href", "").append($pic_img);
			$pic_li = $("<li/>").append($pic_a);
			$pic_ul = $("<ul/>").append($pic_li);
			$pic = $("<div/>").addClass("follow_pic").append($pic_ul);

			$account = $("<a/>").addClass("account").append(data[i].screen_id);
			
			if(data[i].is_followed){
				$btn_img = $("<img/>").attr("src", "./img/follow3_off.png").addClass("off");
				}else{
					$btn_img = $("<img/>").attr("src", "./img/follow3_on.png").addClass("on");
				}
			/*
			for(var j=0; j<data.length; j++){
				if(data[i].screen_id == data[j].screen_id){
					$btn_img = $("<img/>").attr("src", "./img/follow3_off.png").addClass("off");
				}else{
					$btn_img = $("<img/>").attr("src", "./img/follow3_on.png").addClass("on");
				}
			}*/
			$btn_span = $("<span/>").addClass("toggleImage").append($btn_img);
			$btn_li = $("<li/>").append($btn_span);
			$btn_ul = $("<ul/>").append($btn_li);
			$btn = $("<div/>").addClass("follow_btn").append($btn_ul);

			$follow = $("<div/>").addClass("follow").append($pic).append($account).append($btn);

			$(".subcontent").append($follow);
			}
			
			

			//クリックイベント
			$(".toggleImage img").click(function(){
				if($(this).hasClass("on")){
					$(this).addClass("off").removeClass("on");
					$(this).attr("src", "./img/follow3_off.png");
					alert("フォローするよ");
					var index = $(".toggleImage img").index(this);
					screen_id = data[index].screen_id;
					App.setFollow(screen_id,function(id){
					});
		    	} else if ($(this).hasClass("off")){
		    		$(this).addClass("on").removeClass("off");
		    		$(this).attr("src", "./img/follow3_on.png");
					alert("フォロー解除だよ");
					var index = $(".toggleImage img").index(this);
					screen_id = data[index].screen_id;
					App.setUnfollow(screen_id,function(id){
					});
				}
			});
	});
});
