// function buydollars(uahcount) {
// uahcount = uahcount || 0                     //если передаеться не подходящий тип данных "false", то будет принято как значение по умолчанию "0", чтоб не выбило ощибку 
//     const dolllars = uahcount / 42.15
//     console.log(`you buy ${dolllars}$`);
// }
// buydollars(null); // 'null,NaN', то не правильные значения которые ломают и выдают пототм "false"

// function func (array = []) {          // значение по умолчаниюБ но оно не всегда работает 
//     if(!Array.isArray(array)) {     // если то не являеться массивов,то 
//         array = []    // пусть array, станет массивом 
//     }
//      for (const arrayElement of array) {       
//         console.log(arrayElement);
//      }
//      console.log(array)
// }  
// func (NaN)

// function gotshop(items1,items2,items3) {         //переменные, vj;tn ,сколько угодно      
//     console.log(items1);                         // желательно больше 5 не делать    
//     console.log(items2);
//     console.log(items3);

// }
// gotshop('piva','vodocha','prezervativu')     // их значенние 



// function funcWithManyItems(items = {}) {      //так легче передать большое количество переменных 
//   console.log(items);                        // 
// }
//
// const itemToProcess = { item1: 'Xlib', item2: 'Moloko' };
//funcWithManyItems(itemToProcess);  

                  
                    // arguments () это псевдомассив, являеться обьектом,но передает ключи и их значения 
                    // он ставиться  по умолчанию,если в функции задано значение, но нет переменной        
   
    //  function buyproducts() {
    //     console.log(arguments);
    //  }
    //  buyproducts ('Xlib', 'Moloko', 'Mnyasko', 'Pivaxa', 'Chipsu')
                 
                     // с аргумента можно сделать полный массив с помошью "Array.from(arguments)"
    
    // function buyProducts(item) {
//   console.log(arguments);
//
//   const argsArr = Array.from(arguments);    //делает с недомассива массив   
//
//   console.log(argsArr);
//
//   for (const argument of arguments) {
//     console.log(`I bought ${argument}`)
//   }
// }
//
// buyProducts('Xlib', 'Moloko', 'Mnyasko', 'Pivaxa', 'Chipsu'); 
            /// retern //______________________________________________________________________

// /**
//  This function is using to buy a car.
//  @param money - some number
//  @param type = sedan || vagon || van || suv  
//   @returns {{rest, car: undefined}|{rest: number, car: string}}
//  /
// function buyCar(money) {
//   console.log('I try to buy a car with', money);
//   let car = undefined;

//   if (money < 5000) {
//     console.log('No money no honey');

//     return {
//       rest: money,
//       car
//     };
//   }
// //
//   console.log('Congrats');
//   money = money - 5000;
//   car = 'Lacetti';
//   // money -= 5000;

//   console.log('I got', money, 'dollars after all manipulations');

//   return {                       //нельзя реторнить несколько обьектов,будет ретерниться последжний запписаный через запятую 
//     rest: money,                 // но сожна реторнить несколько как ключи обьекта 
//     car
//   };
// }

// const rest = buyCar(6000,);

// console.log(rest.rest, '$ left. I go to drink')


//_____________________________________________________________________________________________________________________________________________________//
//                       .... declaration and axspeession ...//
// обычная функция - declaration                       
//          declaration(2)      //можно оголошать змину функции выше саммой функции           
//        function declaration(payload) {       //.. имеет свойство всплывать.. 
//         console.log(payload);
        
//        }     
//       // declaration(2)  

// стрелочная функция - expression 
//        const expression = (payload) => {      // отсутс твует argyments значение по умолчанию 
//         console.log(payload);                 // работает видоизменненый реторн         
//        }                                      //// // NO THIS
//        expression(22);                                 // // NO ARGUMENTS
//                                              // // RETURN COULD BE CHANGED

//   const bayDollars =(uahCount)=> {      //обычный ретерн
//     return uahCount / 42.15
//   }
//   const dollars = bayDollars(10000);
//   console.log(dollars);

//          ...стрелочная функция с видоизменненым реторн 
//   const bayDollars = (uahCount) =>   uahCount / 42.15;  // видоизменненый реторн 
//                                                       // ... если аршумент один можно записывать без стрелок 
//                                                       //  const bayDollars = uahCount =>   uahCount / 42.15;  
//   const dollars = bayDollars(10000);
//   console.log(dollars);
     

// _______________________________________________destructerizetion________________________________________________________//
 

// const user = {
// id: 1,  
// name: 'emanuel',
// age: 20,
// profession: 'vodolaz',
// job: 'nuhat pucki',
// friend: {
//  name: 'bogdan'
// }
// }

// const anatherUser = {
//   id: 2,
//   name: 'sergei',
//   age: 20,
//   profession: 'smotriaga',
//   job: 'delat puki'

// }

// // const name = user.name;
// // const profession = user.profession;

// // const { name:vseEshoeEmanuel,profession, ...anatherFileds  } = user;  ////"...anatherFileds" выносит все что не переименовывалось деструкторизацией в отдельный обьект 
// // const { name: sergeiName, profession:professionSErgei} = anatherUser;  // можно переименовывать имя ключа  ключей 
// // console.log( vseEshoeEmanuel,'=',profession, ',',  sergeiName,'=',  professionSErgei )
// // console.log(anatherFileds)  



// // const { ...userCopy} = user; 
// // console.log ( user )
// // console.log ( userCopy )
// const  {friend: { name } } = user    // 
// console.log(name);

// /////////////////////////////деструкторизация массива .................

// const chat = ['user1','user2','user3','user4', 'user5','user6'];
 
// const [max, bogdan , olena , sergai, ...anatherUser] = chat;

//          // const [, , , sergai] = chat // запятые то пропуски 

// console.log (olena);
// console.log (anatherUser);



// ЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗ ctr+alt+l = выранивает сьрочки 