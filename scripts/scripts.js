window.addEventListener('DOMContentLoaded', function () {
    class Currency {

        constructor(name, type) {
            this.name = name;
            this.type = type;

            const wrapper = document.querySelector(`.${this.type}-currency`),
                currencyDOM = document.querySelector('.base-currency').innerHTML,
                newCurrency = document.createElement('div');

            newCurrency.classList.add('currency');
            newCurrency.innerHTML = currencyDOM;
            wrapper.prepend(newCurrency);
            
            changeContentHeigth();

            setTimeout(() => {
                newCurrency.classList.add('visible');
            }, 100);

            this.createdCurrency = newCurrency;
        }

        remove(canRemove) {
            
            const removeBtn = this.createdCurrency.querySelector('.remove'),
                  currency = this.createdCurrency;

            if (canRemove === true) {
                removeBtn.addEventListener('click', function () {
                    currency.classList.remove('visible');
                    setTimeout(() => {
                        currency.remove(currency);
                    }, 200);
                });  
            } else {
                removeBtn.classList.add('hidden');
            }

            changeContentHeigth();
        }

        select() {

        }

        active(active) {

        }

        enterNum() {

        }
    }

    function changeContentHeigth() {

        let currencyNum = document.querySelectorAll('.currency').length,
            content = document.querySelector('.unactive-currency'),
            heigth = content.querySelector('.currency').clientHeight;

        content.style.height = heigth * currencyNum + 54 + 'px';

    }

    function createCurrency() {
        let currency = new Currency('USD',  'unactive');
        changeContentHeigth();

        function checkCurrencyNum() {
            let currencyNum = document.querySelectorAll('.currency').length;

            if (currencyNum == 1) {
                return false;
            } else {
                return true;
            }

        } 

        currency.remove(checkCurrencyNum());

    }

    const addBtn = document.querySelector('.add-currency');

    addBtn.addEventListener('click', function () {
        createCurrency();
    });

    let currency = new Currency('USD', 'unactive');
    changeContentHeigth();


});


