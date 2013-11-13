
    $('.alluserBg').click(function(){
     	alert(this);
     	$("span").css("background-color" ,"#000");
    });



 
 $(document).ready(function() {
 
 
   $.get('http://winvelab.net/api/recipe/31283', function(jsontext) {
     recipe = $.parseJSON(jsontext);
    
    $('.alluserBg').click(function(){
    	alert(1);
    	$("span").css("background-color" ,"#000");
    });

    $('#recipename').html(recipe.name);

    $img = $('<img/>').attr("src",recipe.image);
    $('#re_photo').append($img);


    $('#time').append(recipe.time);
    $('#kcal').append(recipe.kcal);
    $('#yen').append(recipe.cost);

    //材料
    $.each(recipe.ingredients, function(name, amount) {
      var tr = $('<tr/>');
      $('<td/>').text(name).appendTo(tr);

      $('<td/>').text(amount).appendTo(tr);
      $('#material').append(tr);
    });

    //手順
    $.each(recipe.process, function(i,item) {
      $num = $('<div/>').addClass('number').append(i+1);
      $text = $('<div/>').addClass('pro_text').append(item);
      $process = $('<div/>').addClass('process').append($num).append($text);
      $("#processes").append($process);
    });
  });
});
