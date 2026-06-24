document.addEventListener('DOMContentLoaded', function() {
  // Function to add Accept All button
  function addAcceptAllButton() {
    console.log('Adding Accept All button to consent dialog');

    // Wait for the consent dialog to appear
    const consentDialog = document.querySelector('.md-consent');
    if (!consentDialog) {
      console.log('Consent dialog not found, will try again later');
      return;
    }

    // Don't add duplicate buttons
    if (document.querySelector('.accept-all-button')) {
      return;
    }

    // Create Accept All button
    const acceptAllButton = document.createElement('button');
    acceptAllButton.className = 'md-button md-button--primary accept-all-button';
    acceptAllButton.textContent = 'Accept All';
    acceptAllButton.style.marginRight = '10px';

    // Add click handler
    acceptAllButton.addEventListener('click', function() {
      console.log('Accept All button clicked');

      // Check all checkboxes
      const checkboxes = document.querySelectorAll('.md-consent input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        if (!checkbox.disabled) {
          checkbox.checked = true;
        }
      });

      // Find and click the standard Accept button
      const acceptButton = document.querySelector('.md-consent button:first-of-type');
      if (acceptButton) {
        console.log('Clicking accept button');
        acceptButton.click();
      } else {
        console.log('Accept button not found');

        // Fallback: manually save consent and reload
        const cookieNames = [];
        checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
            cookieNames.push(checkbox.name.replace('__consent_', ''));
          }
        });

        const consent = {
          accepted: true
        };

        cookieNames.forEach(function(name) {
          consent[name] = true;
        });

        localStorage.setItem('__consent', JSON.stringify(consent));
        window.location.reload();
      }
    });

    // Find where to insert the button - right before the first existing button
    const firstButton = document.querySelector('.md-consent button');
    if (firstButton && firstButton.parentNode) {
      firstButton.parentNode.insertBefore(acceptAllButton, firstButton);
      console.log('Accept All button added successfully');
    } else {
      console.log('Could not find a place to add the Accept All button');
    }
  }

  // Try to add the button when page loads
  setTimeout(addAcceptAllButton, 500);

  // Keep trying periodically in case the dialog appears later
  const interval = setInterval(function() {
    if (document.querySelector('.md-consent') &&
        !document.querySelector('.accept-all-button')) {
      addAcceptAllButton();
    }
  }, 1000);

  // Clean up interval after 10 seconds
  setTimeout(function() {
    clearInterval(interval);
  }, 10000);
});

document.addEventListener('DOMContentLoaded', function() {
  // Add proper event listeners for cookie consent buttons
  const consentButtons = document.querySelectorAll('.md-consent__controls button');

  consentButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Force hide the consent dialog after clicking
      setTimeout(function() {
        const consentDialog = document.getElementById('__consent');
        if (consentDialog) {
          consentDialog.style.display = 'none';
          consentDialog.setAttribute('hidden', '');
          consentDialog.setAttribute('aria-hidden', 'true');
        }

        // Also hide the overlay
        const overlay = document.querySelector('.md-overlay');
        if (overlay) {
          overlay.style.display = 'none';
        }
      }, 100);
    });
  });
});
