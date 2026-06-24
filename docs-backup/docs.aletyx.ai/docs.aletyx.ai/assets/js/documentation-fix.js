/**
 * Initialize all documentation fixes
 * This runs on both initial load and instant navigation
 */
function initDocumentationFixes() {
	console.log('[DocFix] Initializing documentation fixes');

	// Fix navigation button text visibility
	fixNavigationButtons();

	// Initialize image maps
	initializeImageMaps();

	// Initialize image annotations
	initializeImageAnnotations();
}

// Run on initial page load
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initDocumentationFixes);
} else {
	initDocumentationFixes();
}

// Reinit on instant navigation using MkDocs Material's document$ observable
if (typeof document$ !== 'undefined') {
	document$.subscribe(() => {
		console.log('[DocFix] Page switched via instant navigation, reinitializing');
		setTimeout(initDocumentationFixes, 100);
	});
}

// Handle window resize for responsive elements
window.addEventListener('resize', function () {
	clearTimeout(window.resizeTimeout);
	window.resizeTimeout = setTimeout(function () {
		initializeImageMaps();
	}, 200);
});

// Monitor theme changes
const themeObserver = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if (mutation.attributeName === 'data-md-color-scheme') {
			// Theme changed, update navigation and other elements
			fixNavigationButtons();
			initializeImageAnnotations(); // Update marker colors
		}
	});
});

themeObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ['data-md-color-scheme']
});

/**
 * Fix navigation button text visibility issues
 */
function fixNavigationButtons() {
	const navButtons = document.querySelectorAll('.nav-button:not(.disabled)');

	navButtons.forEach(button => {
		const href = button.getAttribute('href');
		if (!href) return;

		// Force text visibility for all child elements
		const allElements = button.querySelectorAll('*');
		allElements.forEach(el => {
			// Determine appropriate color based on theme
			const isDarkTheme = document.documentElement.getAttribute('data-md-color-scheme') === 'slate';
			const textColor = isDarkTheme ? 'rgba(255, 255, 255, 0.9)' : '#000000';

			// Apply appropriate styles based on element type
			if (el.tagName === 'svg' || el.tagName === 'SVG' ||
				el.tagName === 'line' || el.tagName === 'polyline' ||
				el.tagName === 'path') {
				el.style.stroke = textColor;
				el.style.fill = 'none';
			} else {
				el.style.color = textColor;
			}

			// Special case for direction text
			if (el.classList.contains('nav-direction')) {
				el.style.opacity = '0.7';
			} else {
				el.style.opacity = '1';
			}

			el.style.visibility = 'visible';

			// Apply display properties based on element type
			if (el.tagName === 'SPAN') {
				el.style.display = 'inline-block';
			} else if (el.classList.contains('nav-content')) {
				el.style.display = 'flex';
			}
		});

		// Parse URLs to detect cross-section navigation
		const currentPath = window.location.pathname.split('/').filter(Boolean);
		const targetPath = href.split('/').filter(Boolean);

		// Check if this is parent navigation (contains '..')
		const isParentNav = href.includes('..');

		// Check if this is cross-section navigation
		const isCrossSectionNav = currentPath.length > 0 && targetPath.length > 0 &&
			currentPath[0] !== targetPath[0] && !isParentNav;

		// Fix missing text in navigation
		const title = button.querySelector('.nav-title');
		if (title && (!title.textContent || title.textContent.trim() === '')) {
			// Extract name from URL
			if (isParentNav) {
				const parts = href.split('/');
				let pageName = parts[parts.length - 1] || parts[parts.length - 2] || '';
				pageName = pageName.replace(/\.html$|\.md$/, '')
					.replace(/-/g, ' ')
					.replace(/\b\w/g, l => l.toUpperCase());

				title.textContent = pageName || (button.classList.contains('nav-prev') ? 'Previous Section' : 'Next Section');
			} else if (isCrossSectionNav || targetPath.length > 0) {
				let pageName = targetPath[targetPath.length - 1] || '';
				pageName = pageName.replace(/\.html$|\.md$/, '')
					.replace(/-/g, ' ')
					.replace(/\b\w/g, l => l.toUpperCase());

				title.textContent = pageName || (button.classList.contains('nav-prev') ? 'Previous Section' : 'Next Section');
			} else {
				title.textContent = button.classList.contains('nav-prev') ? 'Previous Section' : 'Next Section';
			}
		}

		// Add section indicator if this is cross-section navigation
		if ((isCrossSectionNav || isParentNav) && !button.querySelector('.nav-section')) {
			const title = button.querySelector('.nav-title');

			if (title) {
				// Determine section name
				let sectionName = '';

				if (isParentNav) {
					sectionName = currentPath[0] || '';
				} else if (targetPath.length > 0) {
					sectionName = targetPath[0] || '';
				}

				// Format section name
				sectionName = sectionName.replace(/-/g, ' ')
					.replace(/\b\w/g, l => l.toUpperCase());

				// Create section indicator
				if (sectionName) {
					const sectionEl = document.createElement('span');
					sectionEl.className = 'nav-section';
					sectionEl.textContent = sectionName + ':';

					// Apply styles for guaranteed visibility
					const isDarkTheme = document.documentElement.getAttribute('data-md-color-scheme') === 'slate';
					const textColor = isDarkTheme ? 'rgba(255, 255, 255, 0.9)' : '#000000';
					sectionEl.style.color = textColor;
					sectionEl.style.visibility = 'visible';
					sectionEl.style.display = 'inline-block';

					// Insert before title
					title.parentNode.insertBefore(sectionEl, title);
				}
			}
		}
	});
}

