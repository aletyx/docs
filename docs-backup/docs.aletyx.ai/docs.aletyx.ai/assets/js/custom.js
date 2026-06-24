document.addEventListener("DOMContentLoaded", function () {
  // Check if banner already exists before creating it
  if (!document.querySelector(".top-banner")) {
    // Add top banner
    const topBanner = document.createElement("div");
    topBanner.className = "top-banner";
    topBanner.innerHTML =
      '🚀 <a href="https://playground.aletyx.ai">Play in aletyx Playground to start building your Business Processes and Decisions today!</a>  <span class="close-button">&times;</span>';
    document.body.insertBefore(topBanner, document.body.firstChild);
  }

  // Fix top banner close functionality in MkDocs
  const existingTopBanner = document.querySelector(".top-banner");
  if (existingTopBanner) {
    const closeButton = existingTopBanner.querySelector(".close-button");
    if (closeButton) {
      closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        existingTopBanner.style.display = "none";
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Check if current page is the home/index page
    const path = window.location.pathname;
    const isHomePage =
      path === "/" ||
      path.endsWith("/index.html") ||
      path === "/index" ||
      path === "" ||
      path.match(/\/$/) !== null;

    if (isHomePage) {
      document.body.classList.add("home-page");
    }

    // Adjust navigation positioning after page loaded
    setTimeout(function () {
      const navHeight = document.querySelector(".md-tabs")
        ? document.querySelector(".md-tabs").offsetHeight +
          document.querySelector(".md-header").offsetHeight
        : document.querySelector(".md-header").offsetHeight;

      const navElements = document.querySelectorAll(
        ".md-nav--primary > .md-nav__inner > .md-nav__list, .md-sidebar--secondary"
      );
      navElements.forEach((el) => {
        if (el) el.style.top = navHeight + "px";
      });
    }, 500);

    // Recalculate on window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1220) {
        const navHeight = document.querySelector(".md-tabs")
          ? document.querySelector(".md-tabs").offsetHeight +
            document.querySelector(".md-header").offsetHeight
          : document.querySelector(".md-header").offsetHeight;

        const navElements = document.querySelectorAll(
          ".md-nav--primary > .md-nav__inner > .md-nav__list, .md-sidebar--secondary"
        );
        navElements.forEach((el) => {
          if (el) el.style.top = navHeight + "px";
        });
      }
    });
  });

  // Function for Navigating Path

  document.addEventListener("DOMContentLoaded", function () {
    // Wait a bit for Material for MkDocs to fully initialize
    setTimeout(function () {
      const pathCards = document.querySelectorAll(".path-card");

      pathCards.forEach(function (card) {
        const img = card.querySelector(".path-icon-container");
        const tabId = card
          .querySelector(".md-button")
          .getAttribute("onclick")
          .match(/switchTab\('(.+?)'\)/)[1];

        if (img && tabId) {
          // Modify the onclick handler to include scrolling
          img.addEventListener(
            "click",
            function (e) {
              e.preventDefault();
              e.stopPropagation();

              // Call the switchTab function
              window.switchTab(tabId);

              // Get a reference to the Start Here heading using multiple options
              setTimeout(function () {
                // Try multiple ways to find the Start Here heading
                const startHereHeading =
                  document.getElementById("start-here-heading") || // Try the explicit ID first
                  document.querySelector('h2[id="start-here-heading"]') ||
                  document.querySelector('h2:contains("Start Here")') ||
                  document.querySelector(".custom-tabs").previousElementSibling; // Fallback to element right before tabs

                if (startHereHeading) {
                  startHereHeading.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }, 150); // Small delay to ensure tab switching happens first

              return false;
            },
            true
          );
        }
      });
    }, 500);
  });

  /* TODO: Re-enable the AI button when prepared */

  // Create and append the Ask AI button
  /*
		const askAiButton = document.createElement('div');
		askAiButton.className = 'ask-ai-button';
		askAiButton.innerHTML = '<span class="ai-icon">AI</span>';
		document.body.appendChild(askAiButton);

		// Create the Ask AI modal
		const askAiModal = document.createElement('div');
		askAiModal.className = 'ask-ai-modal';
		askAiModal.innerHTML = `
		  <div class="ask-ai-modal-header">
			<img src="/assets/images/ai-logo.svg" alt="AI Logo" class="ask-ai-modal-logo">
			<h3 class="ask-ai-modal-title">Documentation AI</h3>
			<span class="ask-ai-modal-close">&times;</span>
		  </div>
		  <div class="ask-ai-modal-content">
			<p>Welcome to Documentation Smart docs, powered by AI. Accessing developer docs, forum posts and product blogs from the last year, responses are generated by combining various sources to formulate the best possible answer. If you have feedback please give a thumbs up or down as we continue to improve the AI.</p>

			<div class="ask-ai-example-questions">
			  <h4>EXAMPLE QUESTIONS</h4>
			  <div class="ask-ai-example-question">What's new in version 2.0?</div>
			  <div class="ask-ai-example-question">What's SaaS vs Deployment?</div>
			</div>

			<input type="text" class="ask-ai-input" placeholder="Ask me a question about...">
		  </div>
		  <div class="ask-ai-footer">
			<span>powered by AI</span>
			<span>protected by reCAPTCHA</span>
		  </div>
		`;
		document.body.appendChild(askAiModal);

		// Handle Ask AI button click
		askAiButton.addEventListener('click', function () {
			askAiModal.style.display = 'block';
		});

		// Handle close button click
		const closeButton = askAiModal.querySelector('.ask-ai-modal-close');
		closeButton.addEventListener('click', function () {
			askAiModal.style.display = 'none';
		});

		// Close modal when clicking outside
		window.addEventListener('click', function (event) {
			if (event.target === askAiModal) {
				askAiModal.style.display = 'none';
			}
		});

		// Handle example question clicks
		const exampleQuestions = askAiModal.querySelectorAll('.ask-ai-example-question');
		exampleQuestions.forEach(function (question) {
			question.addEventListener('click', function () {
				const input = askAiModal.querySelector('.ask-ai-input');
				input.value = question.textContent;
				// You would typically trigger a search or AI query here
			});
		});

		*/

  // Add time estimate bubbles to relevant sections
  const addTimeEstimates = function () {
    const headers = document.querySelectorAll("h1, h2, h3");
    const tutorials = [
      {
        title: "Getting Your Hands Dirty with aletyx Playground",
        time: "15 min",
      },
      { title: "Model your first process", time: "10 min" },
      { title: "API Integration", time: "15 min" },
      { title: "Process Modeling", time: "20 min" },
      { title: "Environment Setup", time: "15 min" },
    ];

    headers.forEach(function (header) {
      // Check if it already has a time estimate
      if (!header.querySelector(".time-estimate")) {
        tutorials.forEach(function (tutorial) {
          if (header.textContent.includes(tutorial.title)) {
            const timeEstimate = document.createElement("span");
            timeEstimate.className = "time-estimate";
            timeEstimate.textContent = tutorial.time;
            header.appendChild(timeEstimate);
          }
        });
      }
    });
  };

  // Make feature cards clickable
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach(function (card) {
    // Check if card already has a link
    if (!card.querySelector(".card-link")) {
      // Get the heading text to create a sensible URL
      const heading = card.querySelector("h3");
      if (heading) {
        const headingText = heading.textContent
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-");
        const link = document.createElement("a");
        link.className = "card-link";
        link.href = "#" + headingText; // This can be changed to a real URL later
        link.textContent = heading.textContent;
        card.appendChild(link);

        // Make card clickable
        card.addEventListener("click", function (e) {
          // Don't navigate if the user clicked on an actual link or button inside the card
          if (
            e.target.tagName !== "A" &&
            e.target.tagName !== "BUTTON" &&
            !e.target.closest("a") &&
            !e.target.closest("button")
          ) {
            window.location.href = link.href;
          }
        });
      }
    }
  });

  // Fix any remaining white space between header and hero
  function fixHeaderGap() {
    // Remove any extra announcements if duplicated
    const announcements = document.querySelectorAll(".md-announce");
    if (announcements.length > 1) {
      for (let i = 1; i < announcements.length; i++) {
        announcements[i].remove();
      }
    }

    // Remove any white space
    document.documentElement.style.setProperty("--md-header-height", "0px");
    document.documentElement.style.setProperty("--md-announce-height", "0px");
  }

  // Handle version dropdown changes
  const versionDropdown = document.querySelector(".version-dropdown");
  if (versionDropdown) {
    versionDropdown.addEventListener("change", function () {
      const selectedOption = this.options[this.selectedIndex];
      const versionUrl = selectedOption.value;

      if (versionUrl !== "#") {
        window.location.href = versionUrl;
      }
    });
  }

  // Call these functions
  setTimeout(addTimeEstimates, 500);
  fixHeaderGap();
  window.addEventListener("resize", fixHeaderGap);
});
document.addEventListener("DOMContentLoaded", function () {
  // Function to enhance code blocks
  function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll(".md-typeset pre");

    codeBlocks.forEach((codeBlock) => {
      // Calculate appropriate width based on content
      const codeElement = codeBlock.querySelector("code");
      if (codeElement) {
        // Get the content width
        const tempSpan = document.createElement("span");
        tempSpan.style.visibility = "hidden";
        tempSpan.style.position = "absolute";
        tempSpan.style.whiteSpace = "pre";
        tempSpan.style.font = window.getComputedStyle(codeElement).font;
        tempSpan.textContent = codeElement.textContent;
        document.body.appendChild(tempSpan);

        // Determine optimal width (content width + padding)
        const contentWidth = tempSpan.getBoundingClientRect().width;
        document.body.removeChild(tempSpan);

        // Set width based on content, with minimum and maximum constraints
        const minWidth = 700; // Minimum width in pixels
        const maxWidth = 1350; // Maximum width in pixels
        const padding = 80; // Extra padding

        // Apply appropriate width
        const optimalWidth = Math.min(
          Math.max(contentWidth + padding, minWidth),
          maxWidth
        );
        codeBlock.style.width = optimalWidth + "px";
      }

      // Create a better copy button
      const existingButton = codeBlock.querySelector(".md-clipboard");
      if (existingButton) {
        // Enhance existing button
        existingButton.setAttribute("title", "Copy to clipboard");

        // Add a visual indicator when copying
        existingButton.addEventListener("click", function () {
          const originalTitle = existingButton.getAttribute("title");
          existingButton.setAttribute("title", "Copied!");
          existingButton.classList.add("md-clipboard--copied");

          // Reset after animation
          setTimeout(() => {
            existingButton.setAttribute("title", originalTitle);
            existingButton.classList.remove("md-clipboard--copied");
          }, 1500);
        });
      }
    });
  }

  // Run enhancement on page load
  enhanceCodeBlocks();

  // Re-run on theme change
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "data-md-color-scheme") {
        enhanceCodeBlocks();
      }
    });
  });

  const body = document.querySelector("body");
  if (body) {
    observer.observe(body, {
      attributes: true,
      attributeFilter: ["data-md-color-scheme"],
    });
  }

  // Add some additional classes for better styling
  document.querySelectorAll(".md-clipboard").forEach((button) => {
    button.innerHTML += '<span class="md-clipboard__label"></span>';
  });
});

