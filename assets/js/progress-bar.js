let landingPage;
let pages;
let range;
let rangeLabel = document.querySelector(".range__label");
let totalWidth;

function loadData(){
    landingPage = document.querySelector(".landing");
    pages = document.querySelectorAll(".page");
    range = document.querySelector(".range");
    container = document.querySelector("#scroll-container");
    totalWidth = 0;
    pages.forEach((page) => totalWidth += page.offsetWidth.valueOf());
    range.style.width = totalWidth+"px";
}
window.addEventListener("load", function () {
   loadData();
});

window.addEventListener("resize", function (){
    loadData();
    range.style.width = totalWidth+"px";
});

container.addEventListener("scroll", function (e) {
    let percentValue = (container.scrollLeft.valueOf() / (totalWidth - landingPage.offsetWidth.valueOf())) * 100;
    if (percentValue === 100){
        e.preventDefault();
        range.style.setProperty("--p", percentValue.toString());
        rangeLabel.innerText = percentValue.toString().concat("%");
    }else if (percentValue < 100){
        range.style.setProperty("--p", percentValue.toString());
        rangeLabel.innerText = Math.round(percentValue).toString().concat("%");
    }
});