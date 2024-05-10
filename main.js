$(document).ready(function() {
    var envelope = $('#envelope');
    var mothersDayMessage = $('#mothersDayMessage');
    
    envelope.click(function() {
        if(envelope.hasClass('open')) {
            close();
        } else {
            open();
        }
    });
    
    function open() {
        envelope.addClass('open')
            .removeClass('close');
        mothersDayMessage.show();
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');
        mothersDayMessage.hide();
    }
});
$(document).ready(function() {
    for (var i = 0; i < 50; i++) {
        var heart = $('<div class="heart-float"></div>');
        heart.css({
            'left': Math.random() * 100 + 'vw',
            'animation-duration': Math.random() * 5 + 3 + 's', // Aumenta la duración para que los corazones floten más lentamente
            'animation-delay': Math.random() * 2 + 's',
            'transform': 'scale(' + Math.random() + ')'
        });
        $('body').append(heart);
    }
});



function toggleCard() {
    document.querySelector('.envelope').classList.toggle('open');
}