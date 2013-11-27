//各料理を選択
jQuery(function(){

	
	$(".box").click(function() {
    if($(this).hasClass('box')){
      $(this).addClass("box_on").removeClass('box');
    } else if($(this).hasClass('box_on')) {
      $(this).addClass("box").removeClass('box_on');
       }
  });
　　$(function(){
  $('#r_btn a').append("次へ")
         .attr("href", "../recommend/index.html")

         
})
});

