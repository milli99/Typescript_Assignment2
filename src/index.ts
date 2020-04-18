//Pop up with blur background
const addButton = document.querySelector<HTMLElement>(".add-button");
addButton!.onclick = () => {
  const verblassen = document.querySelector("#blur");
  verblassen!.classList.toggle("active");

  const popup = document.querySelector("#windowpop");
  popup!.classList.toggle("active");
};

//form
const form = document.querySelector("#form");
const productName = document.querySelector<HTMLInputElement>(".name");
const quantity = document.querySelector<HTMLInputElement>(".quantity");

form!.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInput();
});

function checkInput() {
  if (productName!.value === "" || quantity!.value === "") {
    redVali(productName, "Produktname ist erforderlich");
    redVali(quantity, "Menge ist erforderlich");
  } else {
    const popup = document.querySelector("#windowpop");
    popup!.classList.remove("active");
    const verblassen = document.querySelector("#blur");
    verblassen!.classList.remove("active");

    addElement();
  }
}

function redVali(input: any, message: string) {
  const formControl = input.parentElement;
  const txt = formControl.querySelector("p");
  formControl.className = "validation-control red";
  txt.innerText = message;
}
