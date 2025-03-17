//task 1
//#67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let array:any = [12, 54, 2, 'hello', 'okten', '120', true, 100200, 54.12, '122.5'];
// console.log(array);
// // or
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[8]);
// console.log(array[9]);

// task 2, task 3 об'єднані в одне, так як вони схожі за концепцією
//#LARqoUj5I
//#sA3Gg1sCp
//
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
//
// type author = {
//     name: string;
//     age: number;
// }
//
// type Book = {
//     title: string;
//     pageCount: number;
//     genre: string;
//     authors: author[];
// }
//
// let book1 : Book = {
//     title: 'Whitcher',
//     pageCount: 235,
//     genre: 'Fantasy',
//     authors: [
//         {
//             name: 'Andrzej',
//             age: 76,
//         },
//         {
//             name: 'Henryk',
//             age: 69,
//         },
//     ]
// }
//
// let book2: Book = {
//     title: 'Chemistry: The Molecular Science',
//     pageCount: 802,
//     genre: 'Science',
//     authors: [
//         {
//             name: 'John',
//             age: 65,
//         },
//         {
//             name: 'Conrad',
//             age: 57,
//         },
//     ]
// }
//
// let book3: Book = {
//     title: 'You are not so smart',
//     pageCount: 155,
//     genre: 'Psychology',
//     authors: [
//         {
//             name: 'David',
//             age: 46,
//         },
//     ]
// }

// //task 4
// //#jCHFnEbdmFd
//
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username, password. Вивести в
// // консоль пароль кожного користувача
//
//
// type UserType = {
//     name: string;
//     username: string;
//     password: string;
// }
//
// let userArr: UserType[] = [
//     {
//         name: 'Vlad',
//         username: 'vlqdck',
//         password: 'qwerty12',
//     },
//     {
//         name: 'Olekasndr',
//         username: 'Majony',
//         password: 'BesTjoom15',
//     },
//     {
//         name: 'Daniil',
//         username: 'reckless',
//         password: 'NoTick5113_',
//     },
//     {
//         name: 'Artem',
//         username: 'Nidzelskiy',
//         password: 'rmcitmgmso834dj_fkef',
//     },
//     {
//         name: 'Artem',
//         username: 'artemkp',
//         password: 'csdfjdme2881kdjr',
//     },
//     {
//         name: 'Dmytro',
//         username: 'kitoyaka',
//         password: 'vcjdjtnxd084-srr',
//     },
//     {
//         name: 'Dmytro',
//         username: 'D.',
//         password: 'wetufmfuy3595',
//     },
//     {
//         name: 'Oles',
//         username: 'oles1337',
//         password: 'eokernh522',
//     },
//     {
//         name: 'Alex',
//         username: 'drainersha',
//         password: 'ghdifmnfb1233',
//     },
//     {
//         name: 'Anzhelika',
//         username: 'nameless',
//         password: 'vekrnddd1884',
//     },
// ]
//
// // Вивів також username для наглядності
//
// console.log(userArr[0].username, userArr[0].password);
// console.log(userArr[1].username, userArr[1].password);
// console.log(userArr[2].username, userArr[2].password);
// console.log(userArr[3].username, userArr[3].password);
// console.log(userArr[4].username, userArr[4].password);
// console.log(userArr[5].username, userArr[5].password);
// console.log(userArr[6].username, userArr[6].password);
// console.log(userArr[7].username, userArr[7].password);
// console.log(userArr[8].username, userArr[8].password);
// console.log(userArr[9].username, userArr[9].password);

// // task 5
// //#coYydZuaeEB
//
// //- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// // Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний
// // масив з 21 значенням вичключаємо одразу
//
// type WeekTempType = {
//     day: string;
//     morningTemp: number;
//     dayTemp: number;
//     nightTemp: number;
// }
//
// let weekTemp: WeekTempType[] = [
//     {
//         day: 'monday',
//         morningTemp: 15,
//         dayTemp: 20,
//         nightTemp: 14
//     },
//     {
//         day: 'tuesday',
//         morningTemp: 16,
//         dayTemp: 22,
//         nightTemp: 16
//     },
//     {
//         day: 'wednesday',
//         morningTemp: 13,
//         dayTemp: 16,
//         nightTemp: 12
//     },
//     {
//         day: 'Thursday',
//         morningTemp: 15,
//         dayTemp: 19,
//         nightTemp: 10
//     },
//     {
//         day: 'Friday',
//         morningTemp: 10,
//         dayTemp: 13,
//         nightTemp: 8
//     },
//     {
//         day: 'Saturday',
//         morningTemp: 12,
//         dayTemp: 18,
//         nightTemp: 11
//     },
//     {
//         day: 'Sunday',
//         morningTemp: 15,
//         dayTemp: 20,
//         nightTemp: 14
//     },
// ]

// task 6
//#bAUsaq6LI
//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x: number = 11;
//
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Не вірно');
// }

//task 7
// #3ckURgvs
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).
//
// let time: number = 22;
//
// if (0 <= time && time <= 15) {
//     console.log('Перша чверть');
// } else if (15 < time && time <= 30) {
//     console.log('Друга чверть');
// } else if (30 < time && time <= 45) {
//     console.log('Третя чверть');
// } else if (45 < time && time <= 60) {
//     console.log('Четверта чверть');
// } else {
//     console.log('PROBLEM!')
// }

// //task 8
// // #UMoNq4biWGe
//
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// // (у першу, другу чи третю).
//
// let day: number = 11;
//
// if (0 <= day && day <= 10) {
//     console.log('Перша декада');
// } else if (10 < day && day <= 20) {
//     console.log('Друга декада');
// } else if (20 < day && day <= 31) {
//     console.log('Третя декада');
// }

// //task 9
// //#KzrtqyQ
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// // відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let dayNum: number = Number(prompt('Порядковий номер дня тижня'));
//
// switch (dayNum) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Error!');
// }

//task 10
//#uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
// let firstUserNum: number = Number(prompt('Number 1?'));
// let secondUserNum:number = Number(prompt('Number 2?'));
//
//
// if (firstUserNum === secondUserNum) {
//     console.log('Same');
// } else if (firstUserNum > secondUserNum) {
//     console.log('Number 1 is bigger');
// } else {
//     console.log('Number 2 is bigger');
// }

// //task 11
// //#iBvqtjEm
// // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
// //  тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
// let z: any = 0;
//
// if (!z) {
//     z = 'default';
//     console.log(z);
// } else {
//     console.log(z);
// }

// //task 12
// //#awLXL6TBzg
// // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// // кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// type CourseAndDuration = {
//     title: string;
//     monthDuration: number
// }
// let coursesAndDurationArray: CourseAndDuration[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log('Супер');
// }
