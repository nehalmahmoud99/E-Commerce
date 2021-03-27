(function($) {
    "use strict";



    $(document).ready(function() {

        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        $('.electronics').click(function() {
            $('#cat-container').toggle();
        })

        $('.electronics').blur(function() {
            $('#cat-container').hide();
        })






        // cat3 owl
        $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            })
            /// end cat3
    });


    const popup = document.querySelector(".popup");
    const closePopup = document.querySelector(".popup__close");

    if (popup) {
        closePopup.addEventListener("click", () => {
            popup.classList.add("hide__popup");
        });

        window.addEventListener("load", () => {
            setTimeout(() => {
                popup.classList.remove("hide__popup");
            }, 500);
        });
    }


    $(document).ready(function() {
        'use strict';
    });





})(jQuery);