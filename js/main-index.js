var buttonBurger = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");
var icon = document.querySelector(".burger__icon");
var headerInner = document.querySelector(".page-header__inner");
var header = document.querySelector(".page-header--index");

buttonBurger.classList.remove("page-header__toggle--hide");
menu.classList.add("main-nav--hide");
headerInner.classList.add("page-header__inner--transparent");
header.classList.add("page-header--index-menu-closed");

buttonBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav--hide");
  if (!menu.classList.contains("main-nav--hide")) {//открытое меню
    icon.classList.add("burger__icon--open");
    headerInner.classList.remove("page-header__inner--transparent");
    header.classList.remove("page-header--index-menu-closed");
  }
  if (menu.classList.contains("main-nav--hide")) {//закрытое меню
    icon.classList.remove("burger__icon--open");
    headerInner.classList.add("page-header__inner--transparent");
    header.classList.add("page-header--index-menu-closed");
  }
});
