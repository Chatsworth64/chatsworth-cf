/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/

const darkIconClass = 'fa-moon'
const lightIconClass = 'fa-sun'

const darkCSS = $("html")
const darkToggle = $(".dark-toggle")
const darkToggleIcon = $(".dark-toggle i")
const darkModeText = $("#dark-mode-text")

// Set theme with the given mode and toggle the theme icon button
function setThemeMode(mode) {
  if (mode === "dark") {
    darkCSS.attr('class', "dark")
    darkToggleIcon.addClass(lightIconClass)
    darkToggleIcon.removeClass(darkIconClass)
    darkModeText.text("Light mode")
  } else if (mode === "light") {
    darkCSS.removeAttr('class')
    darkToggleIcon.addClass(darkIconClass)
    darkToggleIcon.removeClass(lightIconClass)
    darkModeText.text("Dark mode")
  }
  localStorage.setItem("dark-theme", mode);
}

// Toggle dark mode when user click on the icon button
darkToggle.click(function () {
  if (darkToggleIcon.hasClass(darkIconClass)) {
    setThemeMode("dark")
  } else if (darkToggleIcon.hasClass(lightIconClass)) {
    setThemeMode("light")
  }
});

setThemeMode(localStorage.getItem("dark-theme") || "light");
