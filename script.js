// 1. Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. 
// Только с полями, у которых тип значения - строка;

// Input: { name: 'Baha', isAdmin: true }
// Output: { name: 'Baha' }

// Input: { isAdmin: true }
// Output: {}


// const getStr = (obj) => {
//   Object.keys(obj).forEach((el) => {
//     if (typeof(obj[el]) === 'string') {
//         obj[el]
//     } else {
//         delete obj[el]
//     }
//   })
// return obj
// }
// console.log(getStr({ name: 'Baha', isAdmin: true }));


// 2. Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - 
//значение, которых false

// Input: { isAdmin: false, isBaha: true }
// Output: ['isAdmin']

// const getArr = (obj) => {
// return Object.keys(obj).filter((el) => {
//     return obj[el] === false 
// })
// }
// console.log(getArr({ isAdmin: false, isBaha: true }));


// 3. Напишите функцию, которая принимает массив объектов с полем id и возвращает массив этих id.
// Например [[{id: '100'}, {id: 2}]] 

// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]

// const getArr = (arr) => {
//     return arr.map((el) => {
//         let newArr = Object.values(el)
//         return newArr[0]
//     })

// }
// console.log(getArr([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]));


// 4. Вам дан объект product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%.
//    Если это не так, сделайте скидку на 7%. Обновите объект.

// const product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }

// product.price = product.price > 100 ? product.price * 0.9 : product.price * 0.93
// console.log(product);


// 5. Вам дан массив из обьектов, создайте функцию которая добовляет в список новый 
//    продукт и вычисляет общее количество калорий. Функция должна передавать новый 
//    продукт например: ('banana', '500').


// const list = [
//     {
//         title: 'sandwich',
//         'калорий': '200',
//     },
//     {
//         title: 'chocolate',
//         'калорий': '1000',
//     },
//     {
//         title: 'chicken',
//         'калорий': '700',
//     },
//     {
//         title: 'burger',
//         'калорий': '1000',
//     },
// ]

// const addProduct = (key, value) => {
//     let newArr = [...list, { title: key, 'калорий': value }]
//     let callories = 0
//     newArr.forEach((el) => {
//         callories = callories + Number(el['калорий'])
//     })
//     return callories
// }
// console.log(addProduct('banana', '500'));