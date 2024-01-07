var input = document.getElementById('myInput');
        var button = document.getElementById('myButton');

        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.classList.add('typing');
            } else {
                this.classList.remove('typing');
            }
        });

        button.addEventListener('click', function() {
            this.classList.add('loading');
            this.disabled = true;
            input.disabled = true;

            setTimeout(function() {
                button.classList.remove('loading');
                button.disabled = false;
                input.disabled = false;
            }, 2000);
        });



