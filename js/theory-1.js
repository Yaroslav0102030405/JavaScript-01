/**
 * ! Що таке JavaScript?
 * - это динамический язык програмирования который добавляет интерактивным элементам функциональности.
 */

/**
 * ? Як працює код JavaScript?
 * код JS викнокується з верху до низу рядок за рядком
 * Пока перший рідок не виконався то другий рядок не почне виконуватися
 */

/**
 * ? Для чого використовується язик JavaScript?
 * призначений для взаємодії з елементами веб-сторінок та додавання інтерактивності
 * - нескладні обчислення
 * - динамічна зміна HTML-документа
 * - зберігання інформації у браузері користувача
 * - перевірка та маніпуляція введеними користувачем даними
 * - змінювати структуру та зовнішній вигляд вебсторінки
 * - створення інтерактивних елементів: галерей, графіків тощо
 * - асинхронно обмінюватися даними з сервером (взаємодія з бекендом)
 */

/**
 * TODO: Підключення JavaScript скрипту
 * скрипт підключають перед закриваючим тегом <body>
 * <body>
    <!-- контент -->
    <script src="js/script.js"></script>
  </body>
 */

/**
 * ? Підключення декілька JavaScript скриптів
 * При підключенні кількох JavaScript-файлів до сторінки інтерпретатор
 * обробляє їх у тому порядку, в якому вони вказані в HTML - файлі.
 * <script src="js/script-1.js"></script>
 * <script src="js/script-2.js"></script>
 */

/**
 * ? Інструменти розробника
 * Консоль браузера показує інформацію, пов'язану з веб-сторінкою, у тому числі
 * повідомлення про помилки та попередження виконання JS-коду, запущеного в контексті сторінки.
 */

/**
 * ! Основи синтаксису
 */

/**
 * ? Інструкція
 * Інструкція (statement) - це пов'язаний набір слів та символів із синтаксису мови,
 * які поєднуються щоб висловити одну ідею, одну інструкцію для машини.
 */

/**
 * ? Суворий режим
 * script.js
"use strict";
// Это комментарий. Дальше идет весь код JS-файла
 * Щоб перевести скрипт у строгий режим, достатньо вказати директиву на початку js-файлу. 
 * Завжди пишіть код у строгому режимі.
 */

/**
 * ! Змінні та типи
 * Змінні використовуються для зберігання даних і складаються з ідентифікатора
 * (імені) та області пам'яті, де зберігається їх значення.
 */

/**
 * ? Імена змінних
 * ім'я змінної це іменник що це таке
 * Використання camelCase-нотації для ідентифікаторів є стандартом.
 * Перше слово пишеться малими літерами, а кожне наступне починається з великої
 * Наприклад, user, greetUser, getUserData, єActive, activeGuestCount, totalWorkerSalary.
 */

/**
 * ? Оголошення змінних const і let
 * Оголошення змінної починається з ключового слова const.
 * Така змінна має бути відразу ініціалізована значенням, після чого його не можна перевизначити.
 * const yearOfBirth = 2006;
 * console.log(yearOfBirth); // 2006
 *
 * Для того, щоб оголосити змінну, якій у майбутньому можна буде надати нове значення, використовується ключове слово let.
 * let age;
 * console.log(age); // undefined
 * age = 14;
 * console.log(age); // 14
 */

/**
 * ? Коли використовувати const та let
 * Відмінність const і let полягає в тому, що const забороняє повторне надання змінної будь-якого значення.
 */

/**
 * ? Константи
 * Імена КОНСТАНТ - змінних, значення яких ніколи не змінюється протягом роботи всього скрипта,
 * зазвичай записуються у форматі UPPER_SNAKE_CASE.
 * Константа хранящая значение цвета const COLOR_TEAL = "#009688"
 * Константа хранящая сообщение о результате логина const LOGIN_SUCCESS_MESSAGE = "Добро пожаловать!";
 */

