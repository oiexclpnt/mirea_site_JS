window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const filterItems = document.querySelectorAll('.item');
    let itemContent = document.querySelectorAll('.item');

//    function hideItemContent(a) {
//        for (let i = a; i < itemContent.length; i++){
//            itemContent[i].classList.remove('show');
//            itemContent[i].classList.add('hide')
//        }
//    }
    //hideItemContent(8);
    document.querySelector('nav').addEventListener('click', event => {
        if (event.target.tagName !== 'BUTTON') return false;

        let filterClass = event.target.dataset['f'];

        //console.log(filterClass);
        //console.log(filterItems);

        filterItems.forEach(elem => {
            elem.classList.remove('hide');
            if (filterClass)
                if (!elem.classList.contains(filterClass)) {
                    elem.classList.add('hide');
                };
        });

        
    });

    const accordion = () => {
        const btns = document.querySelectorAll(".show__packs");
        btns.forEach((btn) => {
            btn.addEventListener("click", function () {
                this.classList.toggle("active-style");
                //Следующий элемент
                this.nextElementSibling.classList.toggle("active-content");
                if (this.classList.contains("active-style")) {
                    this.nextElementSibling.style.maxHeight =
                        this.nextElementSibling.scrollHeight + 50 + "px";
                } else {
                    this.nextElementSibling.style.maxHeight = "0px";
                }
            });
        });
    };
    accordion();

    

    const hamb = document.querySelector("#hamburger");
    const popup = document.querySelector("#popup");
    const menu = document.querySelector("#menu").cloneNode(1);

    hamb.addEventListener("click", hambHandler);

    function hambHandler(e) {
        popup.classList.toggle('open');
        renderPopup();
    }
    function renderPopup() {
        popup.appendChild(menu);
    }

    const entr1 = document.getElementById('emailEntry');
    const subBtn = document.getElementById('subBtn');
    let inputText = entr1.value;
    subBtn.addEventListener('click', event => {
        console.log(inputText);
        if (inputText.indexOf("@mail.ru")) {
            alert(`Спасибо! Теперь на почту ${entr1.value} будут приходить новости!`)
        }
        event.preventDefault();
    });
});