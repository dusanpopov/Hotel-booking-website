// Selectors
const header = document.querySelector(".main-header");
const hamburegerMenu = document.querySelector(".hamburger-menu");
const formBtns = document.querySelectorAll(".btn-form");

window.addEventListener("scroll", () => {
    const windowPosition = window.scrollY > 120;
    header.classList.toggle("active", windowPosition);
})

hamburegerMenu.addEventListener("click", () => {
    header.classList.toggle("menu-open");
});

formBtns.forEach(formBtn => {
    formBtn.addEventListener("click", (e) => {
        e.preventDefault();
    })
})