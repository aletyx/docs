# Aletyx docs: Blume site built from the Notion Docs database.
# Each target wraps a script in scripts/, the same ones npm run and CI use.

.PHONY: help install dev restart build preview links-check broken-links clean

help: ## List the targets
	@grep -E '^[a-z-]+:.*## ' $(MAKEFILE_LIST) | awk -F':.*## ' '{printf "  make %-14s %s\n", $$1, $$2}'

install: ## Install dependencies (npm ci)
	npm ci

dev: ## Run the dev server at http://127.0.0.1:4321/docs (PORT=... to change)
	scripts/dev.sh

restart: ## Refetch every page from Notion and restart the dev server (in the background)
	scripts/restart-dev.sh

build: ## Build the production site into dist/ (served at /docs)
	scripts/build-site.sh

preview: ## Build into dist/ including Draft pages
	scripts/build-site.sh --preview

links-check: ## Check internal links in the existing dist/
	scripts/links-check.sh

broken-links: build ## Build, then check internal links
	scripts/links-check.sh

clean: ## Remove build output (keeps the .blume Notion cache, so dev still starts fast)
	rm -rf dist .blume-verify
