// NO JS
var navListNoJS = document.querySelector(".main-nav--nojs");  // класс для удаления при подключение js

if(navListNoJS) {
  navListNoJS.classList.remove("main-nav--nojs");
}

// MENU
var toggleMainMenu = document.querySelector("#hamburger"); // кнопка гамбургера
var mainNav = document.querySelector(".main-nav");
toggleMainMenu.addEventListener("click", toggleMenu); // переключение главного меню

function toggleMenu(e) {
  e.preventDefault();
  mainNav.classList.toggle("main-nav--visible");
}

// POPUP
var
    showPopUp = document.querySelector(".overlay--hidden"), // класс для скрытия попапа - удаляем
    popUp = document.querySelector("#buy"), // кнопка попапа на странице
    hiddenPopUp = document.querySelector(".btn--popup"), // кнопка попапа внутренняя
    modalPopup = document.querySelector(".modal-popup"); // cамо окно попапа

if (popUp) {
  popUp.addEventListener("click", popup);  // показать попап
  hiddenPopUp.addEventListener("click", popup);  // скрыть попап
}

function popup(e) {
  e.preventDefault();
  showPopUp.classList.toggle("overlay--hidden");
}
