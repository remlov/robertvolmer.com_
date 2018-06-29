$(document).ready(function() {
    var t = 10000;
    var c = function() {
            $("h1").animate({
                color: "#44bbff"
            }, t).animate({
                color: "#aa00bb"
            }, t).animate({
                color: "#ee6600"
            }, t).animate({
                color: "#ff0033"
            }, t).animate({
                color: "#33ff33"
            }, t).animate({
                color: "#55ffbb"
            }, t).animate({
                color: "#44bbff"
            }, t, '', function() {
                c();
            });
        }
    c();
    var originalColor;
    $('[class*="icon-"]').hover(function() {
        originalColor = $(this).css("color");
        $(this).css('color', $('h1').css("color"));
    }, function() {
      if (originalColor == 'rgb(0, 0, 0)'){
        $(this).css('color', 'black');
      }
        
    });
    setInterval(getConnection,Math.floor((Math.random()*4)+1)*1000);

});

function getConnection() {
   connections = $('[class*="icon-"]');
   //console.log(connections[Math.floor(Math.random() * connections.length)]);
   connection = connections[Math.floor(Math.random()*6)];
   //while ($(connection).css("color") != 'rgb(0, 0, 0)') {
   // connection = connections[Math.floor((Math.random()*6)+1)];
   //}
   /*if ($(connection).css("color") == 'rgb(0, 0, 0)'){
     $(connection).animate({color : $('h1').css("color")}, 250);
} else {
  $(connection).animate({color : 'rgb(0, 0, 0)'}, 250);
}*/
   $(connection).animate({color : $('h1').css("color")}, 500);
   
   //console.log($('h1').css("color"));
   //$(connection).trigger('mouseenter');
   //$(connection).trigger('mouseleave');
   

}