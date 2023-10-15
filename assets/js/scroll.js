let container = document.querySelector("#scroll-container");
let navbarItems = document.querySelectorAll(".navbar-nav .nav-item a, .navbar-brand");
container.addEventListener("wheel", function(e){
    e.preventDefault();
    let newPos = e.deltaY.valueOf() > 0 ? (container.scrollLeft + 20) : (container.scrollLeft - 20);
    scrollToSmoothly(container.scrollLeft, newPos, 1);
});

function scrollToSmoothly(previousPos, newPos, timeout){
    if (newPos > previousPos){
        for (let i = previousPos; i < newPos; i++) {
            setTimeout(() => { container.scrollTo(i, 0); }, timeout);
        }
    }else{
        for (let i = previousPos; i > newPos; i--) {
            setTimeout(() => { container.scrollTo(i, 0); }, timeout);
        }
    }

}


navbarItems.forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(item.getAttribute("about"));
        let page = document.querySelector(item.getAttribute("about"));
        scrollToSmoothly(container.scrollLeft, page.offsetLeft, 1);
    });
});



