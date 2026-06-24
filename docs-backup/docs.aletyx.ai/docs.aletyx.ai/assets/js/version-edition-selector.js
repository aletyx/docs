/**
 * Aletyx Edition Selector
 *
 * Allows users to select their edition (pioneer, innovator, horizon, keystone)
 * and dynamically updates all code examples, Maven dependencies, Docker images, etc.
 *
 * NOTE: Version switching is handled by Mike (Material theme's version selector).
 * This selector only handles edition switching within the current version.
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        editions: [
            { value: 'pioneer', label: 'Pioneer', default: false },
            { value: 'innovator', label: 'Innovator', default: true },
            { value: 'horizon', label: 'Horizon', default: false },
            { value: 'keystone', label: 'Keystone', default: false }
        ],
        storageKey: 'aletyx-selected-edition'
    };

    // State management
    let currentEdition = null;

    /**
     * Initialize the selector on page load
     */
    function init() {
        // Load saved preference or use default
        currentEdition = loadPreference() || getDefaultEdition();

        // Create the selector UI
        createSelectorUI();

        // Update all code blocks with current selection
        updateAllCodeBlocks();

        // Listen for edition badge clicks (alternative selection method)
        setupEditionBadgeListeners();

        console.log(`🚀 Aletyx Edition Selector initialized: ${currentEdition}`);
    }

    /**
     * Get default edition from config
     */
    function getDefaultEdition() {
        const defaultEdition = CONFIG.editions.find(e => e.default);
        return defaultEdition ? defaultEdition.value : CONFIG.editions[0].value;
    }

    /**
     * Load user preference from localStorage
     */
    function loadPreference() {
        try {
            return localStorage.getItem(CONFIG.storageKey);
        } catch (e) {
            console.warn('localStorage not available:', e);
            return null;
        }
    }

    /**
     * Save user preference to localStorage
     */
    function savePreference(value) {
        try {
            localStorage.setItem(CONFIG.storageKey, value);
        } catch (e) {
            console.warn('Could not save preference:', e);
        }
    }

    /**
     * Capitalize first letter
     */
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * Create the selector UI after the logo in header
     */
    function createSelectorUI() {
        const header = document.querySelector('.md-header__inner');
        const logo = document.querySelector('.md-header__button.md-logo');

        if (!header) {
            console.warn('Could not find header element');
            return;
        }

        // Create edition selector
        const selectorContainer = document.createElement('div');
        selectorContainer.className = 'aletyx-edition-selector';
        selectorContainer.innerHTML = `
            <button class="edition-selector-button" id="edition-selector-button" aria-label="Select edition">
                <span class="edition-text">${capitalize(currentEdition)}</span>
                <svg class="dropdown-icon" viewBox="0 0 24 24" width="14" height="14">
                    <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                </svg>
            </button>
            <div class="edition-selector-dropdown" id="edition-selector-dropdown" style="display: none;">
                <div class="dropdown-section">
                    <div class="dropdown-label">Select Your Edition</div>
                    <div class="dropdown-options">
                        ${CONFIG.editions.map(e =>
                            `<button class="dropdown-option ${e.value === currentEdition ? 'selected' : ''}"
                                     data-value="${e.value}">
                                ${e.label}
                                ${e.value === currentEdition ? '<span class="check">✓</span>' : ''}
                            </button>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;

        // Insert after the logo
        if (logo) {
            logo.insertAdjacentElement('afterend', selectorContainer);
            console.log('✓ Edition selector inserted after logo');
        } else {
            // Fallback: prepend to header
            header.prepend(selectorContainer);
            console.log('✓ Edition selector prepended to header');
        }

        // Attach event listeners
        setupDropdownListeners();
    }

    /**
     * Setup dropdown toggle and selection listeners
     */
    function setupDropdownListeners() {
        const button = document.getElementById('edition-selector-button');
        const dropdown = document.getElementById('edition-selector-dropdown');

        if (!button || !dropdown) return;

        // Toggle dropdown
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const isVisible = dropdown.style.display === 'block';
            dropdown.style.display = isVisible ? 'none' : 'block';
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            dropdown.style.display = 'none';
        });

        // Prevent dropdown from closing when clicking inside
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Handle option selection
        dropdown.querySelectorAll('.dropdown-option').forEach(option => {
            option.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                console.log(`Edition option clicked: ${value}`);

                handleEditionChange({ target: { value } });

                // Update UI
                updateSelectorDisplay();

                // Close dropdown
                console.log('Closing dropdown');
                dropdown.style.display = 'none';
            });
        });
    }

    /**
     * Update the selector button display
     */
    function updateSelectorDisplay() {
        const button = document.getElementById('edition-selector-button');
        if (button) {
            button.querySelector('.edition-text').textContent = capitalize(currentEdition);
        }

        // Update dropdown selections
        const dropdown = document.getElementById('edition-selector-dropdown');
        if (dropdown) {
            dropdown.querySelectorAll('.dropdown-option').forEach(option => {
                const value = option.getAttribute('data-value');
                const isSelected = value === currentEdition;

                option.classList.toggle('selected', isSelected);

                // Update checkmark
                const existingCheck = option.querySelector('.check');
                if (isSelected && !existingCheck) {
                    option.innerHTML += '<span class="check">✓</span>';
                } else if (!isSelected && existingCheck) {
                    existingCheck.remove();
                }
            });
        }
    }

    /**
     * Handle edition selection change
     */
    function handleEditionChange(event) {
        currentEdition = event.target.value;
        savePreference(currentEdition);
        updateSelectorDisplay();
        updateAllCodeBlocks();

        const editionLabel = CONFIG.editions.find(e => e.value === currentEdition)?.label;
        showNotification(`${editionLabel} Edition`);
    }

    /**
     * Update all code blocks on the page with current edition
     */
    function updateAllCodeBlocks() {
        // Update all code blocks with edition placeholders
        const codeElements = document.querySelectorAll('code, pre');
        console.log(`Updating ${codeElements.length} code elements with edition: ${currentEdition}`);

        codeElements.forEach(element => {
            updateCodeBlock(element);
        });

        // Update all data attributes that might contain edition info
        document.querySelectorAll('[data-aletyx-edition]').forEach(element => {
            const originalText = element.getAttribute('data-aletyx-edition');
            element.textContent = originalText
                .replace(/\{\{edition\}\}/g, currentEdition)
                .replace(/\$\{edition\}/g, currentEdition)
                .replace(/([\d\.]+)-aletyx(?!-)/g, `$1-aletyx-${currentEdition}`)
                .replace(/([\d\.]+)-aletyx-(pioneer|innovator|horizon|keystone)/g, `$1-aletyx-${currentEdition}`);
        });

        // Update footer links and other non-code URLs
        updateFooterLinks();
    }

    /**
     * Update footer and other static links with current edition
     */
    function updateFooterLinks() {
        // Don't update if edition is not properly set
        if (!currentEdition || currentEdition === 'null' || currentEdition === 'undefined') {
            console.warn('Skipping footer link update - currentEdition not set:', currentEdition);
            return;
        }

        // Update all links that point to Maven or Docker registry services
        document.querySelectorAll('a[href*="maven"][href*="aletyx.services"], a[href*="registry"][href*="aletyx.services"]').forEach(link => {
            const originalHref = link.getAttribute('href');

            // Update Maven URLs
            let updatedHref = originalHref
                .replace(/maven-(?:pioneer|innovator|horizon|keystone)\.aletyx\.services/g, `maven-${currentEdition}.aletyx.services`)
                .replace(/registry-(?:pioneer|innovator|horizon|keystone)\.aletyx\.services/g, `registry-${currentEdition}.aletyx.services`);

            if (updatedHref !== originalHref) {
                link.setAttribute('href', updatedHref);

                // Also update the link text if it contains the URL
                if (link.textContent.includes('maven') || link.textContent.includes('registry')) {
                    link.childNodes.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.textContent = node.textContent
                                .replace(/maven-(?:pioneer|innovator|horizon|keystone)\.aletyx\.services/g, `maven-${currentEdition}.aletyx.services`)
                                .replace(/registry-(?:pioneer|innovator|horizon|keystone)\.aletyx\.services/g, `registry-${currentEdition}.aletyx.services`);
                        }
                    });
                }

                console.log(`Updated footer link: ${originalHref} → ${updatedHref}`);
            }
        });
    }

    /**
     * Update a single code block with edition placeholders
     */
    function updateCodeBlock(element) {
        const originalHTML = element.innerHTML;

        // Replace edition placeholders
        let updatedHTML = originalHTML
            // Just edition placeholders
            .replace(/\{\{edition\}\}/g, currentEdition)
            .replace(/\$\{edition\}/g, currentEdition)

            // Fix any existing -null or invalid editions first (for version strings)
            .replace(/([\d\.]+)-aletyx-\w+/g, '$1-aletyx')
            // Fix decision-control-null or any invalid edition
            .replace(/decision-control-(?:null|\w+)(?=:)/g, 'decision-control')

            // MAIN PATTERN: Append edition to existing mkdocs-generated versions
            // Matches: 10.1.0-aletyx or 10.0.0-aletyx and appends edition
            // This works with {{pom.version}} from mkdocs.yml
            .replace(/([\d\.]+)-aletyx(?!-)/g, `$1-aletyx-${currentEdition}`)

            // Docker registry URLs: registry-{edition}.aletyx.services
            .replace(/registry-(?:pioneer|innovator|horizon|keystone|null)\.aletyx\.services/g, `registry-${currentEdition}.aletyx.services`)

            // Maven repository URLs: maven-{edition}.aletyx.services
            .replace(/maven-(?:pioneer|innovator|horizon|keystone|null)\.aletyx\.services/g, `maven-${currentEdition}.aletyx.services`)
            // Also handle plain maven.aletyx.services (convert to edition-based)
            .replace(/(?<!maven-)maven\.aletyx\.services/g, `maven-${currentEdition}.aletyx.services`)

            // Docker images with edition suffix: decision-control-{edition} or decision-control (no suffix yet)
            .replace(/decision-control-(?:pioneer|innovator|horizon|keystone)/g, `decision-control-${currentEdition}`)
            // Add edition suffix if missing (for decision-control:version patterns)
            .replace(/\/decision-control:(\d+\.\d+\.\d+)/g, `/decision-control-${currentEdition}:$1`)

            // Version patterns in docker images with edition: :1.1.7-aletyx-{edition}
            .replace(/:(\d+\.\d+\.\d+)-aletyx-(?:pioneer|innovator|horizon|keystone)/g, `:$1-aletyx-${currentEdition}`);

        if (updatedHTML !== originalHTML) {
            console.log(`Updated code block: ${originalHTML.substring(0, 80)}... → ${updatedHTML.substring(0, 80)}...`);
            element.innerHTML = updatedHTML;
        }
    }

    /**
     * Setup listeners for edition badge clicks (alternative selection)
     */
    function setupEditionBadgeListeners() {
        document.addEventListener('click', function(event) {
            const badge = event.target.closest('.edition-badge');
            if (badge) {
                // Extract edition from class name
                const editionClass = Array.from(badge.classList).find(c => c.startsWith('edition-'));
                if (editionClass) {
                    const edition = editionClass.replace('edition-', '');
                    if (CONFIG.editions.find(e => e.value === edition)) {
                        currentEdition = edition;
                        savePreference('edition', currentEdition);

                        // Update the dropdown
                        const editionSelect = document.getElementById('aletyx-edition-select');
                        if (editionSelect) {
                            editionSelect.value = currentEdition;
                        }

                        updateDisplay();
                        updateAllCodeBlocks();

                        const editionLabel = CONFIG.editions.find(e => e.value === edition)?.label;
                        showNotification(`Switched to ${editionLabel} Edition`);
                    }
                }
            }
        });
    }

    /**
     * Show a notification to the user
     */
    function showNotification(message) {
        // Remove existing notification if any
        const existing = document.querySelector('.aletyx-notification');
        if (existing) {
            existing.remove();
        }

        // Create notification
        const notification = document.createElement('div');
        notification.className = 'aletyx-notification';
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 10);

        // Remove after 2 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    /**
     * Public API for manual updates (can be called from console or other scripts)
     */
    window.AletyxEditionSelector = {
        setEdition: function(edition) {
            if (CONFIG.editions.find(e => e.value === edition)) {
                currentEdition = edition;
                savePreference(currentEdition);
                updateSelectorDisplay();
                updateAllCodeBlocks();
            }
        },
        getEdition: function() {
            return currentEdition;
        },
        refresh: function() {
            updateAllCodeBlocks();
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM already loaded
        if (document.querySelector('.md-tabs__list') || document.querySelector('.md-header__inner')) {
            init();
        } else {
            // Wait a bit for Material theme to fully render
            setTimeout(init, 100);
        }
    }

    // Re-initialize on Material theme navigation (instant loading)
    document.addEventListener('DOMContentSwitch', function() {
        console.log('Page switched, updating code blocks...');
        // Don't recreate UI, just update code blocks
        updateAllCodeBlocks();
    });

    // Also listen for Material theme content switches (if available)
    if (typeof document$ !== 'undefined') {
        document$.subscribe(function() {
            console.log('Material content loaded, updating code blocks...');
            updateAllCodeBlocks();
        });
    }

})();
