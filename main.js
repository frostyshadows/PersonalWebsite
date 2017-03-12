/**
 * Created by sherryuan on 2017-01-03.
 */

$(function () {
    $("#aboutMenu").click(function () {
        $('html,body').animate({
                scrollTop: $("#aboutMe").offset().top
            }, 800);
    });

    $("#skillsMenu").click(function () {
        $('html,body').animate({
            scrollTop: $("#skills").offset().top
        }, 800);
    });

    $("#projectsMenu").click(function () {
        $('html,body').animate({
            scrollTop: $("#projects").offset().top
        }, 800);
    });

    $("#contactMenu").click(function () {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top
        }, 800);
    });

    var slideIndex = 1;
    showDivs(slideIndex);

    $("button.display-left").click(function () {
        plusDivs(-1)
    });

    $("button.display-right").click(function () {
        plusDivs(1)
    });

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
});