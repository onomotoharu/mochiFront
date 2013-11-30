function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i <hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


jQuery(function($) {


  recipe_id = getUrlVars()["recipe_id"];

  App.getDetail(recipe_id,function(json){
    console.log(json);
  })

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