$(document).ready(function() {
var button = $('.js-button');

button.mousedown(function () {
    $(this).css('background','lightgrey').css('border','1px solid grey').css('color','black');
});
button.mouseup(function () {
    $(this).css('background-color', '').css('border', '').css('color', '');
});
button.mouseover(function () {
    $(this).css('background-color', '').css('border', '').css('color', '');
});

});
