/**
 * Banner persistence manager
 * - Shows banner only once per day
 * - Keeps banner closed state across page navigation
 */
document.addEventListener('DOMContentLoaded', function () {
	// Find the top banner
	const topBanner = document.querySelector('.top-banner');
	if (!topBanner) return;

	// Get today's date as string for storage
	const today = new Date().toDateString();

	// Function to handle banner visibility
	function manageBannerVisibility() {
		// Check if banner was closed today
		const bannerClosedDate = localStorage.getItem('bannerClosedDate');
		const bannerClosed = localStorage.getItem('bannerClosed');

		// Banner should be hidden if:
		// 1. It was closed by user in this session OR
		// 2. It was closed earlier today (and not a new day)
		if (bannerClosed === 'true' || bannerClosedDate === today) {
			topBanner.style.display = 'none';
			document.body.classList.remove('banner-visible');
		} else {
			topBanner.style.display = 'block';
			document.body.classList.add('banner-visible');
		}
	}

	// Set up close button functionality
	const closeButton = topBanner.querySelector('.close-button');
	if (closeButton) {
		closeButton.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			// Store closed state in both session and daily persistence
			localStorage.setItem('bannerClosed', 'true');
			localStorage.setItem('bannerClosedDate', today);

			// Hide the banner
			topBanner.style.display = 'none';
			document.body.classList.remove('banner-visible');
		});
	}

	// Check if this is a new day compared to last visit
	const lastVisit = localStorage.getItem('lastVisitDate');
	if (lastVisit !== today) {
		// Reset the session-based closed state on a new day
		localStorage.removeItem('bannerClosed');
	}

	// Store today as the last visit date
	localStorage.setItem('lastVisitDate', today);

	// Initial banner management
	manageBannerVisibility();

	// Handle page visibility changes (when user returns to the page)
	document.addEventListener('visibilitychange', function () {
		if (!document.hidden) {
			manageBannerVisibility();
		}
	});
});
