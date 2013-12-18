jQuery(function($) {

  $('#l_btn a').attr("href", "javascript:history.back();");

  recipe_id = getUrlVars()["recipe_id"];

  // つくったボタン

  $('.cookedBtn').click(function(){
    $(this).addClass("cookedBtn_on");
    location.href = "../done/index.html?recipe_id="+ recipe_id;
  })


  App.getDetail(recipe_id,function(recipe){
    console.log(recipe);
    $('.recipename').text(recipe.name);
    $('#re_photo img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
    if(recipe.necessary_time == 1){time = "5分以下";}
    else if(recipe.necessary_time == 2){time = "約10分";}
    else if(recipe.necessary_time == 3){time = "約15分";}
    else if(recipe.necessary_time == 4){time = "約30分";}
    else if(recipe.necessary_time == 5){time = "約1時間";}
    else if(recipe.necessary_time == 6){time = "1時間以上";}
    else if(recipe.necessary_time == 0){time = "不明";}
    $('#time').text(time);
    if(recipe.required_money == 1){money = "100円以下";}
    else if(recipe.required_money == 2){money = "300円前後";}
    else if(recipe.required_money == 3){money = "500円前後";}
    else if(recipe.required_money == 4){money = "1000円前後";}
    else if(recipe.required_money == 5){money = "2000円前後";}
    else if(recipe.required_money == 6){money = "3000円前後";}
    else if(recipe.required_money == 7){money = "5000円前後";}
    else if(recipe.required_money == 8){money = "10000円以上";}
    else if(recipe.required_money == 0){money = "不明";}
    $('#money').text(money);
    $('.aaa').text(recipe.foods[0].screen_name);
    $fav = $('<div id="fav"><img src="./img/reci_btn_fav.png"></div>').addClass('fav_false');
    $('.recipename').after($fav);

    for(var i=0; i< recipe.steps.length; i++){
      $pro_text = $("<div/>").addClass("pro_text").append(recipe.steps[i]);
      $li= $("<li/>").append(i+1).addClass("number");
      $(".process").append($li).append($pro_text);

    }

    for(var i=0; i< recipe.foods.length; i++){
      $kosuu = $("<td/>").append(recipe.foods[i].amount).append(recipe.foods);
      $zairyo = $("<td/>").append(recipe.foods[i].screen_name).append(recipe.foods);
      $gyou= $("<tr/>").append($zairyo).append($kosuu);
      $(".material").append($gyou);

    }
  });


  // お気に入りボタン
  App.getOwnProfile(function(myprofile) {

    console.log(myprofile);

    // もしお気に入りしてなかったら
    for(i=0;i<myprofile.favorite_recipes.length;i++) {
      if(myprofile.favorite_recipes[i].id == recipe_id){
        console.log("登録してる");
        $('#fav').removeClass('fav_false').addClass('fav_true');
        $("#fav img").attr("src","img/reci_btn_fav_on.png");
      } else {
        console.log("登録してない");
        $('#fav').addClass('fav_false');
      };
    };

  });

  $("#fav").click(function(){

    if($('#fav').hasClass('fav_false')){
      // ONにする
      $("#fav img").attr("src","img/reci_btn_fav_on.png");
      console.log("お気に入りしたよ");
      $(this).removeClass('fav_false').addClass('fav_true');
      // お気に入りに追加
      App.sendFavorite(recipe_id,function(){　});
    } else if($('#fav').hasClass('fav_true')) {
      console.log("お気に入りしてあるよ");
    };

  });

});
