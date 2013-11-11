jQuery(function($) {
  var placeHolder = 'コメントを書く...';

  $("textarea")
    .focus(function() {
      var self = $(this);
      if (self.val() === placeHolder) { self.val(''); }
    })
    .blur(function() {
      var self = $(this);
      if (self.val() === "") { self.val(placeHolder); }
    });
});