hljs.highlightAll();

//모달
const windowBtn = document.querySelector(".window__btn");
const windowClose = document.querySelector(".close")
const windowCont = document.querySelector(".window__cont");


windowBtn.addEventListener("click", () => {
    windowCont.classList.add("show");
    windowCont.classList.remove("hide");
})

windowClose.addEventListener("click", () => {
    windowCont.classList.add("hide");
})

//탭 메뉴
const tabBtn = document.querySelectorAll(".window .menu-bar > span");
const tabCont = document.querySelectorAll(".content .main > div");

tabBtn.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();

        tabBtn.forEach(li => {
            li.classList.remove("active");
        });

        element.classList.add("active");

        tabCont.forEach(div => {
            div.style.display = "none";
        });

        tabCont[index].style.display = "block";
    });
});