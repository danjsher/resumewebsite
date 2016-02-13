var main = function() {
    $('.resume-section').click(function(){
	$(this).children().toggle();
    });
/*    $('#arrow-down').click(function() {
        
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

    $('.menu-item').removeClass('current');
    $(this).addClass('current');
    
    $('.card').mouseenter(function(){
	$('#sharc-img, #sharc-img-blur').fadeToggle(500, function(){});
	$('.btn').toggle();
    }).mouseleave(function(){
	$('#sharc-img, #sharc-img-blur').fadeToggle(500, function(){});
	$('.btn').toggle();
    });
    */
};

$(document).ready(main);
