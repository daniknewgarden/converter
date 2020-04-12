window.addEventListener('DOMContentLoaded', function () {
    class currency {

        constructor(name) {
            this.name = name;
        }

        create(type) {

            this.type = type;

            let wrapper = document.querySelector(`.${this.type}-currency`),
                currency = document.querySelector('.currency').innerHTML,
                newCurrency = document.createElement('div');

            newCurrency.classList.add('currency');
            newCurrency.innerHTML = currency;
            wrapper.prepend(newCurrency);

        }

        remove(btn) {
            this.btn = btn;
        }

        select() {

        }

        active(active) {

            this.active = active;

            if (active === true) {
                console.log('true');
            }   else {
                console.log('false');
            }

        }

        enterNum() {

        }
    }

    let addBtn = document.querySelector('.add-currency');

    addBtn.addEventListener('click', function () {
        let e = new currency('USD');
        e.create('unactive');
    })
});
