$(document).ready(function(){
	$('#pagename').append("cheese!")

	$('.myname').html("名前");

	$('.followcount').append("30");
	$('.followercount').append("25");

	$('#myintro').append("鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者鶴川民のししゃも信者");
});

$(function(){
  $('#nav_my img').attr("src", "../img/on/my_on.png");
});


$(function(){

	$('.list a').hover(function(){
		$('.list a img').attr('src', $('.list a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.list a img').hasClass('current')) {
			$('.list a img').attr('src', $('.list a img').attr('src').replace('_on', '_off'));
		}
	});

	$('.graph a').hover(function(){
		$('.graph a img').attr('src', $('.graph a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.graph a img').hasClass('current')) {
			$('.graph a img').attr('src', $('.graph a img').attr('src').replace('_on', '_off'));
		}
	});

	$('.fav a').hover(function(){
		$('.fav a img').attr('src', $('.fav a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.fav a img').hasClass('current')) {
			$('.fav a img').attr('src', $('.fav a img').attr('src').replace('_on', '_off'));
		}
	});
	
	$('.badge a').hover(function(){
		$('.badge a img').attr('src', $('.badge a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.badge a img').hasClass('current')) {
			$('.badge a img').attr('src', $('.badge a img').attr('src').replace('_on', '_off'));
		}
	});
});