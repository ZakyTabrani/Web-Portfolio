document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("messageError").textContent = "";
        document.getElementById("genderError").textContent = "";
        document.getElementById("statusError").textContent = "";
        document.getElementById("purposesError").textContent = "";

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const message = document.getElementById("message").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const status = document.getElementById("status").value;
        const purposes = document.querySelectorAll('input[name="purposes"]:checked');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10,15}$/;

        let valid = true;

        if (fullname === "") {
            document.getElementById("nameError").textContent = "Name is required.";
            valid = false;
        }

        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            valid = false;
        }

        if (!phonePattern.test(phoneNumber)) {
            document.getElementById("phoneError").textContent = "Please enter a valid phone number (10-15 digits).";
            valid = false;
        }

        if (message === "") {
            document.getElementById("messageError").textContent = "Message is required.";
            valid = false;
        }

        if (!gender) {
            document.getElementById("genderError").textContent = "Please select a gender.";
            valid = false;
        }

        if (status === "") {
            document.getElementById("statusError").textContent = "Please select a status.";
            valid = false;
        }

        if (purposes.length === 0) {
            document.getElementById("purposesError").textContent = "Please select at least one purpose.";
            valid = false;
        }

        if (valid) {
            const purposesText = Array.from(purposes).map(p => p.value).join(", ");
            const genderValue = gender ? gender.value : "";
            const whatsappMessage = `Hello, my name is ${fullname}.%0AEmail: ${email}%0APhone: ${phoneNumber}%0AGender: ${genderValue}%0AStatus: ${status}%0APurposes: ${purposesText}%0AMessage: ${message}`;
            const whatsappUrl = `https://wa.me/6281291993908?text=${whatsappMessage}`;
            
            window.open(whatsappUrl, '_blank');
        }
    });
});

document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
