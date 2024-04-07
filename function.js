// JavaScript to hide the logo when scrolled
window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    if (window.scrollY > 50) { // Change 50 to your desired scroll position
        logo.classList.add('hidden');
    } else {
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
