'use strict';
// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

function updateResult() {
    const h1 = document.getElementById('result');
    const input = document.getElementById('input1');

    const hi = 'Привет, ';

    h1.innerText = hi + input.value + '!';
  }

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

function updateResult2() {
  const h1 = document.getElementById('result2');
  const input = document.getElementById('input2');

  const a = input.value;
  const b = +a;
  const c = 2020 - b;

  if (!isNaN(a) && a < 2020 && a > 1900) {
      h1.innerText = 'Вам ' + c + ' полных лет';
  } else {
      h1.innerText = 'Ошибка, не правдивые данные';
  }
}

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

function updateResult3() {
  const h1 = document.getElementById('result3');
  const input = document.getElementById('input3');

  const a = input.value;
  const b = +a;
  const c = b * 2;

  if (!isNaN(a)) {
    h1.innerText = 'Периметр квадрата ' + c + ' см2';
  } else {
    h1.innerText = 'Ошибка, не числовое значение';
  }
}

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.

function updateResult4() {
  const h1 = document.getElementById('result4');
  const input = document.getElementById('input4');

  const a = input.value;
  const b = +a;
  const pi = 3.1415;
  const c = Math.floor(Math.pow(b, 2) * pi);

  if (!isNaN(a)) {
    h1.innerText = 'Площадь окружности ' + c + ' см2';
  } else {
    h1.innerText = 'Ошибка, не числовое значение';
  }
}

// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

function updateResult5() {
  const h1 = document.getElementById('result5');
  const input = document.getElementById('input51');
  const input1 = document.getElementById('input52');

  const a = input.value;
  const b = input1.value;
  const c = +a;
  const d = +b;

  const e = c / d;

  if (!isNaN(a) && !isNaN(b)) {
    h1.innerText = 'Вам надо двигаться со скоростью ' + e + ' км/час';
  } else {
    h1.innerText = 'Ошибка, не числовое значение';
  }
}

// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

function updateResult6() {
  const h1 = document.getElementById('result6');
  const input = document.getElementById('input6');

  const a = input.value;
  const b = +a;
  const c = b * 0.84;
  
  if (!isNaN(a)) {
    h1.innerText = 'Ваша сумма ' + c + ' EUR';
  } else {
    h1.innerText = 'Ошибка, не числовое значение';
  }
}

// Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

function updateResult7() {
  const h1 = document.getElementById('result7');
  const input = document.getElementById('input7');

  const a = input.value;
  const b = +a;
  const c = 820;
  const d = b * 1024;
  const e = Math.floor(d / c);
  
  if (!isNaN(a)) {
    h1.innerText = 'На вашу флешку поместится ' + e + ' файлов';
  } else {
    h1.innerText = 'Ошибка, не числовое значение';
  }
}

// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

function updateResult8() {
  const h1 = document.getElementById('result8');
  const input = document.getElementById('input81');
  const input1 = document.getElementById('input82');

  const a = input.value;
  const b = input1.value;
  const c = +a;
  const d = +b;

  const e = Math.floor(c / d);
  const f = c % d;

  
  if (!isNaN(a) && !isNaN(b)) {
      if (e < 1 ){
        h1.innerText = 'Вы не сможете купить не одной шоколадки';
      } else if (e > 1 && f == 0){
        h1.innerText = 'Вы можете съесть ' + e + ' шоколадок, и у вас не останется денег';
      } else if (e > 1 && f !==0){
        h1.innerText = 'Вы можете съесть ' + e + ' шоколадок, и у вас останется ' + f;
      }
  } else {
    h1.innerText = 'Ошибка, не числовое значение';
  }
}

// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

function updateResult9() {
  const h1 = document.getElementById('result9');
  const input = document.getElementById('input9');

  const a = input.value;
  const b = +a;

  const c = Math.floor(b / 100);
  const d = a % 100;
    const l = Math.floor(d / 10);
  const e = b % 10;

  const f = String(c);
  const h = String(l);
  const j = String(e);
  
  if (!isNaN(a) && a.length == 3) {
    h1.innerText = j+h+f;
  } else {
    h1.innerText = 'Ошибка, попробуйте еще';
  }
}

// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

function updateResult10() {
  const h1 = document.getElementById('result10');
  const input = document.getElementById('input10');

  const a = input.value;
  const b = +a;

  const c = 0.05 / 12;
  const d = b * c;

  if (!isNaN(a)) {
    h1.innerText = 'Сумма начисленных процентов будет ' + d;
  } else {
    h1.innerText = 'Ошибка, попробуйте еще';
  }
}

