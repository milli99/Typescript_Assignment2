//Pop up with blur background
const addButton = document.querySelector<HTMLElement>(".add-button");
addButton!.onclick = () => {
  const verblassen = document.querySelector("#blur");
  verblassen!.classList.toggle("active");

  const popup = document.querySelector("#windowpop");
  popup!.classList.toggle("active");
};
