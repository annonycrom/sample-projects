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
 const slider = document.getElementById('slider');
 let scrollInterval;

 function startAutoScroll() {
     scrollInterval = setInterval(() => {
         slider.scrollLeft += slider.clientWidth;
         if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
             slider.scrollLeft = 0;
         }
     }, 1000); // Change this value to adjust the scroll speed (in milliseconds)
 }

 function stopAutoScroll() {
     clearInterval(scrollInterval);
 }

 startAutoScroll();

slider.addEventListener('mouseenter', stopAutoScroll);
slider.addEventListener('mouseleave', startAutoScroll);