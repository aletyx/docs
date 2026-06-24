/**
 * Image Path Fix and Reinitialization
 * Handles image loading on both initial load and instant navigation
 */
(function() {
  let observer = null;

  function initImageFixes() {
    console.log('[ImageFix] Initializing image fixes');

    // Fix for broken image paths in feature cards
    const featureCardImages = document.querySelectorAll('.feature-card img[src^="../"]');

    featureCardImages.forEach(img => {
      // Remove the leading "../" from the path
      let imgSrc = img.getAttribute('src');
      if (imgSrc.startsWith('../')) {
        imgSrc = imgSrc.substring(3);
        img.setAttribute('src', imgSrc);
      }
    });

    // Handle potential dark mode relative paths
    const handleDarkModeImages = () => {
      const isDarkMode = document.querySelector('body').getAttribute('data-md-color-scheme') === 'slate';

      document.querySelectorAll('.feature-card .feature-icon img[src$=".svg"]').forEach(img => {
        const currentSrc = img.getAttribute('src');

        // Don't modify if already using dark variant
        if (currentSrc.includes('-dark.svg')) {
          return;
        }

        // Create path for dark variant
        const darkSrc = currentSrc.replace('.svg', '-dark.svg');

        if (isDarkMode) {
          // Try to preload the dark image to check if it exists
          const preloadImg = new Image();
          preloadImg.onload = function() {
            img.setAttribute('src', darkSrc);
          };
          preloadImg.onerror = function() {
            // If dark version doesn't exist, apply filter via CSS
            img.classList.add('use-svg-filter');
          };
          preloadImg.src = darkSrc;
        } else {
          // Ensure we're using the light version in light mode
          if (img.getAttribute('src').includes('-dark.svg')) {
            img.setAttribute('src', currentSrc);
          }
          img.classList.remove('use-svg-filter');
        }
      });
    };

    // Run initially
    handleDarkModeImages();

    // Watch for theme changes (disconnect old observer first)
    if (observer) {
      observer.disconnect();
    }

    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-md-color-scheme') {
          handleDarkModeImages();
        }
      });
    });

    observer.observe(document.querySelector('body'), {
      attributes: true,
      attributeFilter: ['data-md-color-scheme']
    });

    console.log('[ImageFix] Initialization complete');
  }

  // Initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageFixes);
  } else {
    initImageFixes();
  }

  // Reinit on instant navigation using MkDocs Material's document$ observable
  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => {
      console.log('[ImageFix] Page switched via instant navigation');
      setTimeout(initImageFixes, 100);
    });
  }
})();