/**
 * ! Примітивні типи
 * ? Number -
 * цілі числа та дробові числа const age = 20; const points = 15.8;
 * ? String -
 * рядки, послідовність із нуля або більше символів. Рядок починається і закінчується одиночною ', або подвійними лапками'
 * const username = "JavaSript для начинающих"; const description = "50px";
 * ? Boolean -
 * логічний тип даних, прапори стану. Усього два значення: true та false.
 * true - так, мабуть, істина, 1
 * false - ні, невірно, брехня, 0
 * Зверніть увагу на імена змінних, які містять буль. Вони запитують, і відповідь на нього - так чи ні.
 * const isLoggedIn = true;
 * const canMerge = false;
 * ? null -
 * особливе значення, яке по суті означає ніщо
 * ? undefined -
 * спеціальне значення. за умовчанням, коли змінна оголошується, але не ініціалізується
 */

/**
 * TODO: Оператор typeof - Використовується для отримання типу значення змінної
 * const quantity = 17; console.log(typeof quantity); // "number"
 * const message = "JavaScript is awesome!"; console.log(typeof message); // "string"
 * const isSidebarOpen = false; console.log(typeof isSidebarOpen); // "boolean"
 * let inputValue = null; console.log(typeof inputValue); // "object"
 * let username; console.log(typeof username); // "undefined"
 */

/**
 * ! Взаємодія з користувачем
 */

/**
 * ? Виведення даних
 * Для виведення даних є два методи: console.log() та alert()
 * const message = "JavaScript is awesome!";
 * console.log(message); // JavaScript is awesome!
 *
 * Метод alert() виводить модальне вікно, текст якого відповідає значенню змінної (або літералу), яку передамо в дужках
 * const message = "JavaScript is awesome!";
 * alert(message);
 */

/**
 * ! Отримання даних
 * Для отримання даних від користувача є два методи prompt() та confirm()
 */

/**
 * ? prompt() -
 * це модальне вікно з полем введення та кнопками Ok та Cancel.
 * При натисканні Ok результатом буде те, що ввів користувач, при Cancel - повертається null.
 * const value = prompt("Please enter a number!");
 * console.log(typeof value); // "string"
 * console.log(value); // "5
 */

/**
 * ? confirm() -
 * це модальне вікно з повідомленням і дві кнопки, Ok і Cancel.
 * При натисканні на Ok результатом буде true, при натисканні на Cancel - повертається false.
 * const isComing = confirm("Please confirm hotel reservation");
 * console.log(isComing);
 */

/**
 * ! Основні оператори
 */

/**
 * ? Математичні оператори (+ - \* / % +=)
 * const x = 10;
 * const y = 5;
 * Оператор додавання + console.log(x + y); // 15
 * Оператор віднімання - console.log(x - y); // 5
 * Оператор множення \* console.log(x * y); // 50
 * Оператор поділу / console.log(x / y); // 2
 * Оператор залишок від ділення % console.log(x % y); // 0
 * Оператор додавання із заміною += let value = 5; value += 10; console.log(value); // 15
 */

/**
 * ! Оператори порівняння
 * Використовуються для порівняння двох значень.
 * Результатом свого виконання повертають буль – true чи false, тобто «так» чи «ні».
 * Приклад:
 * const x = 5; const y = 10; const z = 5;
 *  a > b та a < b - більше/менше console.log(x > y); // false console.log(x < y); // true
 * a >= b і a <= b - більше/менше чи одно console.log(x <= z); // true
 * a === b - сувора рівність console.log(x === y); // false
 * a !== b - сувора нерівність console.log(x !== y); // true
 */

/**
 * ? Оператори рівності == и !=
 * Тому для перевірки рівності або нерівності двох значень
 * використовуються тільки оператори === (сувора рівність) та !== (сувора нерівність),
 * у такому разі все дорівнює тільки собі
 */

/**
 * ! Числа
 */

/**
 * ? Приведення до числа з функцію Number(val)
 * const valueA = "5";
 * console.log(Number(valueA)); // 5
 * console.log(typeof Number(valueA)); // "number"
 *
 * ? Метод Number.parseInt() - парсит з рядка ціле число.
 * console.log(Number.parseInt("5px")); // 5
 *
 * ? Метод Number.parseFloat() - парсит з рядка дробове число
 * console.log(Number.parseFloat("12.46qwe79")); // 12.46
 *
 * ? Якщо значення неможливо привести до числа, результатом буде спеціальне числове значення NaN (Not a Number).
 * const valueB = "random string";
 * console.log(Number(valueB)); // NaN
 * console.log(typeof Number(valueB)); // "number"
 */

