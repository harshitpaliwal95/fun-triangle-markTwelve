const inputOneElement = document.querySelector("#angle-one");
const inputTwoElement = document.querySelector("#angle-two");
const inputThreeElement = document.querySelector("#angle-three");
const btnSubmitAngles = document.querySelector("#btn-submit-angles");
const message = document.querySelector("#message");

btnSubmitAngles.addEventListener("click", function () {
  let angleOne = Number(inputOneElement.value);
  let angleTwo = Number(inputTwoElement.value);
  let angleThree = Number(inputThreeElement.value);
  let sumOfThreeAngles = angleOne + angleTwo + angleThree;
  if (angleOne > 0 && angleTwo > 0 && angleThree > 0) {
    if (sumOfThreeAngles === 180) {
      message.innerHTML = "It forms a triangle";
    } else {
      message.innerHTML = "It does not form a triangle";
    }
  } else {
    message.innerHTML = "Enter Valid Input";
  }
});
