let container = document.querySelector("#scroll-container");
let landingPage = document.querySelector(".landing");
let pages = document.querySelectorAll(".page");
let range = document.querySelector(".range");
let rangeLabel = document.querySelector(".range__label");
let totalWidth = 0;

pages.forEach((page) => totalWidth += page.offsetWidth.valueOf());

range.style.width = totalWidth+"px";
window.addEventListener("resize", function (){
    range.style.width = totalWidth+"px";
});

container.addEventListener("wheel", function (e) {
    e.preventDefault();
    container.scrollLeft += e.deltaY.valueOf();
});

container.addEventListener("scroll", function (e) {
    let percentValue = (container.scrollLeft.valueOf() / (totalWidth - landingPage.offsetWidth.valueOf())) * 100;
    if (percentValue === 100){
        e.preventDefault();
        range.style.setProperty("--p", percentValue.toString());
        rangeLabel.innerText = percentValue.toString().concat("%");
    }else if (percentValue < 100){
        console.log(percentValue);
        range.style.setProperty("--p", percentValue.toString());
        rangeLabel.innerText = Math.round(percentValue).toString().concat("%");
    }
});




