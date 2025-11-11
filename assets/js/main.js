// Simple JavaScript for arkitect site
// Handles basic interactions and menu functionality

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle (if needed in future)
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      // Mobile menu logic here
    });
  }

  // Share button functionality
  const shareButtons = document.querySelectorAll('.share-button');
  shareButtons.forEach(button => {
    button.addEventListener('click', function() {
      const ariaLabel = this.getAttribute('aria-label');
      if (ariaLabel && ariaLabel.includes('Share on Twitter')) {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
      } else if (ariaLabel && ariaLabel.includes('Copy Link')) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          // Show feedback (could add toast notification)
          console.log('Link copied to clipboard');
        });
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

