img = document.getElementById('menu-icon');

var main = function() {

    $('.menu-icon').click(function() {
        
        $('.menu').animate({ top: '0px'}, 200);
        
        $('body').animate({top: '75px'}, 200);

        img.className = "rotate90";
     });




};

$(document).ready(main);