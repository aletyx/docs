/**
 * Enhanced SVG dark mode switcher with debug mode
 * This script handles SVG color adaptation for both light and dark themes
 * with improved debugging and error handling
 */

// Enable debug mode to see console logs
const DEBUG = true;

// Helper function for logging when debug is enabled
function debugLog(...args) {
  if (DEBUG) {
    console.log('[SVG-FIX]', ...args);
  }
}

// Function to check if an image exists
function imageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

// Main function to fix SVG colors
async function fixSvgImages() {
  debugLog('Running fixSvgImages()');

  // Check if we're in dark mode - MkDocs Material sets this on documentElement, not body
  const isDarkMode = document.documentElement.getAttribute('data-md-color-scheme') === 'slate';
  debugLog('Dark mode:', isDarkMode);

  // Count how many SVGs we're processing
  const svgImages = document.querySelectorAll('img[src$=".svg"]');
  debugLog(`Found ${svgImages.length} SVG images`);

  // Process each SVG image
  for (const img of svgImages) {
    try {
      // Store original source if not already stored
      if (!img.dataset.originalSrc) {
        img.dataset.originalSrc = img.src;
        debugLog('Stored original src:', img.src);
      }

      if (isDarkMode) {
        // In dark mode, switch to dark version or apply filter
        const darkSrc = img.dataset.originalSrc.replace('.svg', '-dark.svg');
        debugLog('Attempting to load dark version:', darkSrc);

        // Check if dark version exists
        const darkExists = await imageExists(darkSrc);

        if (darkExists) {
          debugLog('Dark version exists, switching to:', darkSrc);
          img.src = darkSrc;
        } else {
          debugLog('Dark version not found, applying filter');
          img.src = img.dataset.originalSrc;
          img.style.filter = 'brightness(0) invert(1)';
        }
      } else {
        // In light mode, revert to original
        debugLog('Light mode, reverting to original');
        img.src = img.dataset.originalSrc;
        img.style.filter = 'none';
      }
    } catch (error) {
      console.error('[SVG-FIX] Error processing SVG:', img.src, error);
    }
  }

  // Also handle direct SVG elements
  const svgElements = document.querySelectorAll('svg');
  debugLog(`Found ${svgElements.length} direct SVG elements`);

  svgElements.forEach(svg => {
    try {
      if (isDarkMode) {
        svg.style.filter = 'brightness(0) invert(1)';
      } else {
        svg.style.filter = 'none';
      }
    } catch (error) {
      console.error('[SVG-FIX] Error processing SVG element:', error);
    }
  });

  debugLog('SVG processing complete');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  debugLog('DOM loaded, initializing SVG fix');

  // Run immediately
  fixSvgImages();

  // Set up observer for theme changes on documentElement (where MkDocs Material sets the attribute)
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'data-md-color-scheme') {
        debugLog('Theme change detected');
        fixSvgImages();
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });
  debugLog('MutationObserver set up for theme changes on documentElement');

  // Also listen for the Material for MkDocs theme change event
  document.addEventListener('DOMColorSchemeChange', () => {
    debugLog('DOMColorSchemeChange event detected');
    fixSvgImages();
  });

  // Add a manual trigger for theme detection (helps with some edge cases)
  setTimeout(fixSvgImages, 1000);
});

// Fallback to handle cases where DOMContentLoaded might have already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  debugLog('Document already loaded, initializing with delay');
  setTimeout(fixSvgImages, 100);
}
