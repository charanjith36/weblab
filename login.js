console.log("ji");
document.getElementById('loginPage').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username')
    const password = document.getElementById('password')

    const usernameError = document.getElementById('usernameError')
    const passwordError = document.getElementById('passwordError')

    if (!/^[a-zA-Z0-9]{4,12}$/.test(username)) {
        // usernameError.textContent = 'Username must be 4-12 alphanumeric characters.';
        console.log("Username must be 4-12 alphanumeric characters.");
        isValid = false;
        alert('invalid')
    } else {
        usernameError.textContent = '';
    }


    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        passwordError.textContent =
            'Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Login successful!');
    }
});

document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    if (this.checked) {
      passwordField.type = 'text'; 
    } else {
      passwordField.type = 'password';
    }
  });
  
