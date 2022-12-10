// ?????________________?методымассивов/методы со stringami?__________________________________//

// --------для=работы=со=стрингами_________
// 1).toLowerCase();- опускает буквы до нижннего регистра 
// 2).trim();- убирает пробелы с кроев 
// 3).split('указываем почему делем') and split('') - делит стрингу на массивы 
// 4).replace('символ что заменим','символ на который заменим')replace(new RegExp('o', 'g') - для всех 'o'
// 5).endsWith('.') - конец 
// 5).startsWith('') -начало 
// 6).includes('элемент') - мистыть ли это 
// 6).slise() = вырезает определенную часть с элемента по элемент 
// 7).toUpperCase();- делает капслоком 


// const email  = 'serokurovmaksim91@gmail.com';
// const wrongEmail = 'Serokurovmaksim91@gmail.com';
//  console.log(email == wrongEmail)//folse
// console.log(email.toLowerCase() === wrongEmail.toLowerCase()); // true 

//  console.log('    XXyy    IIoo      '.trim());


//  let whiteList = '91;75;57;';
//  let string = whiteList.split(';');
//     let whiteList = '91;75;57;';
//     let string = whiteList.split('');       //[  '9', '1', ';','7', '5', ';','5', '7', ';']
// console.log(string);        


// let string = wrongEmail.replace('S','xxx')   
// console.log(string);      //xxxerokurovmaksim91@gmail.com

// let stringAll = wrongEmail.replaceAll('', 'XXX');
// console.log(stringAll);  
//                      let string = wrongEmail.replace(new RegExp('o', 'g'), 'XXX'); \\для всех букв о  'g'-от слова global


// let endWith = email.endsWith('.91');
// let startsWith = email.startsWith('se')
// console.log(endWith);
// console.log(startsWith);


// let b = wrongEmail.includes('@gmail.com');
// console.log(b);


// let s = email.slice(3, 6);
// let s2 = email.substring(3, 6);
// console.log(s);
// console.log(s2);
// console.log(email);


// const name = 'VIKTOR';
// const firstLetter = name.substring(0, 1).toUpperCase();

// const normalizedName = firstLetter + name.substring(1, name.length).toLowerCase()

// console.log(normalizedName);


// //



//..// // _____________-------------футкции массивов----------________________..//
//1).sort сортирует в порядке возрастания 
//2).localCompare() - сравнивает и выводит число +. -
//3).ForEath((value,index,array) => {}) переберает массив
//4).filter((value,index,array) => {}) фильтрует  делит на true and folse и пушит в новый массив 
//5).reverse() - переворачивает 
//6).find()-возвращает один элемент подходящий под условие 
//7).findIndex()-возвращает индекс подходящий под условие 
//8).some() - провепряет подходит ли хотябы один элемент под условие и возвращает значение boolean
//9).every()- проверяет не подходит ли хотябы один элемент под условие и вызвращает boolean
//10).includes('значение')- смотрит есть ли такой элемент и выводит boolean 
//11).join('деление') - преобразует массив в string
//12).splice(индекс старту,сколько элементов нужно удалить , чтто поставить вместо них) - овзвращает стертое в пустой массив с названием переменой 
//13).map() - принимает массив и возвращает все что вы прикажите 
//14)
//15)

                          // // MUTATION PRESENT IN:  // numbers.sort(); // numbers.reverse() // numbers.splice(2, 0, 'MUTATION')
                            


const numbers = [1, 8, 12, 96, 3, 73.5, 893, -5, 4];
const names = ['Oleksii', 'User', 'Taras', 'Ruslan', 'Зоя', "Діана", 'Andrii', 'Іра', "Аня"];

// let sortedNumber = numbers.sort((a, b) => {
    
//   return a - b;  // [ -5,  1,    3,  4, 8, 12, 73.5, 96,  893]
//   //return b - a; // [893, 96, 73.5, 12, 8,  4,    3,  1 -5,]
// });
// console.log(sortedNumber);



// let sortedNames = names.sort((a, b) => {
// // //  if (a > b) {
// // //    return -1
// // //  }

// // //   return 1;
//     let number = b.localeCompare(a);  // зростання 
//     // let number = a.localeCompare(b);  //спадання          
//   console.log(number);
  
//   return number
// });


// console.log(sortedNames);


// names.forEach((value,index,array) => {
//     //   if (index === 3) {
// //     return;
// //   }
// console.log(value);
// console.log(index);
// console.log(array);
// }) 


// let strings = numbers.filter(value => {
//   if (value > 50) {
//     return true
//   }
// });
//
// console.log(strings);


// let string = names.find(name => { //выводит один элемент который подходит и выводит его,чтоб вывести несколько ипользуйте filter 
//    return name.length >= 5
// });
// console.log(string)

// // let strings = names.filter(name => {
// //   return name.length >= 5
// // });
// //
//// console.log(strings);


// let index = names.findIndex(name => {
//   return name.length < 4
// });
// console.log(index);

                                        //some and every

// let some = names.some(name => {
//   return name.length <= 3;
// });

// let every = names.every(name => {
//   return name.length <= 3
// })

// console.log(some);
// console.log(every);

                                        //incLudes

// let b = names.includes('Зоя');
// console.log(b);

                                        //join

// let s = names.join(' ; ');
// console.log(s);                           

                                     //splice

// let strings = names.splice(2, 0, ...['HP', 'Nazar', 'Olga']); 
// console.log(strings);
// console.log(names);                          

                                // // MUTATION PRESENT IN:

// numbers.sort();
// numbers.reverse()
// numbers.splice(2, 0, 'MUTATION')

// console.log(numbers);

                                    //  map

// const users = [
//   {
//     "name": "Oleksii",
//     "id": 1
//   },
//   {
//     "name": "User",
//     "id": 2
//   },
//   {
//     "name": "Taras",
//     "id": 3
//   },
//   {
//     "name": "Ruslan",
//     "id": 4
//   },
//   {
//     "name": "Зоя",
//     "id": 5
//   },
//   {
//     "name": "Діана",
//     "id": 6
//   },
//   {
//     "name": "Andrii",
//     "id": 7
//   },
//   {
//     "name": "Іра",
//     "id": 8
//   },
//   {
//     "name": "Аня",
//     "id": 9
//   }
// ];

// let map = users.map(user => {
//   user.id = user.id * 5;

//   return user.id;
// });

// console.log(map);
// console.log(users);

                                        //reduse

// const number = [1, 8, 12, 96, 3, 73.5, 893, -5, 4];
// let numberr = number.reduce((acc, value) => {
//   console.log(acc, 'ACC');
//   console.log(value, 'VALUE');
//   console.log('_________________');

//   // return acc + value;
// }, 0);

// console.log(number, 'NUMBER');                                       

// names.reduce()



// const users = [
//     { name: 'Andrii', age: 30 },
//     { name: 'Viktor', age: 27 },
//     { name: 'Karina', age: 24 },
//     { name: 'DImas', age: 20 },
//     { name: 'Roman', age: 19 },
//     { name: 'Karina Romana', age: 40 },
//   ]

//   let ageSum = users.reduce((acc, value) => {
//   console.log(acc, 'ACC')
//   console.log(value, 'VALUE')
//   console.log(acc + value.age)
//   console.log('_______________________')

//   return acc + value.age;
// }, 0 ) // 0 -точка отчета .. спачает когда считаем массивы обьекты 


// const initialValue = []; 

// users.reduceRight((acc, value) => {
//   if (value.age > 18) {
//     value.car = true

//     acc.push(value);
//   }

//   return acc;
// }, initialValue);

// console.log(initialValue);