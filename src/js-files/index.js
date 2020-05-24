$(document).ready(function(){
   var $js_item1 = $('.js-item1');
   var $js_item2 = $('.js-item2');
   var $js_item3 = $('.js-item3');
   var $js_item4 = $('.js-item4');
    // попытка сделать слайдер
// var items = [$js_item1,$js_item2,$js_item3,$js_item4]

   $js_item1.mousedown(function () {
        $(this).css("background-color","lightgrey");
    });
    $js_item1.mouseup(function () {
        $(this).css("background-color","white");
    });
    $js_item2.mousedown(function () {
        $(this).css("background-color","lightgrey");
    });
    $js_item2.mouseup(function () {
        $(this).css("background-color","white");
    });  
    $js_item3.mousedown(function () {
        $(this).css("background-color","lightgrey");
    });
    $js_item3.mouseup(function () {
        $(this).css("background-color","white");
    });
    $js_item4.mousedown(function () {
        $(this).css("background-color","lightgrey");
    });
    $js_item4.mouseup(function () {
        $(this).css("background-color","white");
    });

    $js_item1.click(function () {
        $js_item1.css("order","2");
        $js_item2.css("order","3");
        $js_item3.css("order","4");
        $js_item4.css("order","1");
    });
    $js_item2.click(function () {
        $js_item1.css("order","2");
        $js_item2.css("order","3");
        $js_item3.css("order","4");
        $js_item4.css("order","1");
    });
    $js_item3.click(function () {
        $js_item1.css("order","2");
        $js_item2.css("order","3");
        $js_item3.css("order","4");
        $js_item4.css("order","1");
    });
    $js_item4.click(function () {
        $js_item1.css("order","2");
        $js_item2.css("order","3");
        $js_item3.css("order","4");
        $js_item4.css("order","1");
    });
    $js_item1.click(function () {    
        $js_item1.css("order","3");
        $js_item2.css("order","4");
        $js_item3.css("order","1");
        $js_item4.css("order","2");
    });
    $js_item2.click(function () {    
        $js_item1.css("order","3");
        $js_item2.css("order","4");
        $js_item3.css("order","1");
        $js_item4.css("order","2");
    });
    $js_item3.click(function () {
        $js_item1.css("order","3");
        $js_item2.css("order","4");
        $js_item3.css("order","1");
        $js_item4.css("order","2");
    });
    $js_item4.click(function () {
        $js_item1.css("order","3");
        $js_item2.css("order","4");
        $js_item3.css("order","1");
        $js_item4.css("order","2");
    });
    $js_item1.click(function () {
        $js_item1.css("order","4");
        $js_item2.css("order","1");
        $js_item3.css("order","2");
        $js_item4.css("order","3");
    });
    $js_item2.click(function () {
        $js_item1.css("order","4");
        $js_item2.css("order","1");
        $js_item3.css("order","2");
        $js_item4.css("order","3");
    });
    $js_item3.click(function () {
        $js_item1.css("order","4");
        $js_item2.css("order","1");
        $js_item3.css("order","2");
        $js_item4.css("order","3");
    });
    $js_item4.click(function () {
        $js_item1.css("order","4");
        $js_item2.css("order","1");
        $js_item3.css("order","2");
        $js_item4.css("order","3");
    });
    $js_item1.click(function () {
        $js_item1.css("order","1");
        $js_item2.css("order","2");
        $js_item3.css("order","3");
        $js_item4.css("order","4");
    });
    $js_item2.click(function () {
        $js_item1.css("order","1");
        $js_item2.css("order","2");
        $js_item3.css("order","3");
        $js_item4.css("order","4");

        $js_item1.css("order","3");
        $js_item2.css("order","4");
        $js_item3.css("order","1");
        $js_item4.css("order","2");

        $js_item1.css("order","4");
        $js_item2.css("order","1");
        $js_item3.css("order","2");
        $js_item4.css("order","3");

        $js_item1.css("order","1");
        $js_item2.css("order","2");
        $js_item3.css("order","3");
        $js_item4.css("order","4");
    });
    $js_item3.click(function () {
        $js_item1.css("order","1");
        $js_item2.css("order","2");
        $js_item3.css("order","3");
        $js_item4.css("order","4");
    });
    $js_item4.click(function () {
        $js_item1.css("order","1");
        $js_item2.css("order","2");
        $js_item3.css("order","3");
        $js_item4.css("order","4");
    });
});