/**
 * Initialize image maps using data-areas attribute
 */
function initializeImageMaps() {
	// Find all image map containers
	const mapContainers = document.querySelectorAll('.image-map-container');

	mapContainers.forEach(function (container) {
		// Get the image and map elements
		const image = container.querySelector('.image-map');
		const imageMap = container.querySelector('map');

		if (!image || !imageMap) return;

		// Clear existing areas and highlights
		while (imageMap.firstChild) {
			imageMap.removeChild(imageMap.firstChild);
		}

		// Remove existing highlights
		container.querySelectorAll('.area-highlight').forEach(function (highlight) {
			highlight.remove();
		});

		// Get image dimensions
		const imageWidth = image.width;
		const imageHeight = image.height;

		// Check if we have a data-areas attribute
		let areasData = [];
		try {
			// Try to parse areas from the data attribute
			const areasAttr = container.getAttribute('data-areas');
			if (areasAttr) {
				areasData = JSON.parse(areasAttr);
			}
		} catch (e) {
			console.error('Error parsing image map data:', e);
			return;
		}

		// Create tooltip element if it doesn't exist
		let tooltip = container.querySelector('.image-map-tooltip');
		if (!tooltip) {
			tooltip = document.createElement('div');
			tooltip.className = 'image-map-tooltip';
			container.appendChild(tooltip);
		}

		// Process each area
		areasData.forEach(function (areaData) {
			// Create area element for the image map
			const area = document.createElement('area');
			area.setAttribute('shape', 'rect');

			// Convert percentage to pixels
			const leftX = Math.round(areaData.coords.left * imageWidth / 100);
			const topY = Math.round(areaData.coords.top * imageHeight / 100);
			const rightX = Math.round(areaData.coords.right * imageWidth / 100);
			const bottomY = Math.round(areaData.coords.bottom * imageHeight / 100);

			area.setAttribute('coords', `${leftX},${topY},${rightX},${bottomY}`);
			area.setAttribute('alt', areaData.alt || '');
			area.setAttribute('title', areaData.tooltip || '');
			area.setAttribute('data-area-id', areaData.id || '');
			area.className = 'image-map-area';

			imageMap.appendChild(area);

			// Create highlight element
			const highlight = document.createElement('div');
			highlight.className = 'area-highlight';
			highlight.dataset.areaId = areaData.id || '';
			highlight.style.left = `${areaData.coords.left}%`;
			highlight.style.top = `${areaData.coords.top}%`;
			highlight.style.width = `${areaData.coords.right - areaData.coords.left}%`;
			highlight.style.height = `${areaData.coords.bottom - areaData.coords.top}%`;
			highlight.style.borderColor = areaData.color || '#e63946';

			container.appendChild(highlight);

			// Add event listeners for the area
			area.addEventListener('mouseover', function (e) {
				// Show tooltip
				const tooltipText = this.getAttribute('title');
				if (tooltipText) {
					tooltip.textContent = tooltipText;
					tooltip.style.display = 'block';

					// Position tooltip near cursor
					positionTooltip(e);
				}

				// Highlight matching area
				container.querySelector(`.area-highlight[data-area-id="${this.getAttribute('data-area-id')}"]`).classList.add('active');

				// Highlight matching text section
				const textSection = document.querySelector(`.section-${this.getAttribute('data-area-id')}`);
				if (textSection) {
					textSection.classList.add('section-active');
				}
			});

			area.addEventListener('mouseout', function () {
				tooltip.style.display = 'none';
				container.querySelector(`.area-highlight[data-area-id="${this.getAttribute('data-area-id')}"]`).classList.remove('active');

				const textSection = document.querySelector(`.section-${this.getAttribute('data-area-id')}`);
				if (textSection) {
					textSection.classList.remove('section-active');
				}
			});

			area.addEventListener('mousemove', function (e) {
				positionTooltip(e);
			});
		});

		// Function to position tooltip
		function positionTooltip(e) {
			const containerRect = container.getBoundingClientRect();
			const x = e.clientX - containerRect.left;
			const y = e.clientY - containerRect.top;

			tooltip.style.left = (x + 15) + 'px';
			tooltip.style.top = (y + 15) + 'px';

			// Adjust if tooltip would go off the container edge
			const tooltipRect = tooltip.getBoundingClientRect();
			if (tooltipRect.right > containerRect.right) {
				tooltip.style.left = (x - tooltipRect.width - 10) + 'px';
			}

			if (tooltipRect.bottom > containerRect.bottom) {
				tooltip.style.top = (y - tooltipRect.height - 10) + 'px';
			}
		}
	});

	// Linkable text sections
	const textSections = document.querySelectorAll('.section-creation, .section-import, .section-toolbar, .section-projects');
	textSections.forEach(function (section) {
		const sectionClass = Array.from(section.classList).find(cls => cls.startsWith('section-'));
		if (sectionClass) {
			const areaId = sectionClass.replace('section-', '');

			section.addEventListener('mouseover', function () {
				// Find and highlight corresponding map area
				const mapContainers = document.querySelectorAll('.image-map-container');
				mapContainers.forEach(function (container) {
					const highlight = container.querySelector(`.area-highlight[data-area-id="${areaId}"]`);
					if (highlight) {
						highlight.classList.add('active');
					}
				});

				section.classList.add('section-active');
			});

			section.addEventListener('mouseout', function () {
				const mapContainers = document.querySelectorAll('.image-map-container');
				mapContainers.forEach(function (container) {
					const highlight = container.querySelector(`.area-highlight[data-area-id="${areaId}"]`);
					if (highlight) {
						highlight.classList.remove('active');
					}
				});

				section.classList.remove('section-active');
			});
		}
	});
}

