

jQuery(function($) {


  recipe_id = getUrlVars()["recipe_id"];

  App.getDetail(recipe_id,function(json){
    console.log(json);
  })

  var frag_reFav = new Boolean(false);

  // つくったボタン

  $('.cookedBtn').click(function(){
    $(this).addClass("cookedBtn_on");
    location.href = "../done/index.html?recipe_id="+ recipe_id;
  })

  // お気に入りボタン
  App.getOwnProfile(function(myprofile) {


    $("#re_fav").click(function(){

      // for(i=0;i<myprofile.favorite_recipes.length;i++) {
        // // もしお気に入りしてなかったら
        // if(frag_reFav == false && myprofile.favorite_recipes.id[i] != recipe_id){
          // ONにする
          frag_reFav = true;
          $("#re_fav img").attr("src","img/reci_btn_fav_on.png");
          // お気に入りに追加
          App.sendFavorite(recipe_id,function(){　});
        // }
        // else{
          frag_reFav = false;
          $("#re_fav img").attr("src","img/reci_btn_fav.png");
        // };
      // };

    });

  });



  App = new CheeseController();

  App.signIn("ren","test",function(json){
    console.log(json);
  });

  App.getDetail(recipe_id,function(recipe){
    console.log(recipe);
    $('.recipename').text(recipe.name);
    $('#re_photo img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});
    $('#time').text(recipe.necessary_time + "分");
    $('#money').text(recipe.required_money + "円");
    $('.aaa').text(recipe.foods[0].screen_name);




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


});

