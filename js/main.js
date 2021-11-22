function toggleHamburgerMenu() {
  let navItems = [];
  console.log(document.getElementsByClassName('nav center'));
  navItems.push(document.getElementsByClassName('nav center'));
  navItems.push(document.getElementsByClassName('nav right'));
  for(navElem of navItems) {
    console.log(navElem[0].className);
    let currentClassName = navElem[0].className;
    let newClassName;
    if (currentClassName.indexOf("responsive") > -1) {
      newClassName = currentClassName.replace(" responsive", "");
    } else {
      newClassName = currentClassName + " responsive"
    }
    navElem[0].className = newClassName;
  }
}

document.getElementById('hamburger-icon').addEventListener('click', toggleHamburgerMenu);
