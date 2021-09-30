const perpendicularElement = document.querySelector("#perpendicular");
const baseElement = document.querySelector("#base");
const btnSubmitPandB = document.querySelector("#btn-submit-PandB");

//message element is declared in sumAngles.js file
btnSubmitPandB.addEventListener("click", function () {
  let perpendicular = Number(perpendicularElement.value);
  let base = Number(baseElement.value);
  let hypotenuse = Math.sqrt(Math.pow(perpendicular, 2) + Math.pow(base, 2));
  if (perpendicular > 0 && base > 0) {
    message.innerText = "Hypotenuse is " + hypotenuse;
  } else {
    message.innerText = "Enter Valid Inputs";
  }
});
