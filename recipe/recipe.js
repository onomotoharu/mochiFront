jQuery(function($) {

  var frag_reFav = new Boolean(false);

  // つくったボタン

  $('.cookedBtn').click(function(){
    $(this).addClass("cookedBtn_on");
    location.href = "../done/index.html";
  })

  // お気に入りボタン

  $("#re_fav").click(function(){
    if(frag_reFav == false){
      frag_reFav = true;
      $("#re_fav img").attr("src","img/reci_btn_fav_on.png");

    }
    else{
      frag_reFav = false;
      $("#re_fav img").attr("src","img/reci_btn_fav.png");
    }
  })


});

$(function(){
  var recipeData = {
    recipeTitle : ".recipename",
    recipePhoto : "",
    time: "#time",
    money: "#money",
    ninzuu: ".ninzuu",
    zairyo: "td",
    process: ".process",
  }




  App = new CheeseController();

  App.signIn("ren","test",function(json){
   // console.log(json);
  });

  App.getDetail(1,function(recipe){
    console.log(recipe);
    $('.r_name').text(recipe.name);
    $('.foodTitle img').attr({'src':"http://winvelab.net/cheese/img/" + recipe.default_picture_name});

  });


});


