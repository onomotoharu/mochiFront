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


(function() {

	var boxEl       = null;
	var boxSelectEl = null;

	function cacheDOMs () {

		boxEl      = document.getElementById('item1');
		
	};

	function setEvents () {

		boxEl.addEventListener("touchstart", function(e) {
			boxEl.className = "boxSelect";
		});
		boxEl.addEventListener("touchmove", function(e) {
			boxEl.className = "boxNonSelect";
		});
		boxEl.addEventListener("touchend", function(e) {
			boxEl.className = "boxSelect";
		});

	}

	document.addEventListener("DOMContentLoaded", function (e) {
		cacheDOMs();
		setEvents();
	}, false);
})();
