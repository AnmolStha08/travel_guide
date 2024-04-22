// JavaScript for showing/hiding password
document.addEventListener('DOMContentLoaded', function () {
    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');

    showPasswordCheckbox.addEventListener('change', function () {
        if (this.checked) {
            passwordField.type = 'text';
            confirmPasswordField.type = 'text';
        } else {
            passwordField.type = 'password';
            confirmPasswordField.type = 'password';
        }
    });
});
