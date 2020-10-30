sliderSettings = () => {
    $('#slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        fade: true,
        draggable: false
    });
};




document.addEventListener("DOMContentLoaded", function() {
    sliderSettings();
});