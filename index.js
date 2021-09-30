const buttonObj = {
  triangleCheckButton: document.querySelector("#btn-triangle-really"),
  findHypotenusButton: document.querySelector("#btn-find-hypotenus"),
  findAreaButton: document.querySelector("#btn-find-area"),
  quizButton: document.querySelector("#btn-quiz"),
};

const divObj = {
  triangleCheck: document.querySelector(".triangle-check"),
  quiz: document.querySelector(".quiz"),
  findHypotenus: document.querySelector(".give-me-hypotenuse"),
  findArea: document.querySelector(".find-area"),
};

for (let key in buttonObj) {
  displayDivBasedOnButtonClicked(key, divObj, buttonObj);
}

function displayDivBasedOnButtonClicked(btnName, divObject, btnObject) {
  btnObject[btnName].addEventListener("click", function () {
    message.innerText = "";
    clearDivs(divObject);
    display(eval(divObject[btnName.replace(/(\w+)Button/g, "$1")]));
  });
}
const clear = (whatToClear) => (whatToClear.style.display = "none");
const display = (whatToDisplay) => (whatToDisplay.style.display = "block");

const clearDivs = (divToClear) => {
  for (let key in divToClear) {
    clear(divToClear[key]);
  }
};
clearDivs(divObj);
