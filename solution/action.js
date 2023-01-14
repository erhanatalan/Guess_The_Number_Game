let input = document.getElementById(`box`);
let button = document.getElementById(`btn`);
let p = document.getElementById(`guess`);
let number = Math.floor(Math.random() * 100);
let span = document.getElementById(`span`);
let img = document.getElementById(`img`);

let counter = 4;
console.log(number);

button.addEventListener("click", () => {
  console.log(input.value);

  if (counter > 0) {
    if (number > input.value) {
      span.innerText = `guess the bigger number than ${input.value},number of attempts ${counter}`;
      counter--;
    } else if (number < input.value) {
      span.innerText = `guess the smaller number than ${input.value},number of attempts ${counter}`;
      counter--;
    } else {
      span.innerText = `WIN!`;
      document.getElementById("img").src = "./images/win.gif";
      img.style.width = "800px";
      window.setTimeout(function () {
        location.reload(true);
      }, 3000);
    }
    input.focus();
    input.value = "";
  } else if (counter == 0) {
    p.innerText = ``;
    document.getElementById("img").src = "./images/lose.gif";
    img.style.width = "800px";
    window.setTimeout(function () {
      location.reload(true);
    }, 3000);
  }
});

window.addEventListener("load", () => {
  input.focus();
});

input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    button.click();
  }
});