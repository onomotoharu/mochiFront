$(document).ready(function(){
	$('#pagename').append("マイページ");
		// マイページメニュー切替

	$('#nav_my img').attr("src", "../img/on/my_on.png");

	$('#log a').hover(function(){
		$('#log a img').attr('src', $('#log a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#log a img').hasClass('current')) {
			$('#log a img').attr('src', $('#log a img').attr('src').replace('_on', '_off'));
		}
	});


	$('#graph a').hover(function(){
		$('#graph a img').attr('src', $('#graph a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#graph a img').hasClass('current')) {
			$('#graph a img').attr('src', $('#graph a img').attr('src').replace('_on', '_off'));
		}
	});

	$('#fav a').hover(function(){
		$('#fav a img').attr('src', $('#fav a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#fav a img').hasClass('current')) {
			$('#fav a img').attr('src', $('#fav a img').attr('src').replace('_on', '_off'));
		}
	});

	$('#badge a').hover(function(){
		$('#badge a img').attr('src', $('#badge a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#badge a img').hasClass('current')) {
			$('#badge a img').attr('src', $('#badge a img').attr('src').replace('_on', '_off'));
		}
	});
});


$(function(){
	App = new CheeseController();
		App.signIn("ren","test",function(json){
		console.log(json);
	});

	App.getOwnProfile(function(myprofile){
	// プロフィール部分DOM操作
		$('.myname').html(myprofile.screen_id);
		$('.followcount').append(myprofile.following.length);
		$('.followercount').append(myprofile.followers.length);
		$('#myphoto img').attr("src",myprofile.icon_name);
		$('#myintro').append(myprofile.bio);
	});


	App.getOwnBadges(function(medals){

	//JSON.parse(medals)[0].created_at.split(" ")[0]
	// 	debugger;
	// 	$.each(medals,function(i,medal){
	// 		alert(medal.title);
	// 	});



	for(var i=0 ; i < medals.length ; i++){
	  //リストを追加
	  $(".tab_contents").append('<ul><li><div class="medalimg"><a class="zoom" href="" title=""></a></div><div id="coment"><div class="medallog"></div><div class ="getdate"></div><div class="medalintro"></div></div></li></ul>');

	    };
	  //メダルの画像とタイトルを挿入
	  $(".medalimg a").each(function(i){
	  $(this).append('<img src="medal_img/'+medals[i].picture_name+'">');
// 	  	$(this).attr("title", "medals[i].description.split(" ")[0]");
		});

	  //バッジ名を挿入
	  $(".medallog").each(function(i){
	  $(this).append('<p class="b">'+medals[i].title+'</p>');
	  });

	  //メダル取得の日付を挿入
 	  $(".getdate").each(function(i){
	  $(this).append(medals[i].created_at.split(" ")[0]);
	  });

	　//バッジ名を追加
 	  $(".medalintro").each(function(i){
	  $(this).append(medals[i].description);

	  });
	});

});



