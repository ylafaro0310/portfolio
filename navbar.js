$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});

$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 500;
        navbarHeight = 60;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - navbarHeight;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});