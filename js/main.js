
// Header scroll animation
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

})


//user menu box
function openUser() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.user')) {
        var dropdowns = document.getElementsByClassName("dropdown__content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dorpdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}