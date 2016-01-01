var main = function() {
    $('.menu-icon').click(function() {
        
        $('.menu').animate({ top: '0px'}, 200);
        
        $('body').animate({top: '75px'}, 200);
    });

};

$(document).ready(main);