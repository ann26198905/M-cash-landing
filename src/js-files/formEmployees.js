$(document).ready(function () {
var numberEmployees = $('.js-number-employees');
var employeesSubmit = $('.js-employees-submit');
var Tier1 = $('.js-tier1');
var Tier2 = $('.js-tier2');
var Tier3 = $('.js-tier3');
var tr1 = $('.js-tr1');
var tr2 = $('.js-tr2');
var tr3 = $('.js-tr3');
var chosenContainer = $('.chosen-container');
var selectBlock = $('.js-select-block');
var employeesBlock = $('.js-employees-block');

employeesSubmit.on('click', function (e) {
e.preventDefault();

var error = 0;
    if (!numberEmployees.val()) {
        numberEmployees.css("border", "red 1px solid");
        error = 1;
    }

    if (!$("a").hasClass("search-choice-close")) {
        chosenContainer.css("border", "red 1px solid");
        error = 2;
    }

    if (error == 1) {
        employeesBlock.removeClass('hide');      
        return false;
    }
    if (error == 2) {
        selectBlock.removeClass('hide');
        return false;
    }

    if (error == 0) {
    var arr_Sel = Array(),
        arr_Opt1 = Array(),
        arr_Opt2 = Array(),
        arr_Opt3 = Array();

    $(".search-choice").each(function () {
    arr_Sel.push($(this).text());
    });
    tr1.each(function () {
    arr_Opt1.push($(this).text());
    });
    tr2.each(function () {
    arr_Opt2.push($(this).text());
    });
    tr3.each(function () {
    arr_Opt3.push($(this).text());
    });

    var flag=0,
        flag2=0,
        flag3=0;

    for (var i = 0; i < arr_Sel.length; i++) {
        for (var j = 0; j < arr_Opt1.length; j++) {
            if (arr_Sel[i] == arr_Opt1[j]) {
                flag++;
            } 
        } 
    }       
    for (var m = 0; m < arr_Sel.length; m++) {
        for (var k = 0; k < arr_Opt2.length; k++) {
            if (arr_Sel[m] == arr_Opt2[k]) {
                flag2++;
            } 
        }
    }
    for (var s = 0; s < arr_Sel.length; s++) {
        for (var n = 0; n < arr_Opt3.length; n++) {
            if (arr_Sel[s] == arr_Opt3[n]) {
                flag3++;
            }
        }
    }
    if (flag!=0) {
    } else {
        Tier1.addClass('hide');
    } 
    if (flag2!=0) {
    } else {
        Tier2.addClass('hide');
    }
    if (flag3!=0) {
    } else {
        Tier3.addClass('hide');
    }
}
});

numberEmployees.on('click', function () {
    numberEmployees.css("border", ""); 
});

chosenContainer.on('click', function () {
    chosenContainer.css("border", ""); 
});

$('body').on('click', function () {
    employeesBlock.addClass('hide');
    selectBlock.addClass('hide');
});

$('body').keydown(function () {
    employeesBlock.addClass('hide');
    selectBlock.addClass('hide');
});
    chosenContainer.on('click', function() {
        Tier1.removeClass('hide');
        Tier2.removeClass('hide');
        Tier3.removeClass('hide');
    });
});