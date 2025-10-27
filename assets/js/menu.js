// Action Buttons and Navigation Controller
(function() {
  'use strict';

  const actionButtonsSection = document.getElementById('actionButtonsSection');
  const actionButtons = document.querySelectorAll('.action-button');
  const heroTitle = document.getElementById('typewriter-title');
  const navTitle = document.getElementById('navTitle');
  const topNav = document.getElementById('topNav');
  
  if (!actionButtonsSection || actionButtons.length === 0) {
    console.warn('Action buttons section or buttons not found');
    return;
  }

  // Handle scroll-based title animation
  function handleScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollProgress = Math.min(scrollY / (viewportHeight * 0.8), 1);

    if (heroTitle) {
      // Shrink and fade hero title as user scrolls
      const scale = 1 - (scrollProgress * 0.3); // Shrink to 70%
      const opacity = 1 - (scrollProgress * 0.7); // Fade to 30%
      
      heroTitle.style.transform = `scale(${scale})`;
      heroTitle.style.opacity = opacity;
    }

    if (navTitle && topNav) {
      // Show nav title and expand nav bar when scroll progress > 0.5
      if (scrollProgress > 0.5) {
        navTitle.classList.add('visible');
        topNav.classList.add('expanded');
      } else {
        navTitle.classList.remove('visible');
        topNav.classList.remove('expanded');
      }
    }
  }

  // Create individual observers for each button
  const buttonObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
        // Add a small delay for smooth effect
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 100);
      } else if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
        // Slide out when less than 30% visible
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: [0, 0.3], // Trigger at 0% and 30% visibility
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before button is fully visible
  });

  // Observe each button individually
  actionButtons.forEach(button => {
    buttonObserver.observe(button);
  });

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initial scroll check
  handleScroll();

  // Preview image functionality
  const previewImage = document.getElementById('previewImage');
  
  // Add hover and click handlers to action buttons
  actionButtons.forEach(button => {
    // Mouse enter - show preview image
    button.addEventListener('mouseenter', function() {
      const previewSrc = this.dataset.preview;
      if (previewSrc && previewImage) {
        previewImage.style.backgroundImage = `url('${previewSrc}')`;
        previewImage.classList.add('visible');
      }
    });

    // Mouse leave - hide preview image
    button.addEventListener('mouseleave', function() {
      if (previewImage) {
        previewImage.classList.remove('visible');
      }
    });

    // Click handler
    button.addEventListener('click', function(e) {
      const action = this.dataset.action;
      console.log('Action button clicked:', action);
      // Links are handled by the <a> tag href attribute
    });
  });

})();