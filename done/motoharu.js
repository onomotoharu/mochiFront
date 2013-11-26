

$(function(){
  App = new CheeseController();

  App.signIn("ren","test",function(json){
   console.log(json);
  });

  App.sendMade(1,function(json){
    console.log(json);
  });


  });