// SVG Resizing
document.addEventListener("DOMContentLoaded", function () {
  // Function to set viewBox attribute on SVGs if missing
  function ensureSvgViewBox() {
    const svgImages = document.querySelectorAll('img[src$=".svg"]');

    svgImages.forEach((img) => {
      img.addEventListener("load", function () {
        // Get the natural dimensions of the SVG
        const width = this.naturalWidth;
        const height = this.naturalHeight;

        if (width > 0 && height > 0) {
          // Clone the image element
          const imgClone = this.cloneNode(false);

          // Create an AJAX request to load the SVG
          const xhr = new XMLHttpRequest();
          xhr.open("GET", this.src, true);
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              // Parse the SVG content
              const parser = new DOMParser();
              const svgDoc = parser.parseFromString(
                xhr.responseText,
                "image/svg+xml"
              );
              const svgElement = svgDoc.documentElement;

              // Check if viewBox is missing and set it
              if (!svgElement.hasAttribute("viewBox") && width && height) {
                svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`);
              }

              // Replace the image with the optimized SVG
              const svgString = new XMLSerializer().serializeToString(svgDoc);
              const imgParent = imgClone.parentNode;

              if (imgParent) {
                // Create a new image with the updated SVG
                const newImg = document.createElement("img");
                newImg.src = "data:image/svg+xml;base64," + btoa(svgString);
                newImg.className = imgClone.className;
                newImg.alt = imgClone.alt;
                newImg.style.width = imgClone.style.width;
                newImg.style.height = imgClone.style.height;

                imgParent.replaceChild(newImg, imgClone);
              }
            }
          };
          xhr.send();
        }
      });

      // Force load event if image is already cached
      if (img.complete) {
        const event = new Event("load");
        img.dispatchEvent(event);
      }
    });
  }

  // Apply size classes based on screen size
  function applySvgSizeClasses() {
    const deploymentIcons = document.querySelectorAll(".deployment-icon");
    const architectureImages = document.querySelectorAll(
      ".architecture-diagram img"
    );

    // Set sizes based on screen width
    const isMobile = window.innerWidth < 768;

    deploymentIcons.forEach((icon) => {
      icon.style.width = isMobile ? "48px" : "64px";
      icon.style.height = isMobile ? "48px" : "64px";
    });

    architectureImages.forEach((img) => {
      // Allow the CSS to handle this through max-width
      img.style.maxWidth = "100%";
    });
  }

  // Initialize functions
  ensureSvgViewBox();
  applySvgSizeClasses();

  // Update on window resize
  window.addEventListener("resize", applySvgSizeClasses);
});

document.addEventListener("DOMContentLoaded", function () {
  // Add card count classes to grids based on number of child elements
  const gridTypes = [".benefit-grid", ".use-case-grid", ".feature-grid"];

  gridTypes.forEach(function (gridType) {
    document.querySelectorAll(gridType).forEach(function (grid) {
      // Skip page-index grids more reliably
      if (
        document.body.classList.contains("page-index") ||
        grid.closest(".page-index") ||
        document.querySelector('body[data-page-path="index"]') ||
        grid.closest('body[data-page-path="index"]')
      ) {
        console.log("Skipping homepage grid:", grid);
        return;
      }

      // Count direct child cards
      const cardCount = grid.children.length;
      if (cardCount > 0) {
        grid.classList.add(`card-count-${cardCount}`);

        // Special handling for 3 or 4 cards
        if (cardCount === 3 || cardCount === 4) {
          // Add extra specific class for these problematic counts
          grid.classList.add(`optimize-layout-${cardCount}`);

          // For 3 cards specifically, force them into a single row on tablet/desktop
          if (cardCount === 3) {
            // Apply explicit sizing and positioning to prevent 3+1 layout
            Array.from(grid.children).forEach((card, index) => {
              card.classList.add(`card-position-${index + 1}-of-3`);
            });
          }

          // For 4 cards, enforce 2x2 grid
          if (cardCount === 4) {
            Array.from(grid.children).forEach((card, index) => {
              card.classList.add(`card-position-${index + 1}-of-4`);
            });
          }
        }
      }
    });
  });

  // Optional: add window resize handler to recheck layouts
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // Force layout recalculation on problematic grids
      document
        .querySelectorAll(".optimize-layout-3, .optimize-layout-4")
        .forEach(function (grid) {
          grid.style.display = "none";
          // Trigger reflow
          void grid.offsetHeight;
          grid.style.display = "";
        });
    }, 250);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Find all benefit grid containers on the page
  const benefitGrids = document.querySelectorAll(
    ".benefits-grid, div.benefits-grid, .div.benefits-grid"
  );

  benefitGrids.forEach(function (grid) {
    // Skip grids that are part of the page-index
    if (
      grid.closest(".page-index") ||
      document.body.classList.contains("page-index")
    ) {
      return;
    }

    // Count the benefit cards in this grid
    const cardCount = grid.querySelectorAll(
      ".benefit-card, div.benefit-card, .div.benefit-card"
    ).length;

    // Add a class with the card count
    if (cardCount > 0) {
      grid.classList.add(`card-count-${cardCount}`);

      // Apply special handling for key problem cases
      if (cardCount === 3 || cardCount === 4) {
        // Add a specific class that we can target in CSS
        grid.classList.add(`optimize-cards-${cardCount}`);
      }
    }
  });
});

document.addEventListener("scroll", function () {
  const sidebar = document.querySelector(".md-sidebar--secondary");
  if (!sidebar) return;

  const showAfter = 300; // px to scroll before showing
  if (window.scrollY > showAfter) {
    sidebar.classList.add("sticky-visible");
  } else {
    sidebar.classList.remove("sticky-visible");
  }
});

// ============================================================================
// NAVIGATION TAB ACTIVE STATE
// Updates the active tab indicator when using instant navigation
// ============================================================================
(function() {
  // Map URL path prefixes to navigation section titles
  const navSections = {
    '/guides/getting-started': 'Getting Started',
    '/getting-started': 'Getting Started',
    '/core': 'Architecture',
    '/test-scenarios': 'Architecture',
    '/guides': 'Guides',
    '/components': 'Platform',
    '/decision-control': 'Platform',
    '/deployment': 'Deployment',
    '/reference': 'Reference',
    '/product': 'Reference',
    '/legal': 'Reference'
  };

  function updateActiveNav() {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.md-header__nav-link');

    if (!navLinks.length) return;

    // Find which section this path belongs to
    let activeSection = null;

    // Check path against sections (longer paths first for specificity)
    const sortedPrefixes = Object.keys(navSections).sort((a, b) => b.length - a.length);
    for (const prefix of sortedPrefixes) {
      if (path.startsWith(prefix)) {
        activeSection = navSections[prefix];
        break;
      }
    }

    // Update active state on all nav links
    navLinks.forEach(link => {
      const linkText = link.textContent.trim();

      // Remove active class
      link.classList.remove('md-header__nav-link--active');

      // Add active class if this link matches the current section
      if (activeSection && linkText === activeSection) {
        link.classList.add('md-header__nav-link--active');
      }

      // Special case: Home page (no section match means we're on home)
      if (!activeSection && (path === '/' || path === '/index.html' || path.endsWith('/aletyx-docs/'))) {
        // Don't highlight any tab on home, or optionally highlight "Home" if it exists
        if (linkText === 'Home') {
          link.classList.add('md-header__nav-link--active');
        }
      }
    });
  }

  // Run on initial page load
  document.addEventListener('DOMContentLoaded', updateActiveNav);

  // Run on instant navigation (MkDocs Material uses this event)
  document.addEventListener('DOMContentSwitch', updateActiveNav);

  // Also listen for location changes via the navigation API or popstate
  window.addEventListener('popstate', updateActiveNav);

  // For MkDocs Material instant loading, also observe URL changes
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      updateActiveNav();
    }
  }).observe(document, { subtree: true, childList: true });
})();
