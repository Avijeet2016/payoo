document.getElementById('login-btn').addEventListener('click', function() {
    const inputMobile = document.getElementById('input-mobile');
    const contactNumber = inputMobile.value;
    
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    
    if (contactNumber == "01234567890" && pin == "1234") {
        alert('Login successful');
        window.location.assign('/home.html');
    }
    else {
        alert('Login Failed');
        return;
    }
});