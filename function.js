// JavaScript to hide the logo when scrolled
window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var screenWidth = window.innerWidth;

    if (screenWidth > 468) { // Check for big screens
        if (window.scrollY > 50) {
            logo.classList.add('hidden');
        } else {
            logo.classList.remove('hidden');
        }
    } else { // Check for small screens
        logo.classList.remove('hidden');
    }
});

window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var screenWidth = window.innerWidth;

    if (screenWidth > 468) { // Check for big screens
        if (window.scrollY > 50) {
            logo.classList.add('hidden');
        } else {
            logo.classList.remove('hidden');
        }
    } else { // Check for small screens
        logo.classList.remove('hidden');
    }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}


document.addEventListener('DOMContentLoaded', function() {
    var screenWidth = window.innerWidth;
    var barIcon = document.querySelector('.fa-bars');
    var nav = document.querySelector('nav');

    // Hide the navigation contents by default for small screens
    if (screenWidth <= 468) {
        nav.style.display = 'none';
    }

    // Toggle visibility of navigation contents when the bar icon is clicked for small screens
    if (screenWidth <= 468) {
        barIcon.addEventListener('click', function() {
            if (nav.style.display === 'none' || nav.style.display === '') {
                nav.style.display = 'block'; // Show navigation contents if hidden
            } else {
                nav.style.display = 'none'; // Hide navigation contents if shown
            }
        });
    }

    // Hide the bar icon if the screen is big
    if (screenWidth > 468) {
        barIcon.style.display = 'none'; // Hide the bar icon
    }

    // Automatically hide navigation contents when clicked
    nav.addEventListener('click', function() {
        if (screenWidth <= 468) {
            nav.style.display = 'none';
        }
    });
});

// Event listener to resize navigation visibility when screen size changes
window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var nav = document.querySelector('nav');

    // Hide the navigation contents by default for small screens
    if (screenWidth <= 468) {
        nav.style.display = 'none'; // Hide navigation contents
    } else {
        nav.style.display = 'block'; // Show navigation contents for larger screens
    }

    // Hide the bar icon if the screen is big
    if (screenWidth > 468) {
        var barIcon = document.querySelector('.fa-bars');
        barIcon.style.display = 'none'; // Hide the bar icon
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Get all toggle buttons
    var toggleButtons = document.querySelectorAll('.toggle-btn');

    // Add click event listener to each toggle button
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle visibility of the paragraph
            var paragraph = this.previousElementSibling;
            if (paragraph.style.display === 'none') {
                paragraph.style.display = 'block';
            } else {
                paragraph.style.display = 'none';
            }
        });
    });
});


 // JavaScript for automatic scrolling
 function startSlider() {
            var slides = document.querySelectorAll('.slider img');
            var currentSlide = 0;
            var slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

            function nextSlide() {
                slides[currentSlide].style.display = 'none';
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].style.display = 'block';
            }
        }
        
