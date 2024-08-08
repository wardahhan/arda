document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        let isValid = true;
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        let errorMessages = [];

        if (name === '') {
            errorMessages.push('Nama harus diisi.');
        }

        if (email === '') {
            errorMessages.push('Email harus diisi.');
        } else if (!validateEmail(email)) {
            errorMessages.push('Email tidak valid.');
        }

        if (phone === '') {
            errorMessages.push('Telepon harus diisi.');
        } else if (!validatePhone(phone)) {
            errorMessages.push('Telepon tidak valid.');
        }

        if (errorMessages.length > 0) {
            event.preventDefault();
            alert(errorMessages.join('\n'));
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10,15}$/;
        return phonePattern.test(phone);
    }
});
