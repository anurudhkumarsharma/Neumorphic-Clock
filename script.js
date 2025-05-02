document.addEventListener('DOMContentLoaded', function() {
            // Clock Elements
            const timeElement = document.getElementById('time');
            const dateElement = document.getElementById('date');
            const btn24h = document.getElementById('btn24h');
            const btn12h = document.getElementById('btn12h');

            // Theme Switch Elements
            const themeToggle = document.getElementById('theme-toggle');
            const bodyElement = document.body;
            const themeLabel = document.getElementById('theme-label-text');

            let is24HourFormat = true;

            // --- Clock Logic ---
            function updateClock() {
                const now = new Date();

                // Update time
                let hours = now.getHours();
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');
                let timeString;

                if (is24HourFormat) {
                    hours = String(hours).padStart(2, '0');
                    timeString = `${hours}<span class="separator">:</span>${minutes}<span class="separator">:</span>${seconds}`;
                } else {
                    const period = hours >= 12 ? 'PM' : 'AM';
                    hours = hours % 12 || 12;
                    hours = String(hours).padStart(2, '0');
                    timeString = `${hours}<span class="separator">:</span>${minutes}<span class="separator">:</span>${seconds} <small>${period}</small>`; // Added small tag for AM/PM
                }

                timeElement.innerHTML = timeString;

                // Update date
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const dateString = now.toLocaleDateString(undefined, options);
                dateElement.textContent = dateString;
            }

            // Toggle between 12h and 24h formats
            btn24h.addEventListener('click', function() {
                is24HourFormat = true;
                btn24h.classList.add('active');
                btn12h.classList.remove('active');
                updateClock();
            });

            btn12h.addEventListener('click', function() {
                is24HourFormat = false;
                btn12h.classList.add('active');
                btn24h.classList.remove('active');
                updateClock();
            });

            // --- Theme Switch Logic ---
            function setTheme(isDark) {
                 if (isDark) {
                    bodyElement.classList.add('dark-theme');
                    themeLabel.textContent = 'Dark Mode';
                    localStorage.setItem('theme', 'dark');
                } else {
                    bodyElement.classList.remove('dark-theme');
                    themeLabel.textContent = 'Light Mode';
                    localStorage.setItem('theme', 'light');
                }
            }

            themeToggle.addEventListener('change', function() {
                setTheme(this.checked);
            });

            // --- Initialization ---
            // Load saved theme preference
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                themeToggle.checked = true;
                setTheme(true);
            } else {
                themeToggle.checked = false; // Explicitly set for light/default
                setTheme(false);
            }

            // Initial clock update and interval
            updateClock();
            setInterval(updateClock, 1000);
});

