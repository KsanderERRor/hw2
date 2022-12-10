                    //  1) створити функцію яка приймає масив та виводить його      //
// function lesson1 (array) {
//     console.log (array)
// }

// lesson1(['22',true, 'muki'])
 
                            //2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію. // 

// function test1 (test2) { 
//     for (let i = 0; i < 20; i++) {
//          test2 = Math.ceil(Math.random()*100)

//  console.log(test2);
//     }
// }
// test1(Math);

                 //  3 створити функцію яка приймає три числа та виводить найменьше.


// function big (la,la1,la2) {
//     if (la<la1 && la<la2) {
//         console.log(la)
//     }
//     else if (la1<la && la1<la2){
//         console.log(la1);
//     }
//     else {
//         console.log (la2)
//     }

// }
// big(11,15,7)

                            // 4) створити функцію яка приймає три числа та виводить найбільше. //

// function big (la,la1,la2) {
// if (la>la1 && la1>la2) {
//     console.log (la)
// }
// else if (la1>la && la1>la2) {
//     console.log(la1)
// }
// else {
//  console.log(la2)
// }
// }
// big(11,15,7)

                        // 5) створити функцію яка повертає найбільше число з масиву  // 
//  function sum(a,b,c) { 
    
//   if ( a<b && a<c ) {  
//     return a
//   }    else if (b<a && b<c )  { 
//     return b
//   }  else {
//     return c
//   }

//  } 
// let sum1 = sum (3,2,1)
// console.log (sum1)


// function func (array = [] ) {
//   let maxvalue = array[0];
//   for (const maxvaluefunc of array) {  
//     if (maxvaluefunc > maxvalue) maxvalue = maxvaluefunc;
//   }return maxvalue;
// }
// const maxvaluefunc = func([1,2,3,4,5,6,7,8,9]);
// console.log(maxvaluefunc);


                  //6) створити функцію яка повертає найменьше число з масcbdf 

