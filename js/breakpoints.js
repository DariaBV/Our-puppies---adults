function sliderOurPuppiesAndAdults() {
    $('.our-puppies-and-adults__carousel-items').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
        ]
    });
}