$(function() {
	$("#item1").css({
	opacity: '0.6',
	display: 'none',
	width: '100%',
	height: '100%',
	background: '#000',
	zIndex: '1'
	});
	$("#item1").click(function() {
		$("#item1").css('display', 'block');
	});
	$("#item1").click(function() {
		$("#item1").css('display', 'none');
	});
});
