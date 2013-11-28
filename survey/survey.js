//各料理を選択
jQuery(function(){

	
	$(".box").click(function() {
    if($(this).hasClass('box')){
      $(this).addClass("box_on").removeClass('box');
    } else if($(this).hasClass('box_on')) {
      $(this).addClass("box").removeClass('box_on');
       }

    alert("クリックされました！"); 


//box_onの配列
    var recipe_id = [item1,item2,item3,item4,item5,item6,item7,item8];
    console.log(recipe_id);  

//データ送信
    App = new CheeseController();
    
    App.sendMade(recipe_id,null);
    console.log(recipe_id);  




  });





});

$(function(){
   $('#r_btn a').append("次へ")
  .attr("href", "../recommend/index.html")


  App = new CheeseController();

  // 
  App.signIn("ren","test",function(json){
     console.log(json);
    });

  App.getDetail(function(recipe_id){
     console.log(recipe_id);


  });
})

