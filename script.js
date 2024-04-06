document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('.form-container');
    
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        
        // Format the message for WhatsApp
        var phoneNumber = '916281810883'; // Add your recipient's phone number here
        var whatsappMessage = "Name: " + name + "%0AEmail: " + email + "%0AMessage: " + message;
        
        // Open WhatsApp with pre-filled message and recipient phone number
        window.open("https://wa.me/" + phoneNumber + "?text=" + whatsappMessage);
    });
});


function toggleMenu() {
    var menu = document.querySelector('.main-menu ul');
    menu.classList.toggle('show-menu');
}




var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("slideshow-container")[0].getElementsByTagName("img");
            var text = document.getElementsByClassName("text")[0];
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 4000); // Change image every 4 seconds
        }

        function plusSlides(n) {
            slideIndex += n;
            var slides = document.getElementsByClassName("slideshow-container")[0].getElementsByTagName("img");
            if (slideIndex > slides.length) {slideIndex = 1}
            else if (slideIndex < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slides[slideIndex-1].style.display = "block";
        }
