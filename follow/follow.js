$(function(){
	$('#r_btn a').append($("<img>").attr("src", "./img/searchicon.png"))
				 .attr("href", "../search/index.html")
});

	




$(function (){
var data = $.ajax({url: "sample.json",async: false});
eval("var data="+data.responseText)
 　$.ajax({
  type:'GET',
  url:'sample.json',
  dataType:'json',
  success: function(data){
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
  error: function(jqXHR, textStatus, errorThrown){
      alert(textStatus+": "+errorThrown);
  },
  //beforeSend: authorizationHeader
});
});
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
            