// function func(value = []) {
// let maxvalue = value [0];
//  for (const maxvaluefunk of value) { 
//  if (maxvaluefunk < maxvalue ) maxvalue = maxvaluefunk
//  } return maxvalue
//  }
//  const maxvaluefunc  = func( [1,2,3,4,5,6,7,8,9,13,1,55,16,0] )
//  console.log (maxvaluefunc)

                        //7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.//

                        // debugger
                        // function arr (array) {
                        //     let sum = 0;
                        //         for (let i = 0; i < array.length ; i++) {
                        //            sum += array[i]
                        //         }
                        //   return sum
                        // }
                        // const index = arr ([1,2,3,]);
                        
                        // console.log (index)

                      //8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.   


                    //   function func (array = [ ]) {
                    //     let sum = 0;
                    //     for (let i = 0; i < array.length; i++) {
                    //       sum += array[i] / array.length;                  
                    //     }
                    //     return sum
                    //   }

                    //  const  arithmeticmean = func ([1,2,3,4] )
                    

                    //   console.log(arithmeticmean );


                    //9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів//

                    // debugger
                    // function func (array = []) {
                    // let keys=[];
                    //     for (const key of array) {
                    //       keys.push(...Object.keys(key))
                    //     }
                    //   return keys ;
                    

                    // }
                    // const arrayobj = func ([{name: 'Dima', age: 13}, {model: 'Camry'}])
                    // console.log(arrayobj);


            //Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів


                    // function funcvalue(array = []) {
                    //   let value = [];
                    //   for (const key of array) {
                    //     value.push(...Object.values(key))
                    //   }
                    //   return value ;
                    // }

                    // const final = funcvalue ([{name: 'Dima', age: 13},{model: 'Camry'}])

                    //   console.log(final);


          //11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
          // debugger
                    //  function func (array1, array2) {
                    //   let sum = []
                    //   for (let i = 0 ; i < array1.length && array2.length;  i++ ) {
                    //     sum.push(array1[i] += array2[i])  
                    //   }
                    //   return sum;
                    //  }

                     
                    //  const sumarray = func([1,2,3,4],[4,6,12,16]);
                    //  console.log(sumarray);  

                                                              //через метот map ???????????????????????????
                    // function func (array1 =[], array2= []) {
                    //   return            //
               
                    //  }

                     
                    //  const sumarray = func([1,2,3,4],[4,6,12,16]);
                    //  console.log(sumarray);
                                                             // через строчную функцию ,,,,,,,,,,,,,,,,,,,,
                   
                    // const func = (array1 =[], array2= []) => array1.map((numb, index,  ) => numb + array2[index])
                    
                    // const sumarray = func([1,2,3,4],[4,6,12,16]);
                    // console.log(sumarray);
                                                           
                                                              // с массивами разной длины 
                    //  const array1 = [1,2,3,4]
                    //  const array2 = [1,2,3]                                     
                    // function func(array1 = [], array2 = []) {
                    // const sumarray = [];

                    // biggestLenght = array1.length > array2.length ? array1.length : array2.length

                    //    for (let i = 0; i < biggestLenght.length; i++) {
                    //   sumarray[i] (array1[i] || 0)  + (array2[i] || 0);
                    //    }
                    //     return sumarray;
                    // }

                    // const final = func(array1,array2);

                    // console.log(final);
                                          
                    



          //створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


          //  function func (array=[]) {
          //   let minnumber = array[0];
          //   let maxnumber = array[0];
          //   for (const minnumberfunc of array) {
          //     if (minnumberfunc < minnumber  ) {
          //       minnumber = minnumberfunc
          //     }
              
          //   }
        
          //   console.log (maxnumber)
          //   return minnumber ;
          //  }
          //  const final = func ([1,2,3,4,5,6,7,8,9,])



        //   debugger
        // function func(array = []) {
        //   let maxvalue = array[0];
        //   let minvalue = array[0];
        //   for (const value of array) { 
        //     if (value > maxvalue ) {
        //        maxvalue = value; 
        //     }

        //     else if (value < maxvalue ) {
        //       minvalue = value;
        //     }   
        //   }
        //   console.log(minvalue);
        //    return maxvalue
        // }
        // let maxvaluefunc = func([2,1,7,4,5]);
        // console.log(maxvaluefunc);



        // function func(array) {                                     
        //   let maxvalue = array[0];
        //   for (const value of array) {
        //     if (maxvalue < value ) {maxvalue = value}
        //   }
        //      return maxvalue
        // }
        // final = func ([2,3,1,5,3,124,12,43,5,21,6,65,77,3])
        // console.log(final);


      //   function func(array = []) {                                 
      //     let maxvalue = array[0];
      //     let minvalue = array[0];
      //     for (const value of array) {
      //       if (maxvalue < value) maxvalue = value;
      //       if (minvalue > value) minvalue = value;
      //   }
      //     console.log(maxvalue);
      //     return minvalue
      // }
      //   final = func ([4,3,7,4,5,6,123,4,234,54,1,32,33,123,54,3336,67567,1,23,4,543,65,23,])
      //   console.log(final)

     // Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
          // function func (array = []) {
          //           let keys=[];
          //               for (const key of array) {
          //                 keys.push(...Object.keys(key))
          //               }
          //             return keys;
          //           }
          //           const arrayobj = func ([{name: 'Dima', age: 13}, {model: 'Camry'}])
          //           console.log(arrayobj);
//------------------------------------------------------------------------------------------------------------------------------//
      //    function funcvalue(array = []) {
      //                 let value = [];
      //                 for (const key of array) {
      //                   value.push(...Object.values(key))
      //                 }
      //                 return value ;
      //               }

      //               const final = funcvalue ([{name: 'Dima', age: 13},{model: 'Camry'}])

      //                 console.log(final);
      //  debugger
      // function func(array = []) {
      //   let objkey = [];
      //   let objvalue = [];
      //   for (const key of array) {
      //     objkey.push (...Object.keys(key))
      //     objvalue.push (...Object.values(key))
      //   }
      //   console.log (objkey);
      //   console.log(objvalue);
      // }
      // const valuekeyobjj  = func ([{name: 'Dima', age: 13},{model: 'Camry'}])
      // console.log(valuekeyobjj)

    //   function func(array = []) {
    //     let arr = []
    //     let arr1 = []
        
    //     for (let i = 0; i < array.length; i++) {
    //       const  element= array[i];
          
    //       if (element === 0 ) arr.push (element) 
    //       if (element > 0) arr1.push (element)
          
        
    //     }
    // arr1.push(...arr)
    //     return arr1
    //   }
    //   const funcarr = func ([0,1,0,4,0,7])
    //   console.log(funcarr);

   // - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  //  function func(arr = [], a) {
  //  let  value = arr[a];
  //  arr[a] = arr[a+1]    
  //  arr[a+1] = value                      
  //  console.log(arr[a],arr)
 
  //  }
  //  const final = func([9,8,0,4],0)
  //  console.log (final)