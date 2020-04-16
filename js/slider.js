$(document).ready(function () {
    $('.main-slider').slick();
    $('.slider').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });
});