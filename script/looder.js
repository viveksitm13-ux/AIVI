window.addEventListener("load", function () {
    const loader = document.getElementById("pageLoader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 3000);
});