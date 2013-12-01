$(function(){

App = new CheeseController();

App.signIn("ren","test",function(json){
	console.log(json);
});

App.getOwnBadges(function(medals){	
	console.log(medals);
	
	//JSON.parse(medals)[0].created_at.split(" ")[0]
	


// 	debugger;

// 	$.each(medals,function(i,medal){
// 	
// 		alert(medal.title);
// 	});
// 	
	
	
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

