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

/*** Moving nav underscore ***/
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

/*** Nav transition on scroll ***/ 
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').addClass('header--up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('header--up');
        }
    }
    
    lastScrollTop = st;
}