/**
 * ? Додавання чисел з плаваючою точкою 0.1 + 0.2 = 0.30000000000000004
 * При додаванні не цілих чисел у JavaScript та інших мовах програмування, є особливість.
 * Якщо коротко, то 0.1 + 0.2 не дорівнює 0.3, результат додавання
 * більше ніж 0.3. Все від того, що машина вважає в двійковій системі.
 *
 * ? Перший метод вирішення проблеми Формула (0.1 _ 100 + 0.2 _ 100) / 100
 * console.log(0.17 + 0.24); // 0.41000000000000003
 * console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41
 *
 * ? Другий спосіб Метод toFixed(2)
 * console.log(0.17 + 0.24); // 0.41000000000000003
 * console.log((0.17 + 0.24).toFixed(2)); // 0.41
 */

/**
 * ! Набір методів для роботи з числами Клас Math
 * 
 * ? Math.floor(num) - повертає найбільше ціле число, менше, або рівне зазначеному
 * console.log(Math.floor(1.7)); // 1
 * ? Math.ceil(num) - возвращает наименьшее целое число, большее, либо равное указанному числу.
 * console.log(Math.ceil(1.2)); // 2
 * ? Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
 * console.log(Math.round(1.2)); // 1
 * console.log(Math.round(1.5)); // 2
 * ? Math.max(num1, num2, ...) - возвращает наибольшее число из набора
 * console.log(Math.max(20, 10, 50, 40)); // 50
 * ? Math.min(num1, num2, ...) - возвращает наименьшее число из набора
 * console.log(Math.min(20, 10, 50, 40)); // 10
 * ? Math.pow(base, exponent) - возведение в степень
 * console.log(Math.pow(2, 4)); // 16
 * ? Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
  console.log(Math.random()); // случайное число между 0 и 1
  console.log(Math.random() \* (10 - 1) + 1); // псевдослучайное число от 1 до 10
 */

/**
 * ! Рядки
 * Рядок - це індексований набір із нуля або більше символів, укладених у одинарні або подвійні лапки.
 */

/**
 * ? Конкатенація рядків
 * Якщо застосувати оператор + до рядка та іншого типу даних, результатом операції «складання» буде рядок.
 * Ця операція називається конкатенація, або складання рядків.
 * const message = "Mango " + "is" + " happy";
 * console.log(message); // Mango is happy
 *
 * Послідовність операцій має значення, перетворення типів відбувається лише на момент операції складання з рядком,
 * доти діють звичні правила математики.
 * console.log(1 + "2"); // "12"
 * console.log(1 + "2" + 4); // "124"
 * console.log(1 + 2 + "4"); // "34"
 * В останньому прикладі відбулася математична операція додавання для перших двох чисел 1 і 2,
 * після чого число 3 було перетворено на рядок "3" і пошито з рядком "4".
 */

/**
 * ? Шаблонні рядки ${вираз}
 *  Шаблонний рядок укладено у зворотні (косі) лапки замість подвійних або одинарних і може містити місцезаповнювачі,
 * які позначаються знаком долара та фігурними дужками - ${вираз}.
 * const guestName = "Манго";
 * const roomNumber = 207;
 * const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
 * console.log(greeting); // "Welcome Mango, your room number is 207!"
 */

/**
 * ! Властивості та методи рядків
 */

