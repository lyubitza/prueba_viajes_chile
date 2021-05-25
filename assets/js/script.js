$(function(){
    //smothscrolling
    const links = document.querySelectorAll("#navbarNav ul a");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        document.querySelector(href).scrollIntoView({
        behavior: "smooth"
        });
    }
    //popover quienes somos
    $('[data-toggle="popover"]').popover()

    //funcion para ocultar contenido de cards
    $(".card-body h5").click(function(){
        $("p").toggle();
    });

    //funcion para scroll opacity menu
    $(window).scroll(function(){
        var posicion = $(this).scrollTop();

        if (posicion > 100) {
            $('.navbar').addClass('bg-scroll');
        } else {
            $('.navbar').removeClass('bg-scroll');
        }

    });

});