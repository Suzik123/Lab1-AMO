const btn = document.querySelector(".btn");
const txtresult = document.querySelector(".result");
const inputera = document.querySelector(".inputera");
const inputerb = document.querySelector(".inputerb");
const fileInput = document.getElementById("fileInput");
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  inputera.value = "";
  inputerb.value = "";
  txtresult.textContent = "Результат";
});
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const numbers = e.target.result.split(" ").map((el) => Number(el));
    if (
      numbers.length >= 2 &&
      numbers.every((el) => !isNaN(parseInt(el, 10)))
    ) {
      inputera.value = numbers[0];
      inputerb.value = numbers[1];
    } else {
      txtresult.textContent = "Неправильно введені дані";
    }
  };
  reader.readAsText(file);
});

btn.addEventListener("click", () => {
  const a = Number(inputera.value);
  const b = Number(inputerb.value);
  const rez = Math.sin(a + b) - Math.pow(Math.cos(a - b), 2);
  txtresult.textContent = `Остаточний результат ${rez.toFixed(6)}`;
});
