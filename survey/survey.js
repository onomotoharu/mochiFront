var recipe_id;
recipe_id = 0;

$(function(){
  // $('#r_btn a').append("次へ").attr("href", "../recommend/index.html");

  App.getSample(function(survey){
    console.log(survey);

    $('#item1 #comment p').text(survey[0].name);
    $('#item2 #comment p').text(survey[1].name);
    $('#item3 #comment p').text(survey[2].name);
    $('#item4 #comment p').text(survey[3].name);
    $('#item5 #comment p').text(survey[4].name);
    $('#item6 #comment p').text(survey[5].name);
    $('#item7 #comment p').text(survey[6].name);
    $('#item8 #comment p').text(survey[7].name);
    $('#item9 #comment p').text(survey[8].name);
    $('#item10 #comment p').text(survey[9].name);
    $('#item11 #comment p').text(survey[10].name);
    $('#item12 #comment p').text(survey[11].name);
    $('#item13 #comment p').text(survey[12].name);
    $('#item14 #comment p').text(survey[13].name);
    $('#item15 #comment p').text(survey[14].name);
    $('#item16 #comment p').text(survey[15].name);
    $('#item17 #comment p').text(survey[16].name);
    $('#item18 #comment p').text(survey[17].name);
    $('#item19 #comment p').text(survey[18].name);
    $('#item20 #comment p').text(survey[19].name);

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

    //boxがクリックされたらデータ送信
    $(".box").click(function() {
      if($(this).hasClass('box')){
        $(".box_on").addClass("box").removeClass('box_on'); //.box_onが複数にならないように
        $(this).addClass("box_on animated pulse").removeClass('box');
      } else if ($(this).hasClass('box_on')) {
        $(this).addClass("box shake").removeClass('box_on pulse');
      }

      if($("#item1").hasClass("box_on")){recipe_id = survey[0].id;}
      if($("#item2").hasClass("box_on")){recipe_id = survey[1].id;}
      if($("#item3").hasClass("box_on")){recipe_id = survey[2].id;}
      if($("#item4").hasClass("box_on")){recipe_id = survey[3].id;}
      if($("#item5").hasClass("box_on")){recipe_id = survey[4].id;}
      if($("#item6").hasClass("box_on")){recipe_id = survey[5].id;}
      if($("#item7").hasClass("box_on")){recipe_id = survey[6].id;}
      if($("#item8").hasClass("box_on")){recipe_id = survey[7].id;}
      if($("#item9").hasClass("box_on")){recipe_id = survey[8].id;}
      if($("#item10").hasClass("box_on")){recipe_id = survey[9].id;}
      if($("#item11").hasClass("box_on")){recipe_id = survey[10].id;}
      if($("#item12").hasClass("box_on")){recipe_id = survey[11].id;}
      if($("#item13").hasClass("box_on")){recipe_id = survey[12].id;}
      if($("#item14").hasClass("box_on")){recipe_id = survey[13].id;}
      if($("#item15").hasClass("box_on")){recipe_id = survey[14].id;}
      if($("#item16").hasClass("box_on")){recipe_id = survey[15].id;}
      if($("#item17").hasClass("box_on")){recipe_id = survey[16].id;}
      if($("#item18").hasClass("box_on")){recipe_id = survey[17].id;}
      if($("#item19").hasClass("box_on")){recipe_id = survey[18].id;}
      if($("#item20").hasClass("box_on")){recipe_id = survey[19].id;}

      console.log(recipe_id); 

      App.sendMade(recipe_id, function(recipe){
        console.log(recipe);
      });
      // location.href = "../recommend/index.html";
    });
  });
  
});
