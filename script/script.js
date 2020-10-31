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

popupSwitchHandler = () => {
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
    const inputs = form.querySelectorAll('.require');
    const message = form.querySelector('.request-demo__message');
    const reEmail = /\S+@\S+\.\S+/;
    const reWeb = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    // require fields
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        form.querySelectorAll('.error').forEach(input => input.classList.remove('error'))

        inputs.forEach(input => {
            const inputValue = input.value;
            
            if (!inputValue || inputValue.trim() == '') {
                input.classList.add('error');
                return false
            } else if (input.classList.contains('request-demo__email') && !reEmail.test(inputValue)) {
                input.classList.add('error');
                return false
            } else if (input.classList.contains('request-demo__web') && !reWeb.test(inputValue)) {
                input.classList.add('error');
                return false
            }
        })

        form.submit()
    });

    // message limitation
    
    message.oninput = () => {
        if (message.value.length >= 180) {
            message.classList.add('error')
        } else message.classList.remove('error')
    }
}

document.addEventListener("DOMContentLoaded", function() {
    sliderSettings();
    popupSwitchHandler();
    formValidationHandler();
});