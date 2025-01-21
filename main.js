$(document).ready(function () {
    $(".slick-slider").each(function () {
        let slider = $(this);
        let options = {
            infinite: true,
            prevArrow: slider.parent().find(".slider-prev"),
            nextArrow: slider.parent().find(".slider-next"),
        };
        let extra = {};
        if (slider.hasClass("slider")) {
            extra = {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                        },
                    },
                ],
            };
        } else if (slider.hasClass("slider-items")) {
            extra = {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 990,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true,
                        },
                    },
                ],
            };
        } else if (slider.hasClass("slider-tours")) {
            extra = {
                slidesToShow: 1.8,
                slidesToScroll: 1,
                centerMode: false,
                dots: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1440,
                        settings: {
                            slidesToShow: 1.9,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 990,
                        settings: {
                            slidesToShow: 1.2,
                            centerMode: false,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                            slidesToScroll: 1,
                        },
                    },
                ],
            };
        } else if (slider.hasClass("slider-service")) {
            extra = {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                        },
                    },
                ],
            };
        } else if (slider.hasClass("slider-cards")) {
            extra = {
                slidesToShow: 3.9,
                slidesToScroll: 1,
                centerMode: false,
                dots: false,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1440,
                        settings: {
                            slidesToShow: 2.9,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 990,
                        settings: {
                            slidesToShow: 1,
                            centerMode: true,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                            arrows: false,
                            slidesToScroll: 1,
                        },
                    },
                ],
            };
        } else if (slider.hasClass("slider-testimonials")) {
            extra = {
                slidesToShow: 1.9,
                slidesToScroll: 1,
                centerMode: true,
                dots: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1440,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 990,
                        settings: {
                            slidesToShow: 1,
                            centerMode: true,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false,
                        },
                    },
                ],
            };
        } else if (slider.hasClass("slider-countries")) {
            extra = {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            };
        }
        slider.slick($.extend({}, options, extra));
    });
});
