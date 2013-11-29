// JavaScript Document
$('head').append(
    '<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>'
);
 
jQuery.event.add(window,"load",function() { 
    var pageH = $("#container").height();
 
    $("#fade").css("height", pageH).delay(700).fadeOut(600);
    $("#loader").delay(500).fadeOut(300);
    $("#container").css("display", "block");
});