/**
 * ? Властивість length - щоб дізнатися довжину рядка, тобто кількість її символів
 * const message = "Welcome to Bahamas!";
 * console.log(message.length); // 19
 * Метод toLowerCase() - повертають новий рядок у нижньому регістрі, не змінюючи оригінальний рядок
 * const message = "Welcome to Bahamas!";
 * console.log(message.toLowerCase()); // "welcome to bahamas!"
 * ? Метод toUpperCase() - повертають новий рядок у верхньому регістрі, не змінюючи оригінальний рядок
 * console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
 * console.log(message); // "Welcome to Bahamas!"
 * ? Метод indexOf() - повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено
 * const message = "Welcome to Bahamas!";
 * console.log(message.indexOf("to")); // 8
 * console.log(message.indexOf("hello")); // -1
 * ? Метод includes() - перевіряє чи входить підрядок у рядок, повертає буль - true якщо входить і false в іншому випадку
 * const productName = "Ремонтный дроид";
 * console.log(productName.includes("н")); // true
 * console.log(productName.includes("Н")); // false
 * console.log(productName.includes("дроид")); // true
 * console.log(productName.includes("Дроид")); // false
 * console.log(productName.includes("Ремонтный")); // true
 * console.log(productName.includes("ремонтный")); // false
 * ? Методи replace() и replaceAll() - повертають новий рядок, в якому перші (replace)
 * або всі збіги (replaceAll) підрядки замінені на вказане значення.
 * ? Методи replace()
 * const jsFileName = "script.js";
 * const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
 * console.log(minifiedJsFileName); // "script.min.js"
 * ? Метод replaceAll()
 * const cssFileNames = "styles.css, about.css, portfolio.css";
 * const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
 * console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
 * ? Метод рядків slice(startIndex, endIndex) використовується для створення копії частини чи всього рядка.
 * Він робить копію елементів рядка від startIndex до, але не включаючи endIndex і повертає новий рядок, не змінюючи оригінал.
 * const productName = "Repair droid";
 * console.log(productName.slice(0, 4)); // "Repa"
 * console.log(productName.slice(3, 9)); // "air dr"
 * console.log(productName.slice(0, productName.length)); // "Repair droid"
 * console.log(productName.slice(7, productName.length)); // "droid"
 */

/**
 * ! Приведення типів
 * Існує 6 помилкових (falsy) значень, що призводять до false у логічному
 * перетворенні: 0, NaN, null, undefined, порожній рядок та false. Абсолютно все інше доводиться до true.
 */

/**
 * ? Логічні оператори
 *
 * ? Оператор && (Логічне «І»)
 * приводить усі операнди до булю та повертає значення одного з них.
 * Лівий операнд якщо його можна призвести до false, і правий в інших випадках.
 * const age = 20; console.log(age > 10 && age < 30); // true && true -> true
 * ? Оператор || (Логічне «АБО»)
 * приводить усі операнди до булю та повертає значення одного з них.
 * Лівий операнд якщо його можна привести до true, і правий в інших випадках.
 * const age = 5; console.log(age < 10 || age > 30); // true || false -> true
 * ? Оператор! (Логічне «НЕ»)
 * приводить операнд до булю, якщо необхідно, а потім робить інверсію - замінює його на протилежний true - false або false - true.
 * console.log(!true); // false console.log(!false); // true
 */

/**
 * ! Розгалуження
 * Розгалуження використовуються для виконання різного коду залежно від умови.
 * Принцип роботи простий - результат умови наводиться до булю true або false,
 * після чого потік програми прямує в ту чи іншу гілку.
 */

/**
 * ? Інструкція if
 * if (условие) {
 * // тело if
 * }
 *  Вхідні дані, що наводяться до булю, називаються умовою.
 * Умову поміщають за оператором if у круглих дужках.
 * ? Якщо умова наводиться до true, то виконується код фігурних дужках тіла if.
 * let cost = 0;
 * const subscription = "pro";
 * if (subscription === "pro") {
 * cost = 100;
 * }
 * console.log(cost); // 100
 *
 * ? Якщо умова наводиться до false, код у фігурних дужках буде пропущено.
 * let cost = 0;
 * const subscription = "free";
 * if (subscription === "pro") {
 * cost = 100;
 * }
 * console.log(cost); // 0
 */

// let value1;
// value1 = Math.PI.toFixed(2);
// console.log(value1);

// const arrey = [11, 16, 12, 51, 12, 13, 51]

// let setOfNumbers;
// setOfNumbers = Math.max(11, 16, 12, 51, 12, 13, 51);
// console.log(setOfNumbers);

// let setOfNumbers2;
// setOfNumbers = Math.min(11, 16, 12, 51, 12, 13, 51);
// console.log(setOfNumbers);

// let randomNumber;
// randomNumber = Math.random().toFixed(2);
// console.log(randomNumber);

// let randomNumber2;
// randomNumber2 = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber2);

