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

//drag and drog normal
// $(function() {
//     $(".letter").draggable({
//         containment: "window"
//     });
// });


//drag and drog pero arrastra y suelta se va a su posicion inicial
// $(function() {
//     $(".letter").draggable({
//         containment: "window",
//         revert: function(event, ui) {
//             // on false, the widget will revert to its original position when dragging stops
//             return !event;
//         }
//     });

//     $(".letter").on("click", function() {
//         $(this).animate({
//             top: 0,
//             left: 0
//         });
//     });
// });


//Drag and drog pero cuando haga arrastre y suelte en alguyn lado de la ventana esta se queda y vuelve cuandode le click

$(function() {
    $(".letter").draggable({
        containment: "window"
    });

    $(".letter").on("click", function() {
        $(this).animate({
            top: 0,
            left: 0
        });
    });
});

