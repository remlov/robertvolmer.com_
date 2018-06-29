function colorRandomMeansOfContact() {
    /*$($('[class*="icon-"]')[Math.floor(Math.random() * 6)]).animate({
        color: $('.brand').css("color")
    }, 500);*/
}
$(document).ready(function () {
    var t = 7500;
    var previousColor;
    $('.brand').css('color', "#44bbff");
    var c = function () {
        $(".brand").animate({
            color: "#44bbff"
        }, t, colorRandomMeansOfContact).animate({
            color: "#aa00bb"
        }, t, colorRandomMeansOfContact).animate({
            color: "#ee6600"
        }, t, colorRandomMeansOfContact).animate({
            color: "#ff0033"
        }, t, colorRandomMeansOfContact).animate({
            color: "#33ff33"
        }, t, colorRandomMeansOfContact).animate({
            color: "#55ffbb"
        }, t, colorRandomMeansOfContact).animate({
            color: "#44bbff"
        }, t, '', function () {
            c();
        });
    }
    c();
    $('[class*="icon-"]').hover(function () {
        previousColor = $(this).css("color");
        $(this).css('color', 'rgb(255, 255, 255)');
    }, function () {
        $(this).css('color', previousColor);
    });
});



var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-6836545-4']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();