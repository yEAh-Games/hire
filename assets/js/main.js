/*======================
========================*/

(function ($) {
    "use strict";

     /*========== Preloader ==========*/
     $(window).on("load", () => {
        $('#preloader').fadeOut(500);
    });

    $(document).ready(function ($) {

        /*========= sticky menu ==========*/
        $(window).scroll(function () {
            try {
                var window_top = $(window).scrollTop() + 1;
                var header = $('.header');
                if (window_top > 200) {
                    header.addClass('header_fixed animate__animated animate__fadeIn');
                } else {
                    header.removeClass('header_fixed animate__animated animate__fadeIn');
                }
            } catch (error) {
                console.error('An error occurred while handling scroll:', error);
            }
        });

        /*========= Modal Video ==========*/
        try {
            $(".video-play").modalVideo({
                channel: 'youtube'
            });
        } catch (error) {
            console.log('Modal Video Not Loded');
        }

        /*========= Magic Kursor Js ==========*/
        try {
            new kursor({
                type: 1,
                color: '#fff',
            });
        } catch (error) {
            console.log('Kursor not enable this page');
        }

        /*========= Nice Select js ==========*/
        try {
            $('select').niceSelect();
        } catch (error) {
            console.log('Nice select not enable this page');
        }

        /*============= Wow Js =============*/
        try {
            sal(
                {
                    threshold: 1,
                    once: false,
                }
            );
        } catch (error) {
            console.log('Sal js not enable this page');
        }


        /*============ offcanvase Menu =========*/
        try {
            $(".offcanvase__menu--close-icon, .offcanvas__overlay").on("click", function () {
                $(".offcanvase").removeClass("info-open");
                $(".offcanvas__overlay").removeClass("overlay-open");
            });
            $(".menu-icon").on("click", function () {
                $(".offcanvase").addClass("info-open");
                $(".offcanvas__overlay").addClass("overlay-open");
            });
        } catch (error) {
            console.log("offcanvase Menu Not loaded");
        }


        /*========= Mobile Menu =========*/
        try {
            $('#offcanvase__menu').meanmenu({
                meanMenuContainer: '.offcanvase-menu',
                meanScreenWidth: "767",
                meanExpand: ['+'],
            });
        } catch (error) {
            console.log("Mobile Menu Not loaded");
        }


        /*============= Header Slider =============*/
        try {
            $(".slider__wrapper").slick({
                autoplay: false,
                dots: true,
                pauseOnHover: false,
                slidesToShow: 1,
                arrows: false,
            });
        } catch (error) {
            console.log('This slider only enable for homepage.')
        }


        /*========== Testimonial Slider ==========*/
        try {
            $(".testimonial-slider").slick({
                autoplay: false,
                dots: true,
                pauseOnHover: false,
                slidesToShow: 1,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            dots: false,
                        }
                    }
                ]

            });
        } catch (error) {
            console.log('This slider is not for this page')
        }

        /*========== product slider ========*/
        try {
            $(".slider-for").slick({
                autoplay: false,
                dots: false,
                pauseOnHover: false,
                slidesToShow: 1,
                arrows: true

            });
            $('.slider-for').slickLightbox({
                src: 'src',
                itemSelector: '.pd-main-image img',
                background: 'rgba(0, 0, 0, .7)'
            });
        } catch (error) {
            console.log('product slider not enable this page');
        }

        /*======= Popular Post Slider =========*/
        try {
            $(".popular-slider").slick({
                autoplay: false,
                dots: true,
                pauseOnHover: false,
                slidesToShow: 1,
                arrows: false,
            });
        } catch (error) {
            console.log('popular slider not enable this page');
        }


        /*========= progress bar =======*/
        try {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
                const ariaValuenow = progressBar.getAttribute('aria-valuenow');
                progressBar.style.width = `${ariaValuenow}%`;
            });
        } catch (error) {
            console.log('progress bar not enable this page');
        }

    });


    /*=========== Tab Js ===========*/
    try {
        $('.tab__button').click(function () {
            const tabId = $(this).data('tab');
            $('.tab__button').removeClass('active');
            $(this).addClass('active');
            $('.tab__content').removeClass('open').hide();
            $('#' + tabId).addClass('open').show();
        });
        $('.tab__button[data-tab="tab1"]').click();
    } catch (error) {
        console.error('Tab Button not enable this page', error);
    }

    /*======== Price Range =========*/
    try {
        function updateValues() {
            var rangeValue = $('#priceRange').val();
            $('.value-left').text('0');
            $('.value-right').text('$' + rangeValue);
        }
        $('#priceRange').on('input', function () {
            updateValues();
        });
        updateValues();
    } catch (error) {
        console.log('Range Only Enable for Product page');
    }



    /*======== Delete Cart item =========*/
    try {
        function handleDeleteClick(event) {
            const row = event.target.closest('tr');
            if (row) {
                row.remove();
            }
        }
        const deleteIcons = document.querySelectorAll('.cart__delete');
        deleteIcons.forEach(icon => {
            icon.addEventListener('click', handleDeleteClick);
        });
    } catch (error) {
        console.log('Table Delete only enable for cart Page');
    }

    
        /*========== Button scroll up js ===========*/
        var scrollPath = document.querySelector(".scroll path");
        var pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
        scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = scrollPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        var updatescroll = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var scroll = pathLength - (scroll * pathLength) / height;
            scrollPath.style.strokeDashoffset = scroll;
        };
        updatescroll();
        $(window).scroll(updatescroll);
        var offset = 50;
        var duration = 950;
        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".scroll").addClass("active-scroll");
            } else {
                jQuery(".scroll").removeClass("active-scroll");
            }
        });
        jQuery(".scroll").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate(
                {
                    scrollTop: 0,
                },
                duration
            );
            return false;
        });


})(jQuery);