// let mathematicalOperation;
// mathematicalOperation = (0.6 * 10 + 0.7 * 10) / 10;
// console.log(mathematicalOperation);

// let mathematicalOperation2;
// mathematicalOperation2 = (0.6 + 0.7).toFixed(1);
// console.log(mathematicalOperation2);

// const numberFromString = '100$';
// console.log(Number.parseInt(numberFromString));

// const message = "Welcome in JavaScript"

// alert(message)

// let message = confirm("Вам есть 18 лет?");

// if (message === true) {
//   console.log("Добро пожаловать");
// } else {
//   console.log("Доступ запрещен")
// }

// console.log( typeof message);

// Задание 1
// const name = "Генератор защитного поля";
// const price = 1000;
// let message = '';

// if (price === 1000) {
// message = `Выбран ${name}, цена за штуку ${price} кредитов`
// }

// if (price === 2000) {
// message = `Выбран ${name}, цена за штуку ${price} кредитов`
// }

// console.log(message)

// Задание 2
// const total = 100
// const ordered = 30
// let message = ""

// if (total > ordered) {
//   message = "Заказ оформлен, с вами свяжется менеджер"
// } else {
//   message = "На складе недостаточно товаров!"
// }

// console.log(message)

// Задание 3
// const authorizationAdmin = prompt("Авторизация администратора")
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = "";

// if (authorizationAdmin === null) {
// message = "Отменено пользователем!"
// } else if (authorizationAdmin === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!"
// } else {
//   message = "Доступ запрещен, неверный пароль!"
// }

// console.log(message)

// Задание 4
// let questionUser = prompt("Введите количество дроидов которое вы хочете купить")
// let credits = 23580
// let pricePerDroid = 3000
// let message
// let totalPrice = questionUser * pricePerDroid
// let balanceCredite = credits - totalPrice
// // const orderedQuantity = 1

// if (questionUser === null) {
//   message ="Отменено пользователем!"
// } else if (questionUser === "") {
//   message = "Пользователь ничего не купил"
// } else if (balanceCredite >= 0) {
//   message = `Вы купили ${questionUser} дроидов, на счету осталось ${balanceCredite} кредитов.`
// } else if (balanceCredite < 0) {
//   message = "Недостаточно средств на счету!"
// } else if (isNaN(questionUser)) {
// message = "Было введено не число, попробуйте еще раз"
// }

// console.log(message)

// Задание 5

// let countryName = prompt("ввести имя страны")
// // const normalizedToLowerCaseCountryName = countryName.toLowerCase()
// // normalizedToLowerCaseCountryName + countryName
// // const normalizedToUpperCaseCountryName = countryName.toUpperCase()

// let price
// let message
// // let country

// if (countryName === "") {
//   message = "Пользователь ничего не выбрал"
// } else if (countryName === null) {
// message = "Отменено пользователем!"
// } else {
// countryName = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase()
// }

// switch (countryName) {
//   case "Китай":
//     price = 100
//     message = `Доставка в ${countryName} будет стоить ${price} кредитов`
//     break;

//     case "Чили":
//       price = 250
//       message = `Доставка в ${countryName} будет стоить ${price} кредитов`
//       break;

//       case "Австралия":
//         price = 170
//         message = `Доставка в ${countryName} будет стоить ${price} кредитов`
//         break;

//         case "Индия":
//           price = 80
//           message = `Доставка в ${countryName} будет стоить ${price} кредитов`
//           break;

//           case "Ямайка":
//             price = 120
//             message = `Доставка в ${countryName} будет стоить ${price} кредитов`
//             break;

//   default:
//     alert("В вашей стране доставка не доступна")
// }

// console.log(message)

// Задание 6
// let input
// let total = 0;

// do {
//   input = prompt("ввести число");

//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз")
//     } else {
//       total += Number(input)
//     }
// } while (input !== null);
//   alert(`Общая сумма чисел равна ${total}`)

// console.log(input)
// console.log(total)

// let elementWidth = "50.21213px"

// elementWidth = Number.parseFloat(elementWidth)
// console.log(elementWidth)

// let salary = 13.123456
// // salary = salary.toFixed(1)
// // salary = Number(salary)
// salary = Number(salary.toFixed(2))
// console.log(salary)

