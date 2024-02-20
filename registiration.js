document.getElementById("signupButton").addEventListener("click", function() {
    
    var fullName = document.getElementById("fullName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var city = document.getElementById("city").value.trim();
    var gender = document.getElementById("female").checked || document.getElementById("male").checked;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var namePattern = /^[A-Za-z ]+$/;

    if (fullName === "" || email === "" || password === "" || city === "" || !gender) {
        alert("Please fill in all fields!");
        return;
    }
    if (!fullName.match(namePattern)) {
        alert('Please enter a valid name (letters only)');
        return;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address');
        return;
    }
    if (!city.match(namePattern)) {
        alert('Please enter a valid city name (letters only)');
        return;
    }
    
    window.location.href = "Login.html";
});
