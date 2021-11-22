function toggleHamburgerMenu() {
  let navItems = document.getElementsByClassName("nav center");
  if (navItems.className.indexOf("responsive") > -1) {
    navItems.className.replace(" responsive", "");
  } else {
    navItems.className += " responsive";
  }

  let navItems = document.getElementsByClassName("nav right");
  if (navItems.className.indexOf("responsive") > -1) {
    navItems.className.replace(" responsive", "");
  } else {
    navItems.className += " responsive";
  }
}