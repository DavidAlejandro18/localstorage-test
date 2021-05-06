(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation');
    
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
            
            if (form.checkValidity()) {
                let nameItem = nombre.value;
                let valueItem = valor.value;

                localStorage.setItem(nameItem, valueItem);

                listItem();
                nombre.value = '';
                valor.value = '';

                form.classList.remove('was-validated');
            } else {
                form.classList.add('was-validated');
            }

        }, false)
    })

    listItem();
})()