// // let quantity = prompt("Введите число")
// // quantity = Number(quantity)
// // console.log(quantity)

// console.log(Math.PI)

// const base = 5
// const power = 5

// const result = Math.pow(base, power)
// console.log(result)

// let base = prompt("Давай число")
// base = Number(base)
// console.log(base)

// let power = prompt("Давай степень")
// power = Number(power)
// console.log(power)

// const result = base ** power
// console.log(result)

// const max = 50
// const min = 30

// const result = Math.round(Math.random() * (max - min) + min)

// // Math.round() - округляет число
// // Math.random() - генерит случайное число

// console.log(result)

const colors = ['red', 'yellow', 'green', 'orange', 'blue']; //храним массив цветов
const min = 0; //первый индекс
const max = colors.length - 1; //последний индекс

const index = Math.round(Math.random() * (max - min) + min); //генерим случайный индекс с первого до последнего

const color = colors[index]; //находим текущий цвет

console.log(color);

document.body.style.backgroundColor = color; //вешаем цвет на боди

// const message = "В этой строке 26 символов."

// console.log(message.length)

// const firstName = "Chelsy"
// const lastName = "Emarald"

// const fullName = firstName + " " + lastName
// console.log(fullName)

// const quantity = prompt("Введите количество товара")
// let message = ""

// if (quantity === "") {
//   message = "Пользователь ничего не заказ"
// }  else if (quantity === null) {
//   message = `Отмененно пользователем`
// } else if (quantity == Number(quantity)) {
//   message = `Вы заказали ${quantity} холодильников`
// } else if (quantity !== Number(quantity)) {
//   message = "Вам перезвонит менеджер"
// }

// console.log(message)

// let brand = prompt("Давай бренд")
// // brand = brand.toLowerCase()
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase()

// // brand[0].toUpperCase() - приводим первую букву к верхнему регистру
// // brand.slice(1).toLowerCase() - начиная с индекса 1 строку привести к нижнему регистру
// console.log(brand)

// const word1 = "спам"
// const word2 = "распродажа"

// const string1 = "Привет, я принц Абдул, это не спам, предлагаю тебе миллион!"
// const string2 = "Самая большая распродажа этой недели, не пропустите!"
// const string3 = "Рекламная камания!"

// console.log(string1.includes(word1))
// console.log(string1.includes(word2))

// console.log(string2.includes(word1))

// const normalizedString2 = string2.toLowerCase()
// // Привели строку к нижнему регистру
// console.log(normalizedString2.includes(word2))

// console.log(string3.includes(word1))
// console.log(string3.includes(word2))

// const x1 = 10
// const x2 = 30
// const number = 45

// console.log(`Число ${number} попадает в отрезок до ${x1}`, number < x1)
// console.log(`Число ${number} попадает в отрезок после ${x2}`, number > x2)

// const res1 = number > x1 && number < x2
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}`, res1)

// // && - останавливает на false и возвращает фолс

// const res2 = number < x1 || number > x2
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}`, res2)
// // || - останавливаеться на true

// const isOnline = true
// const isFriend = true
// const isDnd = false

// const canOpenChat = isOnline && isFriend && !isDnd
// console.log("Можно открыть чат?", canOpenChat)

const sub = 'pro';

const canAccessContent = sub === 'pro' || sub === 'vip';

console.log('Есть доступ к контенту?', canAccessContent);

const balance = -1000;

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// const massage = условие ? выражение 1 : выражение 2

console.log(message);

