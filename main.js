var menu = document.querySelector(".logo");
menu.addEventListener("click", function () {
    document.querySelector(".section").classList.toggle("opened");
    document.querySelector(".main").classList.toggle("opened");
    
}, false);