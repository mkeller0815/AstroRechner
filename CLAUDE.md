# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## High-Level Architecture

The repository is a self-contained, single-file application designed to function as an astronomical calculator (`AstroRechner.html`).

*   **Structure:** The entire application—including the HTML structure, styling, and calculation logic—is housed within the `AstroRechner.html` file.
*   **Architecture:** The project is purely client-side, meaning all calculations and UI logic execute in the user's web browser. There is no separate backend API or complex build system.
*   **Focus:** Any modifications to the application must be made directly to the JavaScript/HTML logic within `AstroRechner.html`.

## Common Development Commands

Since this is a self-contained HTML application, standard build and linting steps are not applicable.

*   **Run Application:** Open `AstroRechner.html` directly in a web browser.
*   **Edit/Modify:** Use the `Edit` tool to modify the content of `AstroRechner.html` to change functionality or appearance.
*   **Test:** Due to the single-file, client-side nature, testing involves manual verification within the browser environment.

## Dependencies and Notes

*   **Dependencies:** The application is completely standalone and has no external dependencies defined in configuration files.
*   **Context:** The file `AstroRechner.html` contains the complete source code and functionality.