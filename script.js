$(document).ready(function() {
    let altoPantalla = $(window).height();

    ajustesIniciales();
    aparecerScroll();

    function ajustesIniciales() {
        $('section.contenido').css({
            'margin-top': altoPantalla - 110 + 'px'
        })
    }


    $(document).scroll(function() {
        let scrollTop = $(this).scrollTop();

        let pixeles = scrollTop / 70;

        if (scrollTop < altoPantalla) {
            $('section.contenedorGeneral').css({
                '-webkit-filter': 'blur(' + pixeles + 'px)',
                'background-position': 'center -' + pixeles * 10 + 'px'
            });
        }
    });

    /*function hacescroll() {
        let caldas = $('#caldas').offset().top;

        $('#caldasS').on('click', function() {

            $('html, body').animate({
                scrollTop: 380
            }, 500);
        });
}*/

    function aparecerScroll() {

        var posicionActual, posicionNueva = 0;

        $(window).scroll(function() {
            posicionNueva = $(this).scrollTop();

            if (posicionNueva !== 0) {
                $('.scroll').hide('fast');
            } else if (posicionNueva === 0) {
                $('.scroll').show('fast');
            }

        });

    }

});