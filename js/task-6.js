function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElements = document.querySelector(`#controls button`);
console.log(btnElements[0]);
console.log(btnElements[1]);

const inputElement = document.querySelector(`input`);

const divElement = document.querySelector(`#boxes`);


inputElement.addEventListener(`input`, btnCreate);

btnElements[0].addEventListener(`click`, createBoxes(valueNumber));

function btnCreate(event) {
  console.log(event.target.value);
  let valueNumber = event.target.value;
  return valueNumber;
}

createButton.addEventListener('click', () => {
  const amount = document.querySelector('#controls input').value
  createBoxes(amount)
}

function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    const color = getRandomHexColor();
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div class = "square"
      style = "width: ${size}px; height: ${size}px; background-color: ${color};">
    </div>`
    );
    size += 10;
  }
  // for (let i = 0; i < amount; i++) {
  //   let divMake = document.createElement(`div`);
  //   const divMakeColor = getRandomHexColor();
  //   divMake.style.width = `${30 + 10 * i}px`;
  //   div.Make.style.height = `${30 + 10 * i}px`;
  //   div.Make.style.backgroundColor = `${divMakeColor}`;
  //   divElement.appendChild(divMake);
  //   console.log(divMake);
  // }
}

// for (let index = 0; index < amount; index++) {
//   const color = getRandomHexColor();
//   boxes.insertAdjacentHTML(
//     "beforeend",
//     `<div class = "square"
//       style = "width: ${size}px; height: ${size}px; background-color: ${color};">
//     </div>`
//   );
//   size += 10;
// }
