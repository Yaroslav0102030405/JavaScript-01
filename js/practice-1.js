/**
 * ? Змінна const
 * Оголошення змінної починається з ключового слова const.
 * const змінна має бути відразу ініціалізована значенням, після чого його не можна перевизначити.
 * Для назви зміної виикористовуйте camelCase-нотацію
 */

const myYearOfStudy = 2022;
console.log(myYearOfStudy);

const month = 'August';
console.log(month);

const number = 1;
console.log(number);

/**
 * ? Змінна let
 * Для того, щоб оголосити змінну, якій у майбутньому можна буде надати нове значення, використовується ключове слово let.
 * let змінна має бути не ініціалізована значенням
 */

let summer;
console.log(summer);

summer = 2023;
console.log(summer);

/**
 * ? В яких випадках використовувати КОНСТАНТИ ?
 * Імена КОНСТАНТ - змінних, значення яких ніколи не змінюється протягом роботи всього скрипта,
 * зазвичай записуються у форматі UPPER_SNAKE_CASE.
 */

// Константа, що зберігає значення кольору
const COLOR_TEAL = '#009688';

// Константа, що зберігає повідомлення про результат логіну
const LOGIN_SUCCESS_MESSAGE = 'Ласкаво просимо!';

/**
 * ? Оператор typeof
 * Використовується для отримання типу змінної.
 * Повертає місце свого виклику тип значення змінної зазначеного після нього - рядок у якому зазначений тип.
 * string, numbers, boolean, undefined, object
 */

const name = 'Yaroslav';
const surName = 'Lukovetskyi';
const age = 41;
const areYouStudent = true;
const durationOfStudy = null;
let englishProficiencyLevel;

console.log(typeof name);
console.log(typeof surName);
console.log(typeof age);
console.log(typeof areYouStudent);
console.log(typeof englishProficiencyLevel);

console.log(
  `My name is ${name} ${surName} me ${age} I am a student IT courses GO IT`,
);

/**
 * ? Метод promt() -
 * выводит модальное окно с полем ввода и кнопками Ok и Cancel.
 * При записи Хорошо, получилось то, что ввел пользователь, при Отмене - возвращается ноль.
 */

// let numberPrompt = prompt('Enter the number');
// console.log(Number(numberPrompt))

/**
 * ? Метод Number.parseInt() - парсит з рядка ціле число
 */

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log(elementWidth);

/**
 * ? Метод Number.parseFloat() - парсит з рядка дробове число
 */

let elementWidthp = '200.74px';
elementWidthp = Number.parseFloat(elementWidthp);
console.log(elementWidthp); // 200.74

/**
 * ? Метод toFixed(2)
 */

let sumSalary = 1300.6789;
sumSalary = Number(sumSalary.toFixed(2));
console.log(sumSalary);

/**
 * ? Приведення до числа з функцію Number(val)
 */

const value = 5;
const string = 'Hello';
console.log(Number(string)); // NaN - неможливо привести до числа

/**
 * ? Властивість length - дізнатися довжину рядка
 */

const message = 'У цьому рядку 26 символів.';
console.log(message.length);

/**
 * ? Шаблонні рядки ${вираз}
 */

const firstName = 'Chelsy';
const lastName = 'Emerald';
const type = 'VIP';
const room = 716;

