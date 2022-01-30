const alertModal = document.querySelector("#alert-modal");

const alertOpen = document.querySelector("#alert1");

const alertModalBtn = document.querySelector(".dialog--alert .btn");

alertOpen.addEventListener("click", () => {
  alertModal.style.display = "flex";
});

alertModalBtn.addEventListener("click", (e) => {
  alertModal.style.display = "none";
});
