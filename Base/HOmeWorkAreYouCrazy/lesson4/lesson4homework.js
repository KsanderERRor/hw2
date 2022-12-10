// ; MORE tASKS IN LESSON 

// ; Ваша функція має приймати одне натуральне число, після чого вивести:

// ; "Fizz", якщо це число ділиться на 3;
// ; "Buzz", якщо це число ділиться на 5;
// ; “FizzBuzz”, якщо виконані обидві попередні умови;
// ; саме це число в інших випадках
   
//______________________________________________1_task______________________________________________________________//


// function func(namber) {
//     if (namber % 3 ===0 && namber % 5 === 0 ) {
//         console.log('FizzBuzz')
//         return
//     }
//     if (namber % 3 === 0 ) {
//         console.log('Fizz')
//     }
//     if (namber % 5 ===0 ) {
//         console.log('Buzz')
//     }
    
// }
// const final = func(10)



// У цьому завдання вам належить побудувати драбинку з чисел.
// Програма приймає на вхід ціле позитивне число n (n<=15) - кількість рівнів, ваше завдання вивести n рівнів,
// у кожному з яких стоять числа від 1 до рівня.

// Вивести можна або вигляді кожного нового рядка, або списку.


//_________________________________________2_task___________________________________________________________________//


// function func(n= []) {
//     let output = [];
//     for (let i = 1; i <= n;i++) {
//      output[i] = [i]
//         console.log(...output);
//     }
//     // return output;
// }

// const final = func(6);
// console.log(final)



// function func( n = [] ) {
//     let output = [];
//    let output1 =[];
//        output1.push(output)

//     for (let i = 1; i <= n; i++) {
        
//         output.push(i)
//         console.log([...output])
    
//     }
  

// }
// const steps = func([6])



//_________________________________________________________________________task3________________________________________________________//

// Напишіть функцію для побудови горизонтальних стовпчастих діаграм за допомогою символу зірочки.
// Вводити потрібно масив з цілими данними

   
//   function func(array = []) {
//    let output = []
//    let output1 = output; 
//        for (const key in output) key[i] = '*'
       
//     for (let i = 0; i < array.length; i++) {
//         if (array[0- 1])    array[0]= array[0] ; output.push(array[0]);      console.log('*')   
//     }
//    }

//  const final = func([3,7,1,10,8])
// //  console.log(final)

//  function  func (array) {
//     let array1 = array
//     for (let i = 0; i < array1.length; i++) {
       
//     }

//     for (let j = 0; j < array.length; j++) {
//         const element = array[j];
        
//     }
//  }

//  func([3,7,1,10,8])






// function func( n  ) {
//     let output = [];
//    let output1 =[];
   
//     output1.push(output)
//     for (let i = 1; i <= n; i++) {
        
//         output.push(i)
//         // console.log([...output])
    
//     }
//   for (let j = 0; j < n; j++) {
//      output1[j] = '*';  console.log (...output1)
    
//   }

// }
// const steps = func([6])

     // ______________________________решение____________________________________________//


// function func(array) {
//     for (const el of array) {                                 // 
//         let string = ''
//           for (let i = 1; i <= el;i++) {
//             string += '*'
            
//           }
//         console.log(string)
//     }


// }
// func ([3,7,1,10,8])

   
