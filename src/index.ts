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
// input

function remInput() {
  return (productName!.value = ""), (quantity!.value = "");
}

//create element
function addElement() {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const ul = document.createElement("ul");
  const minusBtn = document.createElement("li");
  const plusBtn = document.createElement("li");
  const spanName = document.createElement("span");
  const spanQuantity = document.createElement("span");

  //add context
  let name;
  minusBtn.textContent = "-";
  plusBtn.textContent = "+";
  const getNameInput = productName!.value;
  const getQuantitiyInput = quantity!.value;
  spanName.textContent = getNameInput;
  spanQuantity.textContent = getQuantitiyInput;

  //append to DOM
  div2.appendChild(spanName);
  div1.appendChild(div2);
  ul.appendChild(minusBtn);
  ul.appendChild(spanQuantity);
  ul.appendChild(plusBtn);
  div1.appendChild(ul);

  let inhalt = document.getElementById("feld");
  inhalt!.appendChild(div1);

  //add class
  div1.classList.add("container");
  div2.classList.add("wrapper");
  minusBtn.classList.add("minus");
  plusBtn.classList.add("plus");
  spanName.classList.add("inputName");
  spanQuantity.classList.add("inputQuantity");

  remInput();

  // counter
  const hp = spanQuantity;

  const countdown = document.querySelector<HTMLElement>(".minus");
  countdown!.onclick = () => {
    count -= 1;
    hp.innerHTML = `${count}`;

    if (count <= 0) {
      div1.style.display = "none";
    }
  };

  const countup = document.querySelector<HTMLElement>(".plus");
  var count = parseInt(getQuantitiyInput);
  countup!.onclick = () => {
    count += 1;
    hp.innerHTML = `${count}`;
  };
}
