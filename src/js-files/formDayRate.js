$(document).ready(function() {
    var DayRateSubmit = $('.js-DayRate-Submit');
    var hiddenBlock = $('.js-hidden-block');
    var noData = $('.js-no-data-block');
    
    var input1 = $('.js-phone');
    var input2 = $('.js-rate');
    
    input1.on('click', function () {
            input1.css("border", ""); 
        });
        input2.on('click', function () {
            input2.css("border", ""); 
        });
    
        $('body').on('click', function() {
            hiddenBlock.addClass('hide');
            noData.addClass('hide');
            DayRateSubmit.css('background-color', '');
            });
            
        $('body').keydown(function() {
            hiddenBlock.addClass('hide');
            noData.addClass('hide');
            DayRateSubmit.css('background-color', '');
        });
    
        $("#form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
            e.preventDefault();
            var form_data = $(this).serialize(); // Собираем все данные из формы
            if(!input1.val()&!input2.val()){
                input1.css('border', 'red 1px solid');
                input2.css('border', 'red 1px solid');
                noData.removeClass('hide');
                return false;                         
            }
            if(!input1.val()){
                input1.css('border', 'red 1px solid');
                noData.removeClass('hide');
                return false;                         
            }
            if(!input2.val()){
                input2.css('border', 'red 1px solid');
                noData.removeClass('hide');
                return false;                         
            }
            $.ajax({
                type: "POST", // Метод отправки
                url: "send.php", // Путь до php файла отправителя
                data: form_data,
                success: function () {
                    // Код в этом блоке выполняется при успешной отправке сообщения
                    hiddenBlock.removeClass('hide');
                    input1.val("");
                    input2.val("");
                }
            });
        });
    });