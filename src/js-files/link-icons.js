$(document).ready(function() {
    var icon1 = $('.js-icon1');
    var icon2 = $('.js-icon2');
    // icon1.mouseover(function () {
    //     console.log(icon1.attr('src'));
    // })
    icon1.mouseover(function () {
        console.log(icon1.attr('src','./img/icons8.png'));
    });
    icon1.mouseout(function () {
        console.log(icon1.attr('src','./img/social1.png'));
    });
    icon2.mouseover(function () {
        console.log(icon2.attr('src','./img/social2-4.png'));
    });
    icon2.mouseout(function () {
        console.log(icon2.attr('src','./img/social2.png'));
    });
});