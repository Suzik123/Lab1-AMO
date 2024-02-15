"use strict";

const btn = document.querySelector(".btn");
const txtresult = document.querySelector(".result");
const inputern = document.querySelector(".inputern");
const inputerMin = document.querySelector(".inputerMin");
const inputerMax = document.querySelector(".inputerMax");
const fileInput = document.getElementById("fileInput");
const clearBtn = document.querySelector(".clear");
const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
clearBtn.addEventListener("click", () => {
  inputern.value = "";
  inputerMin.value = "";
  inputerMax.value = "";
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
      numbers.length >= 3 &&
      numbers.every((el) => !isNaN(parseInt(el, 10)))
    ) {
      inputern.value = numbers[0];
      inputerMin.value = numbers[1];
      inputerMax.value = numbers[2];
    } else {
      txtresult.textContent = "Неправильно введені дані";
    }
  };
  reader.readAsText(file);
});

btn.addEventListener("click", () => {
  const n = Number(inputern.value);
  const min = Number(inputerMin.value);
  const max = Number(inputerMax.value);
  const m = [...Array(n)];
  const c = [...Array(n)];
  const p = [...Array(n)];
  if (min > max) {
    txtresult.textContent =
      "Мінімальне число не може бути більше максимального";
  } else if (min == 0 && max == 0) {
    txtresult.textContent = "Неправильно введені дані";
  } else {
    for (let i = 0; i < n; i++) {
      m[i] = randNum(min, max);
      c[i] = randNum(min, max);
      p[i] = randNum(min, max);
    }
    let numerator = 0;
    let denominator = 0;
    for (let i = 0; i < n; i++) {
      numerator += m[i] + c[i];
      denominator += p[i] + c[i];
    }
    console.log(numerator, denominator);
    if (denominator === 0) {
      txtresult.textContent = "Нижня сума дорівнювати нулю";
    }
    if (numerator < 0 || denominator < 0) {
      txtresult.textContent = "Значення під коренем виходить від'ємним";
    } else {
      rez = Math.sqrt(numerator / denominator);
      txtresult.textContent = `Остаточний результат ${rez.toFixed(2)}`;
    }
  }
});
