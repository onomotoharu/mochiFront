$(function(){
	$('#r_btn a').append($("<img>").attr("src", "./img/searchicon.png"))
				 .attr("href", "../search/index.html")
})


var data=[
{"username":"tomomi","userimg":"mob1"},
{"username":"tommy","userimg":"mob2"},
{"username":"becchi","userimg":"mob3"},
{"username":"ando","userimg":"mob4"}
]

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
