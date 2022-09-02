const sliderWrap =document.querySelector(".slider__wrap");
const sliderImg =sliderWrap.querySelector(".slider__img");
const slider = sliderWrap.querySelectorAll(".slider");

let currentIndex = 0;             
let sliderCount = slider.length;  

setInterval(() => {
    let nextIndex = (currentIndex + 1) % sliderCount;

    slider[currentIndex].style.opacity = "0";  
    slider[nextIndex].style.opacity = "1";  

    currentIndex = nextIndex;

},3000)