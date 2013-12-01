// $(function() {
// 	$("#item1").css({
// 	opacity: '0.8',
// 	background: '#000',
// 	zIndex: '1'
// 	});
// 	$("#item1").click(function() {
// 		$("").css('display', 'block');
// 	});
// 	$("#item1").click(function() {
// 		$("#item1").css('display', 'none');
// 	});
// });
$(function(){
	$('#r_btn a').append("次へ")
				 .attr("href", "../recommend/index.html")
})

(function() {

	var boxEl       = null;
	var boxSelectEl = null;

	function cacheDOMs () {

		boxEl      = document.getElementById('item1');
		
	};

	function setEvents () {

		boxEl.addEventListener("touchstart", function(e) {
			if(boxEl.className == "box" || boxEl.className == "boxNonSelect") {
				boxEl.className = "boxSelect";
			} else {
				boxEl.className = "boxNonSelect";
			}
		});
		// boxEl.addEventListener("touchmove", function(e) {

		// });
		// boxEl.addEventListener("touchend", function(e) {

		// });
	}

	document.addEventListener("DOMContentLoaded", function (e) {
		cacheDOMs();
		setEvents();
	}, false);
})();
