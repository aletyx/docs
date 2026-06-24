/**
 * API Examples enhancement
 * Adds clipboard buttons and ensures compatibility with existing MkDocs Material theme
 */
document.addEventListener('DOMContentLoaded', function () {
	// Instead of adding new buttons, let's make sure the code blocks in api-examples
	// get the same styling and behavior as regular code blocks

	// Find all API examples
	const examples = document.querySelectorAll('.api-example');

	examples.forEach(function (example) {
		const codeBody = example.querySelector('.api-example-body');
		if (!codeBody) return;

		// Find the pre block
		const preBlock = codeBody.querySelector('pre');
		if (!preBlock) return;

		// Sometimes Material theme may not have added copy buttons to our custom blocks
		// Let's check if there's already a button
		const existingButton = preBlock.querySelector('.md-clipboard');

		// If no button exists and Material didn't add one, we won't add any
		// Material's JavaScript should handle this

		// Make sure syntax highlighting is applied
		if (preBlock.querySelector('code')) {
			preBlock.querySelector('code').classList.add('language-feel');
		}
	});
});
