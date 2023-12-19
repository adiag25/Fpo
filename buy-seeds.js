document.addEventListener('DOMContentLoaded', function () {
    const quantityInputs = document.querySelectorAll('.quantity-input');

    quantityInputs.forEach(function (input) {
        const decreaseBtn = input.parentNode.querySelector('.decrease-btn');
        const increaseBtn = input.parentNode.querySelector('.increase-btn');

        decreaseBtn.addEventListener('click', function () {
            decreaseQuantity(input);
        });

        increaseBtn.addEventListener('click', function () {
            increaseQuantity(input);
        });
    });

    function decreaseQuantity(input) {
        let currentValue = parseInt(input.value, 10);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    }

    function increaseQuantity(input) {
        let currentValue = parseInt(input.value, 10);
        input.value = currentValue + 1;
    }
});
