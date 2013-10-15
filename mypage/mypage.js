$(document).ready(function(){
	$('.myname').html("名前");

	$('.followcount').append("30");
	$('.followercount').append("25");

	$('#myintro').append("鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者");
});

$(function(){
	$('a img').hover(function(){
		$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
	}, function(){
		if (!$(this).hasClass('current')) {
			$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
		}
	});
});