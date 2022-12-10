// const numberFilm = +prompt('сколько фильмов вы уже посмотрели', '')


// const PersonalMoviesDB = {
//     const: numberFilm,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('один из просмореных фильмов', ' ')
//       b = prompt('на сколько оцените его ', "")
//       c = prompt("один из последних просмотреніх фильмов", "")
//       d = prompt("на сколько оцените его","")

// PersonalMoviesDB.movies[a] = b;
// PersonalMoviesDB.movies[c] = d; 

// console.log(PersonalMoviesDB);


//________________________________________________lesson19___swithCase____________________________//

// let num = 50;

// switch (num) {
//     case 49:
//             console.log('мало');
//         break;
//     case 51:
//             console.log('не верно ');
//         break;
//     case 50:
//             console.log('верно');
//         break;
//     default:
//            console.log('не с чем не верно');
//         break;
// }


//____________________________________________lesson21While_DOWhile_______________________________________________//  
// let numm = 50;
// while (numm < 55) {
//     console.log(numm);
//     numm++;
// };

// do {
//     console.log(numm);
//     numm++; 
// } while (numm < 60 );


//____________________________________________lesson22_____________________________________________________________//
// let resoult = ''
// const length = 7;
// for (let i = 0; i < length; i++) {
//     for(let j = 0; j < i; j++ ){
//         resoult+='*';
//     }
//     resoult+='\n'
// }
// console.log(resoult);
//__________________________________________lesson22homeWork_______________________________________________________//
// //При помощи цикла выведите числа от 5 до 10 в консоль. 
// //5 и 10 включительно. Цикл можно использовать любой

// let number = 5
// do {
//    console.log(number); 
//   number++ 
// } while (number <= 10);


// // При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке
// // (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// for (let i = 20; i > 10 ; i-- ) {
//   console.log(i);
//   if (i === 13) {
//     break;
//   }  
// }

// //Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// //Для определения типа данных используйте typeof();
// //Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondTask(a) {
// let data = a
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
//     return data;
// }

// let resoult = secondTask([5, 10, 'Shopping', 20, 'Homework']);
// console.log(resoult);

//Разверните массив data наоборот при помощи цикла и запишите данные в массив result.


function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    return result;
}

thirdTask();