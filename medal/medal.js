$(function(){

App = new CheeseController();

App.signIn("ren","test",function(json){
	console.log(json);
});

App.getOwnBadges(function(medals){	
	console.log(JSON.parse(medals));
	
	//JSON.parse(medals)[0].created_at.split(" ")[0]
	
	medal = JSON.parse(medals);

// 	debugger;
	for(var i=0 ; i<medals.length ; i++){	
	  //リストを追加
	  $("#medalimg").append('<a class="zoom" href="" title=""></a></div><div id="coment"><div class="medallog"></div><div id ="getdate"></div><div class="medalintro"></div>');	  
	  }
	  //メダルの画像とタイトルを挿入
	  $("#medalimg a").each(function(i){
	  	$(this).append('<img src="medal_img/'+medals[i].picture_name+'">')
		.attr('title', 'medal[i].description.split(" ")[0]');
	  });
	  //バッジ名を挿入
	  $(".medallog").append('<p class="b">'+medals[i].title+'</p>');
	  //メダル取得の日付を挿入
	  $("#getdate").append(medals[i].created_at.split(" ")[0]); 
	　//バッジ名を追加 
	  $(".medalintro").append(medals[i].description);




//.each(function(i){


// $(function (){
// var data = $.ajax({url: "sample.json",async: false});
// eval("var data="+data.responseText)
//  　$.ajax({
//   type:'GET',
//   url:'sample.json',
//   dataType:'json',
//   success: function(data){
//   console.log(data[1].username);
//    for(var i=0; i<2; i++){
// 	  
//   error: function(jqXHR, textStatus, errorThrown){
//       alert(textStatus+": "+errorThrown);
//   },
//   //beforeSend: authorizationHeader
// });
// });
// 
//  $(function(){
// 	 			//リストを追加
// 	  			$(".allcontents").append('<div class="follow"><div class="follow_pic"></div>                                                 <a class="account"></a><div class="follow_btn"></div></div>');
//                 //ユーザーの画像を挿入
//            $(".follow_pic").append('<ul><li><a href=""><img src="img/mob1.png"></a></li></ul>');
//                 //アカウント名を追加 
//            $("a.account").append("ONOmotoharu");
//                 //フォローボタンを追加
//              $(".follow_btn").append('<ul><li><span class="toggleImage"><img src="img/follow3_on.png"></span></li></ul');
// 
// });
            