$(".account-menu__toggle").click(function () {
    $(".account-menu").toggleClass("open");
});
$(".footer-toggle").click(function () {
    $(".footer__main__wrapper").slideToggle();
    $(".footer__main__wrapper").toggleClass("open");
    $(".footer-toggle").toggleClass("close")
});
