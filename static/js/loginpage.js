document.addEventListener('DOMContentLoaded', function () {
  const showPasswordCheckbox = document.getElementById('show-password');
  const passwordField = document.getElementById('password');

  showPasswordCheckbox.addEventListener('change', function () {
      if (this.checked) {
          passwordField.type = 'text';
      } else {
          passwordField.type = 'password';
      }
  });
});
