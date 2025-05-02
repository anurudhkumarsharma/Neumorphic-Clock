# Neumorphic Digital Clock with Theme Switch

A stylish and functional digital clock application featuring a neumorphic design aesthetic, built entirely with vanilla HTML, CSS, and JavaScript. This project demonstrates modern front-end techniques including CSS variables for theming and `localStorage` for persistence.

![Clock Demo]Clock-light.png
*(Optional: Replace the line above with an actual screenshot link once you have one, e.g., ![Clock Demo](demo.gif))*

## Features

* **Neumorphic Design:** Soft user interface elements using subtle shadows and highlights.
* **Real-Time Clock:** Displays the current time accurately (Hours:Minutes:Seconds) with a blinking separator.
* **Full Date Display:** Shows the current weekday, month, day, and year.
* **12/24 Hour Format:** Easily toggle between 12-hour (with AM/PM) and 24-hour time display using dedicated buttons.
* **Light/Dark Theme:** Switch between a light and a dark color scheme using a neumorphic toggle switch.
* **Theme Persistence:** Remembers your chosen theme (light or dark) across browser sessions using `localStorage`.
* **Smooth Transitions:** Subtle animations provide a smooth visual experience when switching themes.
* **Pure Front-End:** Built with standard web technologies - no external frameworks needed (besides the core languages).
* **Organized Code:** Separated into `index.html`, `style.css`, and `script.js` for clarity and maintainability.

## Getting Started

To run this project locally:

1.  **Download or Clone:** Download the project files or clone the repository (if applicable).
2.  **Navigate to Folder:** Ensure the `index.html`, `style.css`, and `script.js` files are all located in the same folder.
3.  **Open in Browser:** Simply open the `index.html` file in your preferred web browser.

No build steps or dependencies are required.

## Technologies Used

* **HTML5:** For the structure and content.
* **CSS3:** For styling, layout (Flexbox), animations, and neumorphic effects.
    * **CSS Variables:** Used extensively for easy theming and maintenance.
* **Vanilla JavaScript:** For clock logic, date/time manipulation, DOM interaction, event handling, and managing `localStorage`.

## How It Works

* The JavaScript fetches the current date and time every second using `setInterval`.
* It formats the date and time strings according to the selected 12/24 hour format.
* The DOM is updated to display the new time and date.
* Event listeners on the buttons update the time format preference.
* The theme switch toggles a class (`dark-theme`) on the `<body>` element.
* CSS rules associated with `.dark-theme` override the default CSS variable values to change the appearance.
* The selected theme ('light' or 'dark') is stored in `localStorage` and retrieved on page load to maintain user preference.