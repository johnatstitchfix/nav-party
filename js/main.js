$(".account-menu__toggle").click(function (event) {
    event.preventDefault();
    $(".account-menu").toggleClass("open");
});
$(document).on("click", function (e) {
    if ($(e.target).is(".account-menu, .account-menu__toggle, .account-menu__toggle__initial, .account-menu__toggle__name") === false) {
        $(".account-menu").removeClass("open");
    }
});
$(".nav--primary__menu li a, .nav--secondary__menu li a").on("click", function () {
    $(this).addClass("current");
});
$(".footer-toggle").click(function (event) {
    event.preventDefault();
    $(".footer__main__wrapper").slideToggle();
    $(".footer__main__wrapper").toggleClass("open");
    $(".footer-toggle").toggleClass("close")
});
$(document).ready(function () {
    $(".account-menu").css("transition", "all .4s ease"); // Adding this CSS here because otherwise it causes loading jank in Safari
    function navHighlighting() {
        /*** Moving nav dot ***/
        var dotLeft = $(".nav--primary__menu li a.current").position();
        var menuItemWidth = $(".nav--primary__menu li a.current").width();
        $('#top-level-dot').css({
            "left": dotLeft.left + menuItemWidth / 2
        });
        $(".nav--primary__menu li a").hover(
            function () {
                var newDotLeft = $(this).position();
                var newMenuItemWidth = $(this).width()
                $('#top-level-dot').css({
                    "left": newDotLeft.left + newMenuItemWidth / 2
                });
            }
        );
        $(".nav--primary__menu").mouseleave(
            function () {
                $('#top-level-dot').css({
                    "left": dotLeft.left + menuItemWidth / 2
                });
            }
        );
        /*** Moving nav underscore ***/
        var underscoreWidth = $(".nav--secondary__menu li a.current").width();
        var underscoreLeft = $(".nav--secondary__menu li a.current").position();
        $('#page-underscore').css({
            "width": underscoreWidth,
            "left": underscoreLeft.left
        });
        $(".nav--secondary__menu li a").hover(
            function () {
                var newWidth = $(this).width();
                var newLeft = $(this).position();
                $('#page-underscore').css({
                    "width": newWidth,
                    "left": newLeft.left
                });
            }
        );
        $(".nav--secondary__menu").mouseleave(
            function () {
                $('#page-underscore').css({
                    "width": underscoreWidth,
                    "left": underscoreLeft.left
                });
            }
        );
    }
    navHighlighting();
    $(window).resize(navHighlighting);
});

/*** Nav transition on scroll ***/
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('body:not(".no-sub-nav") header').addClass('header--up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('body:not(".no-sub-nav") header').removeClass('header--up');
        }
    }
    lastScrollTop = st;
}
/*** Tooltips ***/
$('.style-guide-link').click(function (event) {
    event.preventDefault();
    $(".tooltip").toggleClass("active");
});
$(document).on("click", function (e) {
    if ($(e.target).is(".tooltip, .style-guide-link, .style-guide") === false) {
        $(".tooltip").removeClass("active");
    }
});
/*** Fade out main on link clink ***/
$('.nav--primary__menu a, .nav--secondary__menu a').click(function (event) {
    event.preventDefault();
    newLocation = this.href;
    $('main').addClass('disappear');
    setTimeout(newpage, 300);
});

function newpage() {
    window.location = newLocation;
}
/*** Secondary nav transitions when click on a parent ***/
$('.nav--primary__menu a').on("click", function () {
    $(".nav--secondary__wrapper").addClass("transition-out");
});
$(".nav--primary__menu a.no-sub-nav").on("click", function () {
    $("body").addClass("no-sub-nav");
});
$(".nav--primary__menu a:not(.no-sub-nav)").on("click", function () {
    $("body").removeClass("no-sub-nav");
});