// Задаг=ние 4
const formatString = function (string) {
  if (string.length > 40) {
    // console.log('Длина больше 40')
    return string.slice(0, 40) + '...';
  } else if (string.length < 40) {
    return string;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

// let number = prompt('Введите число') //в переменную записываем метод
// number = Number(number) //в переменную записываем результат метода
// console.log(number) //выводим в консоль

// let degree = prompt('Введите степень')
// degree = Number(degree)
// console.log(degree)

// const result = number * degree //полученные результаты умножаем

// console.log(result) //выводим в консоль

// const min1 = 50

// const max2 = 80

// const result = Math.random() * (max2 - min1) + min1; //возвращаем случайное число в заданном диапозоне
// console.log(Math.round(result)) //и округляем реузультат
// // console.log(Number(result.toFixed(0)))
// // console.log(Number.parseInt(result));

// const firstName = 'Yaroslav'
// const lastName = 'Lukovetskyi';

// const result2 = firstName + " " + lastName //канкатенация строк мы значения двухп переменных поместили в одну строку через пробле

// console.log(result2)

const firstName = ['Yaroslav', 'Rita'];
const two = firstName.length - 1; //последний индекс
const one = 0; //первый индекс
const lastName = 'Lukovetskyi';

// const result2 = firstName + ' ' + lastName; //канкатенация строк мы значения двухп переменных поместили в одну строку через пробле

// console.log(result2);

const index1 = Math.round(Math.random() * (two - one) + one); //генерим случайный индекс с первого до последнего

const firstName1 = firstName[index1] + ' ' + lastName; //находим текущий цвет сшили две строки

console.log(firstName1);

// const colors = ['red', 'yellow', 'green', 'orange', 'blue']; //храним массив цветов
// const max = colors.length -1 //последний индекс
// const min = 0; //первый индекс

// const index = Math.round(Math.random() * (max - min) + min) //генерим случайный индекс с первого до последнего

// const color = colors[index] //находим текущий цвет

// console.log(color)

// document.body.style.backgroundColor = color //вешаем цвет на боди

// let brand = prompt('')
// const normalizedBrand = brand.toLowerCase()
// console.log(normalizedBrand)

// Приклад 1
// Данні
// const message1 = 'Ви рекрутер ?';
// const message2 = 'Відкрит доступ до резюме кандидата';
// const massage3 = 'Доступ тільки для рекрутерів. Вибичате за незручності';

// Логика
// const shouldRenew = confirm(message1);

// if (shouldRenew === true) {
//   console.log(alert(message2));
// } else {
//   console.log(alert(massage3));
// }

// Приклад 2
// Данні
// const massage4 = 'Оцените кандидатат от 0 до 10';
// const massage5 = 'Погана відповідь';
// const massage6 = 'Дякуємо за відповідь!';
// const massage7 = 'Відмова відповідати - це найгірша оцінка';

// Логика
// const quantity = prompt(massage4);
// console.log(quantity);

// if (quantity === '') {
//   console.log(alert(massage5));
// } else if (quantity === null) {
//   console.log(alert(massage7));
// } else {
//   console.log(alert(`Ваша оцінка ${quantity} ${massage6}`));
// }

// const elementWidth = '50px';

// const newElement = Number.parseInt(elementWidth);
// console.log(newElement);

// let elementHeight = '200.05px';

// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);

// Приклад 3
// let base = prompt('Число');
// base = Number(base);

// let power = prompt('Степень');
// power = Number(power);

// const result = base * power;

// console.log(alert(`${base} * ${power} = ${result}`));

// const min1 = 10;
// const max1 = 50;

// const result = Math.round(Math.random() * (max1 - min1) + min1);
// console.log(result);

const title = document.querySelector('h1');

title.textContent = 'Привет!';

const age = '20px';
const totoalPrice = '200.74px';
const userNames = 'Yaroslav';
const isOpen = true;
const nulls = null;
let start;

console.log(Number.parseInt(age));
console.log(Number.parseFloat(totoalPrice));
console.log(typeof userNames);
console.log(typeof isOpen);
console.log(typeof nulls);
console.log(typeof start);

const salary = 120000.2234455;

console.log(Number(salary.toFixed(3)));

function fff(number) {
  return Number(number.toFixed(2));
}

console.log(fff(11.233444));
console.log(fff(22.234566));
console.log(fff(33.234566));
console.log(fff(44.234566));
console.log(fff(55.234566));

const onFff = numbers => {
  return Number(numbers.toFixed(2));
};

console.log(onFff(11.23345445));
const room = 717;
const type = 'VIP';

const welcomeMessage = `Гость с номеру ${room} поселяеться в ${type}`;
console.log(welcomeMessage);

let brand = 'samsung';

console.log(brand.slice(1).toUpperCase());
console.log(brand);

brand = brand[0] + brand.slice(1).toUpperCase();

console.log(brand);

console.log(0 && 6 && 7 && 'hello');

console.log(0 || 6 || 7);
