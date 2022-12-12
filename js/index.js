let menu = document.getElementById("menu");
let navLinks = document.getElementById("navLinks");

menu.addEventListener("click", function () {
    if(navLinks.style.display == "none") {
        navLinks.style.display = "block";
    }else {
        navLinks.style.display = "none";
    }
});