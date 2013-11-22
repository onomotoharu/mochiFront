$(document).ready(function(){
	$('#pagename').append("みんなのごはん");
});

$(function(){
  var commentObj = {
    userId : "namaedesu",
    comment : ""
  };

	$('#l_btn a').attr("href", "./index.html");

	$('input').focus(function(){
		$('.allcontents').css("margin", "45px 0 0 0 ");
		$('.hyouji_btn').click(function(){
			$('#header').css("position","fixed").css("top", "0");
		});
	});

  // コメントを投稿
  $(".send").click(function(userId,comment) {

    var newComment = $("<div/>").appendTo('div.comment').addClass('come_com');

    newComment.append($("<span/>").text(commentObj.userId).addClass('user_id'));
    commentObj.comment = $(".com_input").val();
    newComment.append($("<span/>").text(commentObj.comment).addClass('com_txt'));

  });

});


