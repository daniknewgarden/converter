window.addEventListener('DOMContentLoaded', function () {

    class currency {
        
    }
    
    function currencyControl() {

        let currency = document.querySelectorAll('.currency'),
            removeBtn = document.querySelectorAll('.currency');

            function remove() {
                for (let i = 0; i < currency.length; i++) {
                    currency[i].classList.add('hide');
                }
            }
            for (let i = 0; i < removeBtn.length; i++) {
                removeBtn[i].addEventListener('click', remove);
            }
            
    }

    currencyControl();

});
