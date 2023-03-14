/**
 *  ? Завдання 1
 * Згенерувати випадкове число за допомогою
 * Math.round(Math.random() * (max - min) + min) псевдовипадкове число від 1 до 10
 */

const max = 10;
const min = 0;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result);

/**
 * ? Завдання 2
 * Напиши скрипт, який просить користувача ввести число та ступінь
 * зводить число в цей ступінь і виводить результат у консоль
 */

// // ? Крок 1 Попросити користувача ввести число та зберегти у змінну
// let userNumberPromt = prompt('Давай число');
// userNumberPromt = Number(userNumberPromt);
// console.log(userNumberPromt);

// // ? Крок 2 Попросити ввести ступінь і зберегти змінну
// let userDegreePromt = prompt('Давай степень');
// userDegreePromt = Number(userDegreePromt);
// console.log(userDegreePromt);

// // ? Крок 3 звести введені дані до ступеня та вивести в консоль
// const result2 = userNumberPromt ** userDegreePromt;
// console.log(result);

/**
 * ? Завдання 3 Генерим псевдовипадкові кольори body
 */

const colorsBoby = ['tomato', 'white', 'pink', 'orange'];
const max1 = colorsBoby.length - 1;
const min1 = 0;

const index = Math.round(Math.random() * (max1 - min1) + min1);
const color = colorsBoby[index];
console.log(color);

document.body.style.background = color;

/**
 * ? Завдання 4
 * Знайти зарезервоване (потрібне) слово за допомогою методу includes()
 * Метод includes() - пошук у рядку потрібного слова, повертає буль - true якщо входить і false у противному випадку
 */

const word1 = 'cпам';
const word2 = 'pаспродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой модели, не пропустите!';
const string3 = 'Рекламная компания спам и распродажа';

console.log(string1.includes('спам'));
console.log(string1.includes('распродажа'));

console.log(string2.includes('спам'));

const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes('распродажа'));

console.log(string3.includes('спам'));
console.log(string3.includes('распродажа'));

/**
 * ? Завдання 5
 * Напиши скрипт який перевіряє входження числа у відрізок позначений х1 та х2 ${змінна}
 * До х1 10 початок відрізка
 * Після х2 30 кінець відрізка
 * Від х1 до х2
 * До х1 або після х2
 * і саме чило 50 яке потрібно перевірити чи входить у відрізок
 */

const start = 10;
const end = 30;
const number = 50;

console.log(`Число ${number} попадает в отрезок до ${start}? `, number < start);

console.log(`Число ${number} попадает в отрезок до ${end}? `, number > end);

console.log(
  `Число ${number} попадает в отрезок от ${start} до ${end}? `,
  number > start && number < end,
);

console.log(
  `Число ${number} попадает в отрезок до ${start} или после ${end}? `,
  number < start || number > end,
);

/**
 * ? Завдання 6
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем
 * Для цього користувач повинен бути іншим і онлайн і без режиму не турбувати &&
 * Для цього користувач має бути
 * Другом
 * онлайн
 * без режиму не турбувати
 */

const isOnline = true;
const isFrend = true;
const isDnd = false;

const canOpenChat = isOnline && isFrend && !isDnd;
console.log('Можно открыть чат? ', canOpenChat);

/**
 * ? Завдання 7
 * Напиши скрипт перевірки підписки користувача при доступі до контенту
 * Є 3 типи передплати free pro та vip
 * Отримати доступ можуть лише користувачі pro та vip
 */

const sub = 'pro';

const canAccessContent = sub === 'pro' || sub === 'vip';
console.log('Есть доступ к контенту? ', canAccessContent);
