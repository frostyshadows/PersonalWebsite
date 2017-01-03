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

});