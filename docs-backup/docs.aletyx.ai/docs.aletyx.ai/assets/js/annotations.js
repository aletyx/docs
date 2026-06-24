/**
 * Annotation Tooltip System
 * Handles hover and click interactions for image annotations
 */
(function() {
  function positionTooltip(marker, tooltip) {
    const container = marker.closest('.annotated-image-container');
    if (!container) return;

    const markerRect = marker.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Get marker position relative to container
    const markerLeft = markerRect.left - containerRect.left;
    const markerTop = markerRect.top - containerRect.top;

    let left, top;

    // Simple rule: if marker is past halfway point of image, anchor tooltip to LEFT side
    // Otherwise anchor to RIGHT of marker
    const containerHalfway = containerRect.width / 2;

    if (markerLeft > containerHalfway) {
      // Marker is on right half - anchor tooltip to LEFT edge of container
      left = 10;
    } else {
      // Marker is on left half - position tooltip to RIGHT of marker
      left = markerLeft + 30;
    }

    top = markerTop;

    tooltip.style.position = 'absolute';
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.display = 'block';
    tooltip.classList.add('visible');
  }

  function hideAllTooltips() {
    document.querySelectorAll('.annotation-tooltip').forEach(t => {
      t.style.display = 'none';
      t.classList.remove('visible');
    });
  }

  function init() {
    console.log('[Annotations] Initializing annotation system');

    document.querySelectorAll('.annotation-marker').forEach(marker => {
      // Click handler - pin tooltip
      marker.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const markerId = this.getAttribute('data-marker-id');
        const container = this.closest('.annotated-image-container');
        const tooltip = container.querySelector(`.annotation-tooltip[data-marker-id="${markerId}"]`);

        if (!tooltip) return;

        // If this tooltip is already visible, hide it (toggle)
        if (tooltip.classList.contains('visible')) {
          tooltip.style.display = 'none';
          tooltip.classList.remove('visible');
          return;
        }

        // Hide all others, show this one
        hideAllTooltips();
        positionTooltip(this, tooltip);
      });

      // Hover handler
      marker.addEventListener('mouseenter', function() {
        const markerId = this.getAttribute('data-marker-id');
        const container = this.closest('.annotated-image-container');
        const tooltip = container.querySelector(`.annotation-tooltip[data-marker-id="${markerId}"]`);

        if (tooltip && !tooltip.classList.contains('visible')) {
          positionTooltip(this, tooltip);
        }
      });

      marker.addEventListener('mouseleave', function() {
        const markerId = this.getAttribute('data-marker-id');
        const container = this.closest('.annotated-image-container');
        const tooltip = container.querySelector(`.annotation-tooltip[data-marker-id="${markerId}"]`);

        // Only hide on mouseleave if it wasn't pinned by click
        setTimeout(() => {
          if (tooltip && !tooltip.matches(':hover') && !this.dataset.pinned) {
            tooltip.style.display = 'none';
            tooltip.classList.remove('visible');
          }
        }, 300);
      });
    });

    // Click outside to close all
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.annotation-marker') && !e.target.closest('.annotation-tooltip')) {
        hideAllTooltips();
      }
    });

    console.log('[Annotations] Found', document.querySelectorAll('.annotation-marker').length, 'markers');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Reinit on page navigation using MkDocs Material's document$ observable
  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => {
      console.log('[Annotations] Page switched via instant navigation');
      setTimeout(init, 300);
    });
  }
})();
