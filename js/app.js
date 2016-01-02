var main = function() {

    $('#arrow-down').click(function() {
        
        $('.menu').animate({ top: '0px'}, 200);
        
        $('body').animate({top: '75px'}, 200);

	$('#arrow-down').hide();
	$('#arrow-up').show();
     });

    $('#arrow-up').click(function() {
        
        $('.menu').animate({ top: '-75px'}, 200);
        
        $('body').animate({top: '0px'}, 200);
	
	$('#arrow-down').show();
	$('#arrow-up').hide();
     });
    
};

$(document).ready(main);
