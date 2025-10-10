// Background Slideshow Controller
(function() {
  'use strict';

  // Get all slides
  const slides = document.querySelectorAll('.slide');

  if (slides.length === 0) {
    console.warn('No slides found for slideshow');
    return;
  }

  let currentSlide = 0;

  // Get transition speed from data attribute or use default (3 seconds)
  const transitionSpeed = parseInt(document.body.dataset.slideshowSpeed) || 3000;

  function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');

    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Add active class to new slide
    slides[currentSlide].classList.add('active');
  }

  // Only start slideshow if there's more than one slide
  if (slides.length > 1) {
    // Start the slideshow
    setInterval(nextSlide, transitionSpeed);
  }
})();
