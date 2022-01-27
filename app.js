const chipsArray = [];

const init = () => {
  const input = document.querySelector(".chip-input");
  const chipHolder = document.querySelector(".text-holder");
  //const chips = document.querySelector(".close-icon");

  input.addEventListener("change", function (e) {
    const val = e.target.value;
    chipsArray.push(val);
    e.target.value = "";
    console.log(chipsArray);
    const div = document.createElement("div");
    const icon = document.createElement("span");
    icon.classList = ["far fa-times-circle close-icon"];
    const id = val + "-" + new Date().getTime();
    icon.setAttribute("id", id);
    div.textContent = val;
    div.className = "chip-item";
    div.appendChild(icon);
    chipHolder.appendChild(div);
  });

  //   chips.addEventListener("click", function (e) {
  //     console.log(e);
  //   });
};

window.addEventListener("DOMContentLoaded", (event) => {
  init();
});
