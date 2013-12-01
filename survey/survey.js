
var recipe_id;
recipe_id = 0;

$(function(){
  $('#r_btn a').append("次へ").attr("href", "../recommend/index.html");

  // ページを開いたらデータを取得
  App = new CheeseController();

  App.signIn("ren","test",function(json){
    console.log(json);
  });

  App.getSample(function(survey){
    console.log(survey);

    $('#item1 #coment p').text(survey[0].name);
    $('#item2 #coment p').text(survey[1].name);
    $('#item3 #coment p').text(survey[2].name);
    $('#item4 #coment p').text(survey[3].name);
    $('#item5 #coment p').text(survey[4].name);
    $('#item6 #coment p').text(survey[5].name);
    $('#item7 #coment p').text(survey[6].name);
    $('#item8 #coment p').text(survey[7].name);
    $('#item9 #coment p').text(survey[8].name);
    $('#item10 #coment p').text(survey[9].name);
    $('#item11 #coment p').text(survey[10].name);
    $('#item12 #coment p').text(survey[11].name);
    $('#item13 #coment p').text(survey[12].name);
    $('#item14 #coment p').text(survey[13].name);
    $('#item15 #coment p').text(survey[14].name);
    $('#item16 #coment p').text(survey[15].name);
    $('#item17 #coment p').text(survey[16].name);
    $('#item18 #coment p').text(survey[17].name);
    $('#item19 #coment p').text(survey[18].name);
    $('#item20 #coment p').text(survey[19].name);

    $('#item1 img').attr("src", "http://winvelab.net/cheese/img/"+survey[0].default_picture_name);
    $('#item2 img').attr("src", "http://winvelab.net/cheese/img/"+survey[1].default_picture_name);
    $('#item3 img').attr("src", "http://winvelab.net/cheese/img/"+survey[2].default_picture_name);
    $('#item4 img').attr("src", "http://winvelab.net/cheese/img/"+survey[3].default_picture_name);
    $('#item5 img').attr("src", "http://winvelab.net/cheese/img/"+survey[4].default_picture_name);
    $('#item6 img').attr("src", "http://winvelab.net/cheese/img/"+survey[5].default_picture_name);
    $('#item7 img').attr("src", "http://winvelab.net/cheese/img/"+survey[6].default_picture_name);
    $('#item8 img').attr("src", "http://winvelab.net/cheese/img/"+survey[7].default_picture_name);
    $('#item9 img').attr("src", "http://winvelab.net/cheese/img/"+survey[8].default_picture_name);
    $('#item10 img').attr("src", "http://winvelab.net/cheese/img/"+survey[9].default_picture_name);
    $('#item11 img').attr("src", "http://winvelab.net/cheese/img/"+survey[10].default_picture_name);
    $('#item12 img').attr("src", "http://winvelab.net/cheese/img/"+survey[11].default_picture_name);
    $('#item13 img').attr("src", "http://winvelab.net/cheese/img/"+survey[12].default_picture_name);
    $('#item14 img').attr("src", "http://winvelab.net/cheese/img/"+survey[13].default_picture_name);
    $('#item15 img').attr("src", "http://winvelab.net/cheese/img/"+survey[14].default_picture_name);
    $('#item16 img').attr("src", "http://winvelab.net/cheese/img/"+survey[15].default_picture_name);
    $('#item17 img').attr("src", "http://winvelab.net/cheese/img/"+survey[16].default_picture_name);
    $('#item18 img').attr("src", "http://winvelab.net/cheese/img/"+survey[17].default_picture_name);
    $('#item19 img').attr("src", "http://winvelab.net/cheese/img/"+survey[18].default_picture_name);
    $('#item20 img').attr("src", "http://winvelab.net/cheese/img/"+survey[19].default_picture_name);
  });

  //boxがクリックされたらデータ送信
  $(".box").click(function() {
    if($(this).hasClass('box')){
      $(this).addClass("box_on").removeClass('box');
    } 
    else if($(this).hasClass('box_on')) {
      $(this).addClass("box").removeClass('box_on');
    }

    recipe_id = survey[0].id;


    console.log(recipe_id); 

    //console.log("クリックされました！"); 
  });

  App.sendMade(recipe_id, function(){});
 　
});




