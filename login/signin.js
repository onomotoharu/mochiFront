


$("#button").click(function(){
  username = $("form#username").var();
  pass = $("form#password").var();

  result = CheeseController.sign_in(usernamen,pass);

  $("h1").text = result.recipe_name;

  if(result==failed){
    alert("NG";
  }
});