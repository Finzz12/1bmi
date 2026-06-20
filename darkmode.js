document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("modeToggle");
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {

   document.body.classList.add("dark-theme") ;
    }
    if (!toggle) return;

    toggle.innerText = savedTheme === "dark" ? "☀️" : "🌙";
   
    toggle.addEventListener("click", function (e) {
        e.preventDefault();
        const isDark = document.body.classList.toggle("dark-theme");
      
        localStorage.setItem("theme", isDark ? "dark" : "light");
        toggle.innerText = isDark ? "☀️" : "🌙";
        
    });
});
