// let Name = 'max'; 
// console.log ( Name
// );
// let name = 'salo';
// let age = '10';
// let hasCar = true;


// let user = {
//     name: 'sergai',
//     age: '20',
//     job: {
//         title: 'no work',
//         payment: '0$',
//     } 
// }
// console.log(user); 
// user.age = 30;
// user.phone = 'так себе тф';
// delete user.age;
// let age = 13;

// let login = 'ADMIN';

// if ( age > 18 ) {
//     console.log ('wellcome');
// }
// // else {
// //     console.log ('not wellcome');
// // }
// else if (login === 'ADMIN') {
//     console.log ('weLLcome ADMIN');
// }


                    //  2 lesson  //
//                 тернарный оператор                //
//Условный (тернарный) оператор - единственный оператор в JavaScript,//
//принимающий три операнда: условие, за которым следует знак вопроса (?)//
//затем выражение, которое выполняется, если условие истинно, сопровождается//
//воеточием (:), и, наконец, выражение, которое выполняется, если условие ложно//

// let stop = false, age = 11;

// age > 18 ? (
//     alert("Хорошо, вы можете продолжить."),
//     location.assign("continue.html")
// ) : (
//     stop = true,
//     alert("Простите, вы ещё так юны!")
// );


//  const age = 20;

// (age > 18) ? console.log ('yes') : console.log ('no');

// const isOld = age > 18 ? 'yes' : 'no';
// consol.log(isOld);


// правдивые значения true 
// не правдивые значения folse => 0, '', undefined, null, NaN 

   
//                lexical env                       //

// { } - блок исполнения 
// в блок консоли можно ложить но нельзя брать грубо говоря 
//  let age = ('28'); 

 
//  {
//     console.log (age);//крнсоль выдаст true хоть age находиться вне блока исполнения  

//     let namik = ('igor');
//     console.log (namik);
//  } 
// console.log (namik); // консоль не выдаст нечего ведь "namik" находиться внутри блока исполнения 

//                const vs let              //
//значение const  нельзя переприсваивать на  отличие от let        


//                typeof vs let             //
 //Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать
//значения различных типов по-разному или просто хотим сделать проверку.

//typeof - показівает тип данных 
// typeof undefined // "undefined"

//typeof 0 // "number"

//typeof 10n // "bigint"

//typeof true // "boolean"

//typeof "foo" // "string"

//t//ypeof Symbol("id") // "symbol"

//typeof Math // "object"  (1)

//typeof null // "object"  (2)

//typeof alert // "function"  (3)

///                            массивы               ///
//  const arrayExa = [ 1, 'hello', , true, {} ];
//  arrayExa[17] = ('17 єлемент массива')
//  console.log(arrayExa);
//  //                            методі массивов        ///

//  arrayExa.push ( 'hello world' )              // передвигает елмент в конец 
//  arrayExa.unshift ('ставит на ноль начало массиваэ' )        //ставит на ноль в  начало массиваэ
//  arrayExa.pop ()          //удаляет єлемент с конца массива
//  arrayExa.shift ()           // удаляет єлементы с начала 

 

            //                  циклы                //
            

            // const x = 'name';
            // console.log(x[0]);
            
            // const chat = ['Andrii', 'Chey', 'Diana', 'HP', 'Iron', 'Veronika', 'Zuwwie'];
            // // const chat = ['Andrii', 'Chey', 'Diana'];
            
            
            // console.time('OPTI');
            // const chatLen = chat.length;  //length- количество єлементов в массиве 
            
            // for (let i = 0; i < chatLen; i = i + 1) {    //i = 0 - начало отчета цикла 
            //   console.log('_____________________');
            //   console.log(i, 'INDEX');
            
            //   if (chat[i].length >= 5) {
            //     console.log(chat[i]);
            //   }
            // }
            // console.timeEnd('OPTI');
            
            
            // console.time('NOT OPTI');
            // for (let i = 0; i < chat.length; i = i + 1) {
            //   console.log('____________________');
            //   console.log(i, 'INDEX');
            
            //   if (chat[i].length >= 5) {
            //     console.log(chat[i]);
            //   }
            // }
            // console.timeEnd('NOT OPTI');

        //     const student = [ 'max', 'serhei', 'manayl', 'rikardo', '123' ];
        //     console.log (student);
        //     for ( let i = 0; i < student.length ; i = i + 1 ) {
        //         console.log ('_____________');
        //         console.log ('i, max bog');
        //         console.log(student[i]);
        //    }