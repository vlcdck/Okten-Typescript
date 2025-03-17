// // task 1, 2 Об'єднав
//
// // #y7crMeFwHcS
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// // #TYj7ncx
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// document.write(`<div class="block-wrapper">`)
// document.write(`<div class="block">`)
// for (let i = 0; i < 10; i++) {
//     document.write(`
//         <div>
//         <h1>Hello Okten!</h1>
//         <p>Index ${i + 1}</p>
//         </div>`)
// }
// document.write(`</div>`);
//<p>index ${i + 1}</p> + 1 для того щоб починалось не з 0 а з 1
//
//
// // --------------------------------------------------------------------------------------
//

// // task 3, 4 Об'єднав
//
// // #uzkt71dp
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// // #OeT7t3uUMFi
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// document.write(`<div class="block">`)
// let i = 0;
// while (i < 20) {
//     document.write(`
//     <div>
//     <h1>ZuPs! + ${i + 1}</h1>
//     </div>
//     `)
//     i++;
// }
// document.write(`</div>`)
// document.write(`</div>`)
// // ---------------------------------------------------------------------------------------------

// // task 5
//
// // #vLSZKMlO
// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
//
// let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`)
// for (let i = 0; i < listOfItems.length; i++) {
//     const listOfItem: string = listOfItems[i];
//     document.write(`
//         <li>${listOfItem}</li>
//     `)
// }
// document.write(`</ul>`)

// task 6
// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// type product = {
//     title: string;
//     price: number;
//     image: string;
// }
//
// let products: product[] = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://birchalltea.co.uk/wp-content/uploads/2023/09/Camomile-Loose.webp'
//     },
// ];
//
// // debugger;
// document.write(`<div class="wrapper">`)
// for (let product of products) {
//     document.write(`
//          <div class="product-card">
//             <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//             <img src="${product.image}" alt="" class="product-image">
//         </div>
//         `)
// }
// document.write(`</div>`)

// task 7
//
// // #4WrHwFTEop0
// // є масив
//
// type User = {
//     name: string;
//     age: number;
//     status: boolean;
// }
//
// let users: User[] = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// //  за допомоги циклу вивести:
// //  - користувачів зі статусом true
// //  - користувачів зі статусом false
// //  - користувачів які старші за 30 років
//
//
// // якщо статус true вивиодиться ім'я користувача з таким статусом
// for (const user of users) {
//     if (user.status) {
//         console.log(user.name, user.status)
//     }
// }
//
// console.log('---------------------------')
//
// // якщо статус false вивиодиться ім'я користувача з таким статусом
// for (const user of users) {
//     if (!user.status) {
//         console.log(user.name, user.status)
//     }
// }
//
// console.log('---------------------------')
//
// // якщо вік більше ніж 30 то виводиться ім'я користувача з його віком
// for (const user of users) {
//     if (user.age > 30) {
//         console.log(user.name, user.age)
//     }
// }
