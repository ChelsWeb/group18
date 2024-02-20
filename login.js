document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email.trim() === "") {
        alert("Please enter your email");
        return;
    }
    
    if (password.trim() === "") {
        alert("Please enter your password");
        return;
    }

    if (email === "racheli@gmail.com" && password === "password") {
        
        window.location.href = "Explore.html";
    } else {
        
        alert("Invalid email or password");
    }
});
