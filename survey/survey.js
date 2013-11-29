
//各料理を選択

jQuery(function(){

	
	$(".box").click(function() {
    if($(this).hasClass('box')){
      $(this).addClass("box_on").removeClass('box');
    } 
    else if($(this).hasClass('box_on')) {
      $(this).addClass("box").removeClass('box_on');
       
    }

    alert("クリックされました！"); 
//boxがクリックされたらデータ送信
　 　　App = new CheeseController();
　　　　App.signIn("ren","test",function(json){
        console.log(json);
  　　});
   
    App.sendMade(recipe_id,null);
　　　　console.log(recipe_id);  
  　　
　　　　});
　　

});


$(function(){
   $('#r_btn a').append("次へ")
  .attr("href", "../recommend/index.html")
})

$(document).ready(function(){
  
  // ページを開いたらデータを取得
  App = new CheeseController();

  App.signIn("ren","test",function(json){
        console.log(json);
  });

  App.getSample(function(suvey){
     console.log(survey);
  //$
　　});

});


