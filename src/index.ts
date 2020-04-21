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

// remove input

function remInput() {
  return (productName!.value = ""), (quantity!.value = "");
}

//create element
let x = 0;
function addElement() {
  x++;
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

  div1.setAttribute("id", `${x}`);
  minusBtn.addEventListener("click", countdownMinus);

  plusBtn.addEventListener("click", countupPlus);

  remInput();
}

// counter

function countdownMinus(event: any) {
  let contElem = event.target.parentElement.parentElement;
  let id = contElem.getAttribute("id");
  minus(id);
}

function countupPlus(event: any) {
  let contElem = event.target.parentElement.parentElement;
  let id = contElem.getAttribute("id");
  plus(id);
}

function minus(p_id: any) {
  let parElem = document.getElementById(p_id);
  let countMinus = parElem!.firstElementChild!.nextElementSibling!
    .firstElementChild;

  let span = countMinus!.nextElementSibling;
  let count = parseFloat(span!.innerHTML);

  count -= 1;
  span!.innerHTML = `${count}`;

  if (count <= 0) {
    parElem!.style.display = "none";
  }
}

function plus(p_id: any) {
  let parElem = document.getElementById(p_id);
  let countPlus = parElem!.firstElementChild!.nextElementSibling!
    .firstElementChild!.nextElementSibling!.nextElementSibling;

  let span = countPlus!.previousElementSibling;
  let count = parseFloat(span!.innerHTML);
  count += 1;
  span!.innerHTML = `${count}`;
}

//Speech Synthesis
const wrapper = document.querySelectorAll<HTMLElement>(".wrapper");
wrapper.forEach((el) => {
  el.onclick = () => {
    sElem(event);
  };
});

function sElem(event: any) {
  let id = event.target.getAttribute("id");
  messageBuild(id);
}

function messageBuild(p_id: any) {
  let elem = document.getElementById(p_id);
  let span1 = elem!.firstElementChild!.firstElementChild;
  let inputName = span1!.innerHTML;
  let span2 = elem!.firstElementChild!.nextElementSibling!.firstElementChild!
    .nextElementSibling;
  let count = span2!.innerHTML;

  let message = new SpeechSynthesisUtterance(
    "Liebe Oma in deinem Gefrierschrank befinden sich " + count + inputName
  );

  console.log(message);

  message.lang = "de-DE";

  speakText(message);
}

// Speak text
function speakText(message: any) {
  speechSynthesis.speak(message);
}
