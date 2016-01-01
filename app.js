var main = function() {
    $('.heading').click(function() {
        
        $('.menu').animate({ top: '0px'}, 200);
        
        $('body').animate({top: '285px'}, 200);
    });

};

$(document).ready(main);