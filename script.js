const element = document.getElementById("show_more");
element.addEventListener("click", myFunction);

function myFunction() {
    const el = document.querySelector(".third-row");
    const hasHidden = el.classList.contains("hidden");
    const arrow = document.querySelector(".more_image");
    if (hasHidden) {
        el.classList.remove("hidden");
        document.getElementById("text-show").innerHTML = "Скрыть";
        arrow.classList.add("rotate");
    } else {
        el.classList.add("hidden");
        arrow.classList.remove("rotate")
        document.getElementById("text-show").innerHTML = "Показать все";
    }
}