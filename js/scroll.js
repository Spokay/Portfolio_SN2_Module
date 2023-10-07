let container = document.querySelector("#scroll-container");
container.addEventListener("wheel", function (e) {
    e.preventDefault();
    container.scrollLeft += e.deltaY.valueOf();
});