/**
 * Initialize image annotation functionality
 */
function initializeImageAnnotations() {
	const containers = document.querySelectorAll('.annotated-image-container');

	containers.forEach(container => {
		const markers = container.querySelectorAll('.annotation-marker');
		const tooltips = container.querySelectorAll('.annotation-tooltip');

		// Set up markers and tooltips
		markers.forEach(marker => {
			const markerId = marker.getAttribute('data-marker-id');
			if (!markerId) return;

			const tooltip = container.querySelector(`.annotation-tooltip[data-marker-id="${markerId}"]`);
			if (!tooltip) return;

			// Set marker color
			const isDarkMode = document.documentElement.getAttribute('data-md-color-scheme') === 'slate';
			marker.style.color = isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)';

			// Add mouse events
			marker.addEventListener('mouseenter', () => {
				// Hide all other tooltips
				tooltips.forEach(t => {
					if (t !== tooltip) t.style.display = 'none';
				});

				// Position and show the tooltip
				const markerRect = marker.getBoundingClientRect();
				const containerRect = container.getBoundingClientRect();

				tooltip.style.display = 'block';
				tooltip.style.left = (marker.offsetLeft + 20) + 'px';
				tooltip.style.top = (marker.offsetTop - 10) + 'px';

				// Check if tooltip goes off the right edge
				const tooltipRect = tooltip.getBoundingClientRect();
				if (tooltipRect.right > containerRect.right) {
					tooltip.style.left = (marker.offsetLeft - tooltipRect.width - 20) + 'px';
				}

				// Change marker color on hover
				marker.style.color = isDarkMode ? '#FFC30C' : '#FFC30C';
			});

			marker.addEventListener('mouseleave', () => {
				// Hide the tooltip with a small delay
				setTimeout(() => {
					if (!tooltip.matches(':hover')) {
						tooltip.style.display = 'none';
					}
				}, 100);

				// Restore original marker color
				marker.style.color = isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)';
			});
		});

		// Add events to tooltips
		tooltips.forEach(tooltip => {
			tooltip.addEventListener('mouseleave', () => {
				tooltip.style.display = 'none';
			});
		});
	});
}
