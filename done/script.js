(function(){
  var obj = {
    battleID : "",
      name1 : "",
      name2 : "",
      img1 : "",
      img2 : "",
      comment: ""
  };
  var input1 = document.getElementById('imageInput');
  var preview1 = document.getElementById('preview');

  input1.'change', function(e) {

    var file = e.target.files[0];
    console.log(file);
    var fr = new FileReader();
    fr.onload = function() {
      preview1.setAttribute('style', 'background-image:url(' +fr.result+ ');');
      obj.img1 = fr.result;
    }
    fr.readAsDataURL(file);
  },false);


})();