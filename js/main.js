$(".account-menu__toggle").click(function (event) {
    event.preventDefault();
    $(".account-menu").toggleClass("open");
});
$(".footer-toggle").click(function (event) {
    event.preventDefault();
    $(".footer__main__wrapper").slideToggle();
    $(".footer__main__wrapper").toggleClass("open");
    $(".footer-toggle").toggleClass("close")
});

/**** Moving nav ***/
var underscoreWidth = $(".nav--secondary__menu li a.current").width();
var underscoreLeft = $(".nav--secondary__menu li a.current").position();
$('#page-underscore').css({"width": underscoreWidth, "left": underscoreLeft.left});
$(".nav--secondary__menu li a").hover(
    function () {
        var newWidth = $(this).width();
        var newLeft = $(this).position(); 
        $('#page-underscore').css({"width": newWidth, "left": newLeft.left});
    }
);
$(".nav--secondary__menu").mouseleave(
    function () {
        $('#page-underscore').css({"width": underscoreWidth, "left": underscoreLeft.left});
    }
);
