// Function to handle theme switching
function handleTheme() {
  // Check if there's a 'dark' theme stored in localStorage or if the user's system prefers dark mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// On page load or when changing themes, call the handleTheme function
document.addEventListener('DOMContentLoaded', handleTheme);

// Whenever the user explicitly chooses light mode
function setLightMode() {
  localStorage.theme = 'light';
  handleTheme(); // Update the theme immediately
}

// Whenever the user explicitly chooses dark mode
function setDarkMode() {
  localStorage.theme = 'dark';
  handleTheme(); // Update the theme immediately
}

// Whenever the user explicitly chooses to respect the OS preference
function respectOSPreference() {
  localStorage.removeItem('theme');
  handleTheme(); // Update the theme immediately
}
