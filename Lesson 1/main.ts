// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
// type BookType = {
//     title: string;
//     pages: number;
//     genre: string;
// }
//
// const book: BookType = {title: 'Hobbit', pages: 456, genre: 'fantasy'};
//
// console.log(book);

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// type AuthorsType = {name: string, age: number};
//
// type BookType = {
//     title: string;
//     pageCount: number;
//     genre: string;
//     authors: AuthorsType[]
// }
//
// const bookHobbit: BookType = {
//     title: "Hobbit",
//     pageCount: 255,
//     genre: 'fantasy',
//     authors: [
//         {name: 'John', age: 22},
//         {name: 'Nick', age: 25},
//         {name: 'Mike', age: 42}
//     ],
// }
//
// console.log(bookHobbit);

// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// type User = {name: string, username: string, password: string};
//
// const userArr: User[] = [
//     {name: 'Mike', username: 'Mike23', password: 'qwertty'},
//     {name: 'Nick', username: 'Mike22', password: '12345676543'},
//     {name: 'John', username: 'Mike21', password: 'qwertytrew2345'},
// ]
//
// console.log(userArr);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
// type WeeKTempType = {
//     day: string;
//     morningTemp: number,
//     dayTemp: number,
//     nightTemp: number
// }
//
// const weekTemp:WeeKTempType[] = [
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
//
// console.log(weekTemp);

// Логічні розгалуження:
//
// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// const x: number = 0;
//
// if (x) {
//     console.log('Вірно');
// } else {
//     console.log('Не вірно')
// }

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// type CourseAndDurationType = {
//     title: string;
//     monthDuration: number;
// }
//
// let coursesAndDurationArray: CourseAndDurationType[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4},
// ]
//
//
// for (const object of coursesAndDurationArray) {
//     if (object.monthDuration > 5) {
//         console.log(`${object.title} - Супер!`);
//     }
// }

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a: number, b: number): number {
//     return a * b;
// }
//
// console.log(square(5, 2));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleArea(radius: number):number {
//     const PI: number = Math.PI;
//     return PI * (radius*radius)
// }
//
// console.log(circleArea(12));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cilinderArea(radius: number, height: number): number {
//     return 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
// }
// console.log(cilinderArea(10, 5));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
// const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// function displayArray(arr:any):void {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// displayArray(array);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function write(title: string):void {
//     document.write(title);
// }
// write("Hello World");

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// type UserType = {
//     id: number,
//     name: string,
//     age: number,
// }
// let users: UserType[] = [
//     {id: 1, name: 'Banan', age: 5},
//     {id: 2, name: 'Apple', age: 12},
//     {id: 3, name: 'Orange', age: 4},
//     {id: 4, name: 'Melon', age: 142},
//     {id: 5, name: 'Cucumber', age: 654},
//     {id: 6, name: 'Onion', age: 55},
//     {id: 7, name: 'Tomato', age: 124},
//     {id: 8, name: 'Potato', age: 896},
//     {id: 9, name: 'Shaverma', age: 5},
//     {id: 10, name: 'Meat', age: 1},
//     {id: 11, name: 'Fish', age: 74},
//     {id: 12, name: 'Bone', age: 93},
//     {id: 13, name: 'Strawberry', age: 83},
//     {id: 14, name: 'Alex', age: 64},
//     {id: 15, name: 'Root', age: 66},
//     {id: 16, name: 'Mouse', age: 85},
//     {id: 17, name: 'Rat', age: 167},
//     {id: 18, name: 'Kitty', age: 942},
//     {id: 19, name: 'Charger', age: 76},
//     {id: 20, name: 'Dog', age: 52},
// ];
// function writeObject(arr: UserType[]): void {
//     for (const key of arr) {
//         document.write(`
//     <div>
//     <h3>${key.name}</h3>
//     <p>${key.id}</p>
//     <p>${key.age}</p>
//     </div>
//     `);
//     }
// }
// writeObject(users);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// const arr: number[] = [44,232,54,124,635,28,857,234,643,134,346,2356,25,25,23552];
// function lowerNum(arr:number[]):number {
//     let buffer: number = arr[0];
//     for (const number of arr) {
//         if (number < buffer) {
//             buffer = number;
//         }
//     }
//     return buffer;
// }
// console.log(lowerNum(arr))

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr: number[]): number {
//     let buffer: number = 0;
//     for (const number of arr) {
//         buffer += number;
//     }
//     return buffer;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr:number[], index1:number, index2:number):void {
//     let buffer:number  = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = buffer;
//     console.log(arr);
// }
// swap([1, 2, 10, 20, 5, 6, 8, 99], 0, 1);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// type currencyValues = {
//     currency: string,
//     value: number
// }
//
// function exchange(sumUAH: number, currencyValues: currencyValues[], exchangeCurrency: string): void {
//     let exchangeSum: number | null = null;
//     for (const currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency) {
//             exchangeSum = sumUAH / currencyValue.value;
//         }
//     }
//
//     if (exchangeSum !== null) {
//         console.log(exchangeSum);
//     } else
//         console.log('Валюта не знайдена');
// }
//
// exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}, {currency: 'FR', value: 46}], 'EUR');

