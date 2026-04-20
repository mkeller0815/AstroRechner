# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## High-Level Architecture

The repository is a self-contained, single-file application designed to function as an astronomical calculator (`index.html`).

*   **Structure:** The entire application—including the HTML structure, styling, and calculation logic—is housed within the `index.html` file.
*   **Architecture:** The project is purely client-side, meaning all calculations and UI logic execute in the user's web browser. There is no separate backend API or complex build system.
*   **Focus:** Any modifications to the application must be made directly to the JavaScript/HTML logic within `index.html`.

## Common Development Commands

Since this is a self-contained HTML application, standard build and linting steps are not applicable.

*   **Run Application:** Open `index.html` directly in a web browser.
*   **Edit/Modify:** Use the `Edit` tool to modify the content of `index.html` to change functionality or appearance.
*   **Test:** Due to the single-file, client-side nature, testing involves manual verification within the browser environment.

## Dependencies and Notes

*   **Dependencies:** The application is completely standalone and has no external dependencies defined in configuration files.
*   **Context:** The file `index.html` contains the complete source code and functionality.

## Before Each Commit

Before creating a git commit, check whether `README.md` needs to be updated to reflect the changes being committed. This includes:

*   New or removed features, tabs, or UI elements
*   Changes to preset data (telescopes, cameras, smart telescopes, objects)
*   Changes to how existing features work
*   New configuration requirements (e.g. external integrations)

## Cache-Busting

All `<script src="data/...">` tags in `index.html` carry a `?v=X.Y` query string (currently `?v=2.4`) to prevent browsers from serving stale cached data files after a deploy.

**Rule:** Whenever any file in `data/` is modified, bump the version number on **all** script tags before committing. Use a single consistent version across all tags (e.g. `?v=1.7`, `?v=1.8`, etc.).