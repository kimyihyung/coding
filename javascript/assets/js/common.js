hljs.highlightAll();

// 모달
const modalBtn = document.querySelector(".modal__btn");
const modalClose = document.querySelector(".modal__close");
const modalCont = document.querySelector(".modal__cont");

modalBtn.addEventListener("click", () => {
    modalCont.classList.add("show");
    modalCont.classList.remove("hide");
});
modalClose.addEventListener("click", () => {
    modalCont.classList.add("hide");
})

//탭 메뉴
const tapBtn = document.querySelectorAll(".modal__box .tabs > div");
const tapCont = document.querySelectorAll(".modal__box .cont > div");

tapBtn.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();

        tapBtn.forEach(li => {
            li.classList.remove("active");
        })
        element.classList.add("active");

        tapCont.forEach(div => {
            div.style.display = "none";
        });

        tapCont[index].style.display = "block";
    });
});