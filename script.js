document.getElementById("loginButton").addEventListener('click', function(e) {
    e.preventDefault();
    const mobileNumber = 12345678901;
    const mobileNumberConverted = parseInt(document.getElementById("mobile-number").value);

    const pinNumber = 1234;
    const pinNumberConverted = parseInt(document.getElementById("pin-number").value);

    if(mobileNumberConverted === mobileNumber && pinNumberConverted === pinNumber) {
        window.location.href = "./home.html";
    }
    else {
        alert("Invalid mobile number or pin number");
    }
});