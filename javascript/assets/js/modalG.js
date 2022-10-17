//모달
const modalBtnIcon = document.querySelector(".icon6");
const modalClose = document.querySelector(".modal__close");
const modalCont = document.querySelector(".modal__cont");

modalBtnIcon.addEventListener("click", () => {
  modalCont.classList.add("show");
  modalCont.classList.remove("hide");
});
modalClose.addEventListener("click", () => {
  modalCont.classList.add("hide");
});
