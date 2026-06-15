const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("change", function(){
    document.body.classList.toggle("dark-theme");
});