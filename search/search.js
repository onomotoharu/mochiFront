$(function(){

	$('.cheese a').hover(function(){
		$('.cheese a img').attr('src', $('.cheese a img').attr('src').replace('_off', '_on'));}, function(){

		if (!$('.cheese a img').hasClass('current')) {
			$('.cheese a img').attr('src', $('.cheese a img').attr('src').replace('_on', '_off'));
		}
	});

	$('.twitter a').hover(function(){
		$('.twitter a img').attr('src', $('.twitter a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.twitter a img').hasClass('current')) {
			$('.twitter a img').attr('src', $('.twitter a img').attr('src').replace('_on', '_off'));
		}
	});

	$('.facebook a').hover(function(){
		$('.facebook a img').attr('src', $('.facebook a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('.facebook a img').hasClass('current')) {
			$('.facebook a img').attr('src', $('.facebook a img').attr('src').replace('_on', '_off'));
		}
	});
	
});

$(function(){
	$(".toggleImage").click(function(){
    	a = $(this).parent('.follow');
    	console.log(a);
    	// var name = $("this a.account").text();
    	// var image = $(".follow_pic img").attr("src");
     //    console.log(name);
     //    console.log(image);
    });
});
