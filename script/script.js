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

popupSwitcher = (element, className) => {
    element.classList.toggle(className)
    document.body.classList.toggle('nonscroll');
}

popupSwitchHandler = () => {
    const sumonButton = document.querySelectorAll('button.button-request');
    const shadow = document.querySelector('.shadow');
    const modal = document.querySelector('.modal');

    sumonButton.forEach(button => {
        button.addEventListener('click', () => {
            popupSwitcher(modal, 'open')
        });
    });

    shadow.addEventListener('click', () => {
        popupSwitcher(modal, 'open')
    });
}

headerMenuSwitcherHandler = () => {
    const header = document.querySelector('header');
    console.log(header)
    const burger = header.querySelector('.burger')

    burger.addEventListener('click', () => {
        popupSwitcher(header, 'menu-expandet');
    })
}

formValidationHandler = () => {
    const form = document.querySelector('.request-demo');
    const message = form.querySelector('.request-demo__message');
    const inputs = form.querySelectorAll('.require');

    const reEmail = /\S+@\S+\.\S+/;
    const reWeb = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    // require fields
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        form.querySelectorAll('.error').forEach(input => input.classList.remove('error'));
        
        let flag = true;
        for (const input of inputs) {
            const inputValue = input.value;

            if (
                (!inputValue || inputValue.trim() == '')
                || (input.classList.contains('request-demo__email') && !reEmail.test(inputValue))
                || (input.classList.contains('request-demo__web') && !reWeb.test(inputValue))
            ) {
                input.classList.add('error');
                flag = false;
                break
            }
        }

        if (!flag) return
        
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
    headerMenuSwitcherHandler();
    formValidationHandler();
    popupSwitchHandler();
    sliderSettings();
});