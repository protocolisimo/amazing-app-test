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

popupSwithHandler = () => {
    const sumonButton = document.querySelectorAll('button.button-request');
    const shadow = document.querySelector('.shadow');
    const modal = document.querySelector('.modal');

    sumonButton.forEach(button => {
        button.addEventListener('click', function () {
            modal.classList.toggle('open')
            document.body.classList.toggle('nonscroll');
        });
    });

    shadow.addEventListener('click', function () {
        modal.classList.toggle('open')
        document.body.classList.toggle('nonscroll');
    });
}


formValidationHandler = () => {
    const form = document.querySelector('.request-demo');
    const name = form.querySelector('.request-demo__name')
    const email = form.querySelector('.request-demo__email')
    const web = form.querySelector('.request-demo__web')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        if (!name.value) {
            name.classList.add('error')
        } else if (!email.value) {
            email.classList.add('error')
        } else if (!web.value) {
            web.classList.add('error')
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    sliderSettings();
    popupSwithHandler();
    formValidationHandler();
});