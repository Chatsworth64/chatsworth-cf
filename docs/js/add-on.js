/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/

const darkIconClass = 'fas fa-moon fa-2x'
const lightIconClass = 'fas fa-sun fa-2x'
var darkCSS = $("#dark-theme");
var darkToggleIcon = $("#dark-toggle i");

// Set theme with the given mode and toggle the theme icon button
function setThemeMode(mode) {
  if (mode === "dark") {
    darkCSS.prop('disabled', false)
    $("#dark-toggle i").attr('class', lightIconClass)
  } else if (mode === "light") {
    darkCSS.prop('disabled', true)
    darkToggleIcon.attr('class', darkIconClass)
  }
  localStorage.setItem("dark-theme", mode);
}

// Toggle dark mode when user click on the icon button
$("#dark-toggle").click(function () {
  if (darkToggleIcon.attr("class") == darkIconClass) {
    setThemeMode("dark")
  } else if (darkToggleIcon.attr("class") == lightIconClass) {
    setThemeMode("light")
  }
});

var savedTheme = localStorage.getItem("dark-theme") || "light";
setThemeMode(savedTheme)
