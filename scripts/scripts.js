window.addEventListener('DOMContentLoaded', function () {

    class currency {
        
    }
    
    function currencyControl() {

        let currency = document.querySelectorAll('.currency'),
            removeBtn = document.querySelectorAll('.currency');

            function remove() {
                for (let i = 0; i < currency.length; i++) {
                    currency[0].classList.add('hide');
                }
            }
            for (let i = 0; i < removeBtn.length; i++) {
                removeBtn[0].addEventListener('click', remove());
            }
            
    }

    currencyControl();


});
