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
