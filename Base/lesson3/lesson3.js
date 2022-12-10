//  const chat = ['Andrii', 'Chey', 'Diana', 'HP', 'Iron', 'Veronika', 'Zuwwie'];
//   while ( i < chat.length )  {    // условие входа в  цикл 
//                                 // условие выходва из цикла     
//  console.log(chat[i]);
//   }

                                     //      инкремент..    //

// let a = 0;
// let b = 0;

// let x = a++;                         // сначала присвоиваниеБ затем увелечение 
// console.log(a, 'A')
// console.log(x, 'X')

// let y = ++b;                          // сначала происходит увелечение, затем уже присвоевание значения 
// console.log( '__________________')
// console.log(b, 'B')
// console.log(y, 'Y')


                                //        цикл for in ..     //


               
// const cat = {                    // обьект
//   color: 'Black',              // color,name , age - ключи 
//   name: 'Chips',
//   age: 2,
//   eat: 'Bread',
//   children: {
//     cat1: 'cat1',
//     cat2: 'cat2',
//     cat3: 'cat3',
//   }
// }                 
// for (const chatkey in cat ) {        //  
//         console.log (chatkey)
// } 

//   let keys = Object.keys(cat);       //     вернет массив ключей обьекта 
//   let values  =Object.values(cat);   //     вернет массив значений ключей обьекта 
//   let entries = Object.entries(cat); //     вернет ключ и значение обьекта
  
//   console.log (keys);
//   console.log(values);
//   console.log(entries);

            //JSON -нужен для передачи копий данных информации между разными яхыками програмирования 
 
//   const catJSON = JSON.stringify(cat);   // переделывае в стрингу    // нужен чтоб делать копию обьекта 
//   console.log(catJSON);                           
//   const catParsed = JSON.parse(catJSON);   // переделывает обратно 
//   catParsed.age = 0.1;
//   console.log(catJSON);
  
// const viktorStats = {
//   commit: 5,
//   pullRequest: 63,
//   codeReviews: 32,
//   issues: 0,
//   userName: `ViktorKmin`,
//   someNulValue: null,
//   thisIsTrue: true,
//   arr: ['Taras', 'Oleksii'],
//   cat: { name: 'Chips' },
//   inf: Infinity, // -> null
//   payment: NaN, // -> null
//   // gigInt: BigInt(10n), // will get an error
//   undef: undefined, // -> ignored
//   symb: Symbol('x'), // -> ignored
//   func: function () {}, // -> ignored
//   // comments will be ignored
// }

// const jsonStat = JSON.stringify(viktorStats);  

// console.log(jsonStat);

// // ____________

// const statitic = JSON.parse(jsonStat);

//  console.log(statitic);


                                // START OF FUNCTIONS BASIC  // 

// function printSomething(whatToPrint) {
//     console.log('THIS IS FUNCTION', whatToPrint);
//   }

//   printSomething('no');
//   printSomething( { name:'22' } );
//   printSomething('222');
//   printSomething(11);
//   printSomething('22');
//   printSomething('name ');
//   printSomething(false);
//   printSomething();

