$(document).ready(function () {
    var menuList = $('.js-menu-list');
    menuList.on('click', function() {

        if ($(this).parent().find('ul').length) {
          $(this).parent().find('ul').slideToggle(200); 
    
          return true;
        }
    
      });
});