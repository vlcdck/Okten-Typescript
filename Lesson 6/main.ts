// task 1
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);

// task 2
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());

// task 3
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());

// task 4
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str: string = ' dirty string   ';
// console.log(str.trim());

// task 5
// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// function stringToArray(str: string): string[] {
//     return str.split(' ');
// }
//
// let str: string = 'Ревуть воли як ясла повні';
// console.log(stringToArray(str));

// task 6
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// console.log(arr.map(item => String(item)));

// task 7
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums: number[] = [11, 21, 3];
//
// function sortNums(array: number[], direction: string) {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b);
//     }
//     if (direction === 'descending') {
//         return array.sort((a, b) => b - a);
//     }
// }
//
// console.log(sortNums(nums, 'descending'));

// // task 8
// // #yo06d74c1C
// // - є масив
// //
// type courseAndDurationType = {
//     id?: number,
//     title: string;
//     monthDuration: number;
// }
//
// let coursesAndDurationArray: courseAndDurationType[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //  -- відсортувати його за спаданням за monthDuration
// //  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// //  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// //
//
// function remakeCourses(courses:courseAndDurationType[]): courseAndDurationType[] {
//     return courses
//         .sort((a, b) => b.monthDuration - a.monthDuration)
//         .filter(value => value.monthDuration > 5)
//         .map((value, index) => ({id: index + 1, ...value}))
// }
//
// console.log(remakeCourses(coursesAndDurationArray));

// // task 9
// //  #bolvdlhP
// //  описати колоду карт (від 6 до туза без джокерів)
// //  - знайти піковий туз
// //  - всі шістки
// //  - всі червоні карти
// //  - всі буби
// //  - всі трефи від 9 та більше
// //
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //     value: '', // '6'-'10', 'ace','jack','queen','king'
// //     color:'', // 'red','black'
// // }
// // next task uses too
// const suits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
// const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// //
// type Cards = {
//     cardSuit: string;
//     value: string;
//     color?: string;
// }
//
// const allCards: Cards[] = [];
//
// for (const suit of suits) {
//     for (const value of values) {
//         let card: Cards = {
//             cardSuit: suit,
//             value: value,
//         }
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//
//         allCards.push(card);
//     }
// }
// // //
// // console.log(allCards);
// //
// // console.log(allCards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// //
// // console.log(allCards.filter(card => card.value === '6'));
// //
// // console.log(allCards.filter(card => card.color === 'red'));
// //
// // console.log(allCards.filter(card => card.cardSuit === 'diamond'));
// // console.log(allCards.filter(card => card.cardSuit === 'clubs' && (card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace')));

// // task 10
// // #EP5I1UUzAX
// // Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //     diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }
// // debugger;
//
// type CardBySuits = {
//     spades: Cards[],
//     diamonds: Cards[],
//     hearts: Cards[],
//     clubs: Cards[]
// }
//
// const reduce = allCards.reduce<CardBySuits>((accumulate: CardBySuits, currentValue: Cards): CardBySuits => {
//     switch (currentValue.cardSuit) {
//         case 'spade':
//             accumulate.spades.push(currentValue);
//             break;
//         case 'diamond':
//             accumulate.diamonds.push(currentValue);
//             break;
//         case 'heart':
//             accumulate.hearts.push(currentValue);
//             break;
//         case 'clubs':
//             accumulate.clubs.push(currentValue);
//             break;
//     }
//     return accumulate;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: [],
// });
// //
// console.log(reduce);

// task 11
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
//
// type Course = {
//     title: string;
//     monthDuration: number;
//     hourDuration: number;
//     modules: string[];
// }
//
//
// let coursesArray: Course[] = [{
//     title: 'JavaScript Complex',
//     monthDuration: 5,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
// }, {
//     title: 'Java Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
// }, {
//     title: 'Python Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
// }, {
//     title: 'QA Complex',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
// }, {
//     title: 'FullStack',
//     monthDuration: 7,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
// }, {
//     title: 'Frontend',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
// }];
//
// console.log(coursesArray.filter(value => value.modules.includes('sass')));
// console.log(coursesArray.filter(value => value.modules.includes('docker')));