const welcomeMsd = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room} `;
console.log(welcomeMsd);

/**
 * ? Методи toLowerCase() - повертає новий рядок і приводить його до нижнього регістру
 * Нормалізація введення користувача
 */

let brand = 'SuMsUnG';
brand = brand.toLowerCase();
console.log(brand);

/**
 * ? Звернеться до будь-якого символу рядка console.log(змінна[0])
 */

let brand2 = 'Sumsbng';
console.log(brand2[0]);

/**
 * ? Метод slice() - обрізати у рядку будь-яку букву чи частину слова
 */

let brand3 = 'SuMsung';
console.log(brand3.slice(1).toLowerCase());

let brand4 = 'SuMsung';
brand3 = brand4[0] + brand4.slice(1, 4);
console.log(brand4.toLowerCase());

/**
 * ? Оператори порівняння > < >= <= оператори повертають буль true або false
 */

console.log(5 > 10); // false
console.log(15 > 10); // true
console.log(15 >= 10); // true
console.log(15 >= 15); // true
console.log(15 < 30); // true
console.log(15 < 3); // false

/**
 * ? Приведення до числа з функцію Number(val)
 */

console.log(true > 5);
console.log(Number(true));

/**
 * ? Оператор суворої рівності === У такому разі, все одно тільки собі 5 = 5, a = a
 */

const isEqual = 1 === '1';
console.log(isEqual); // false

/**
 * ? Приведення до булю використовуємо конструктор Boolean()
 * Є перетворення булеве це коли будь-яке значення приводиться до true або false
 */

console.log(Boolean(5));
console.log(Boolean('qwe'));

/**
 * ? Існує 6 помилкових (falsy) значень, що призводять до false у логічному
 * перетворенні: 0, NaN, null, undefined, порожній рядок та false. Абсолютно все інше доводиться до true.
 */

// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(false));

/**
 * ? Логічне І &&
 * Перевіряє всі значення на true або false
 * Запинається на брехні (false)
 * Повертає те, на чому затнулося або останній оперант
 * Застосовуються коли потрібно перевірити 2 умови
 */

console.log(5 && 6); // 6
console.log(5 && 6 && 7 && 'hello'); // hello
// В этой цепочке нет ни одного значения false по этому возвращает последнее значение
// Ищет до первого false и запинаеться на нем
// console.log(false && 'hello');

/**
 * ? Логічне АБО (оператор ||)
 * - Запинається на правді true
 * - Повертає те, на чому заптнулося чи останній оперант
 * Тобто або це чи це чи це
 */

console.log(5 || 7 || 8 || 10); // 5
console.log(false || 7 || 8 || 10); // 7
console.log(false || 0 || 8 || 10); // 8
console.log(false || 0 || null || 10); // 10

/**
 * ? Логічне НЕ (оператор!)
 * Робить інверсію правда > брехня та брехня > правда
 */

console.log(!false); // true
console.log(!true); // false
console.log(!0); // true

/**
 * ? Інструкція if це код за умовою коли наводиться до true тоді виконується тіло якщо до false тоді ігнорується тіло
 * коли одна умова
 */

if (5 > 3) { // условие приводиться к true тогда тут выполниться тело
    console.log('qwe')
}
console.log('Дальше')

if (5 > 30) { // условие приводиться к false тут не выполниться тело
    console.log('аfgh')
}
console.log('Нет')

/**
 * ? Інструкція if...else якщо умова наводиться до false, виконається код у фігурних дужках після оператора else.
 * коли одна умво але два різних варіфнти виконання коду
 */

if (50 > 30) {
  console.log('x > y');
} else {
  console.log('x < y');
}

/**
 * ? Інструкція else...if - коли багато умов але виконатися має тільки одна
 */

const salary = 1501;

if (salary <= 500) {
  console.log('Уровень 1');
} else if (salary > 500 && salary <= 1500) {
  console.log('Уровень 2');
} else if (salary > 1500 && salary < 3000) {
  console.log('Уровень 3');
} else {
  console.log('Уровень 4');
}
console.log('qwe');


/**
 * ? Тернарний оператор - це більш синтаксично коротка заміна інструкції if...else, 
 * ? коли одній і тій же змінній необхідно надати різні значення за умовою.
 */

const balance = 1000;

const masage = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
console.log(masage);

 // ? Запишемо операцію пошуку більшої кількості

 const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10

/**
 * ? Область видимості змінних – доступність змінних у певному місці коду.
 * Глобальна область видимості змінної
 * Блокова область видимості змінних
 */

const value = 5;

if (true) {
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // 5

// ? Коли помилка глобальної області видимості

if (true) {
  const value = 5;
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // ReferenceError: value is not defined
