const btn = document.querySelector(".btn");
const txtresult = document.querySelector(".result");
const inputeri = document.querySelector(".inputeri");
const inputerg = document.querySelector(".inputerg");
const inputern = document.querySelector(".inputern");
const inputerb = document.querySelector(".inputerb");
const inputerk = document.querySelector(".inputerk");
const fileInput = document.getElementById("fileInput");
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  inputeri.value = "";
  inputerg.value = "";
  inputern.value = "";
  inputerb.value = "";
  inputerk.value = "";
  txtresult.textContent = "Результат";
});
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const numbers = e.target.result.split(" ").map((el) => Number(el));
    console.log(numbers);
    console.log(numbers.every((el) => !isNaN(parseInt(el, 10))));
    if (
      numbers.length >= 5 &&
      numbers.every((el) => !isNaN(parseInt(el, 10)))
    ) {
      inputeri.value = numbers[0];
      inputern.value = numbers[2];
      inputerg.value = numbers[1];
      inputerb.value = numbers[3];
      inputerk.value = numbers[4];
    } else {
      txtresult.textContent = "Неправильно введені дані";
    }
  };
  reader.readAsText(file);
});

btn.addEventListener("click", () => {
  const i = Number(inputeri.value);
  const g = Number(inputerg.value);
  const n = Number(inputern.value);
  const b = Number(inputerb.value);
  const k = Number(inputerk.value);
  let numerator = 0;
  let denominator = 0;
  let rez;

  if (i % 5 < 3) {
    numerator = Math.pow(g, g + i);
    denominator = n * Math.pow(b, k + i);
    if (denominator === 0) {
      txtresult.textContent = "Знаменник дорівнює нулю";
    } else {
      rez = numerator / denominator;
    }
  } else {
    numerator = n * Math.pow(b, g + i);
    denominator = Math.pow(g, k + i);
    if (numerator < 0) {
      txtresult.textContent = "Значення під коренем виходить від'ємним";
    } else {
      rez = Math.pow(numerator / denominator, 1 / 4);
    }
  }
  if (isNaN(rez) || rez === Infinity || rez === -Infinity) {
    txtresult.textContent = "Число виходить занадто великим 😇";
  } else {
    txtresult.textContent = `Остаточний результат ${rez.toFixed(6)}`;
  }
});
