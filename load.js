// JavaScript Document
/*
$('head').append(
    '<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>'
);
jQuery.event.add(window,"load",function() {
    var pageH = $("#container").height();
    $("#fade").css("height", pageH).delay(700).fadeOut(1000);
    $("#loader").delay(500).fadeOut(300);
    $("#container").css("display", "block");
});
*/

$(function() {
	$("#r_btn a").click(function(){
		$scope.update = function(){
    var url = domain +  "/recommend/today/update";
    jQuery("#verticaly a").css('background-image', 'url(./img/cheeseload.gif)');;        
    $http.get(url).
    success(function(data){
        $scope.recipes = data;
        jQuery("#verticaly a").css('background-image', 'url(./img/change.png)');;
    });
		}
    });
  });
