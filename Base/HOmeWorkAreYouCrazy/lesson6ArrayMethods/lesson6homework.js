// // ________________1) Створити масив з 20 чисел та____________
// // a) відсортувати його від меншого до більшого.
// const nambers = [1,4,2,3,4,6,8,54,32,213,43,56,78,5,3,1,3,7]

// // let sortedNamber = nambers.sort((a, b)=>{
// // return  a - b

// // })
// // console.log(sortedNamber);

// //b) відсортувати його від більшого до меншого.

// // let minnamber = nambers.sort((a, b)=>{
// //     return b - a 
// // })
// // console.log(minnamber);

// //c) Відфілтрувати числа які є кратними 3.

// // let namber = nambers.forEach ((value)=>{
// //     if(value % 3 ===0){
// //         console.log(value);
// //     } 
  
// // })
// // console.log(namber);


// // let namber = nambers.filter ((value)=>{
// //     if(value % 3 ===0){
// //         console.log(value);
// //     } 
  
// // })
// // // console.log(namber);

// // d) Відфілтрувати числа які є більшими за 10.

// // let filt = nambers.filter ((value) =>{
// // if (value >10 ){
// //  console.log(value);
// // }
// // })

// //e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// //    const task = nambers.forEach((vulue, index)=>{
// //     console.log(index,vulue)
// //    })

// //____________________________f) За допомогою map збільшити кожен елемент в масиві в три рази.

// // const namber = nambers.map((value) => {
// // value = value *3
// // console.log(value)
// // })

// //---------------------------- g) Порахувати загальну суму всіх елментів у масиві (reduce) не понял не сделал

// // const task = nambers.reduce((acc,value, a)=>{
// // // console.log(acc );
// // // console.log(value);
// // return acc + value
// // })
// // console.log(nambers);

// // 2) Створити масив з 20 стрічок та:

// //_________________________________2) Створити масив з 20 стрічок та:
// //  //___________a) Відсортувати його в алфавітному порядку
// const arrayLeangs = ['hello','stupid','alo','apple','cheaf','inplug','age','name','lesson','home']

// // const task = arrayLeangs.sort((a,b)=>{
// //   if (a < b) {
// //     return -1
// //   }  

// // } )
// // console.log(task)

// // // c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// // const task = arrayLeangs.filter((value)=> value.length <=4  )
// // console.log(task)

// // d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// let task = arrayLeangs.map((value)=> value.replace('','Sam says' ))
// console.log(task)





// // ________________________________3) Все робити тільки за допомогою методів масивів!

// //____________________________ a) відсортувати його за  віком (зростання , а потім окремо спадання)

// // const users = [
// //     {name: 'vasya', age: 31, isMarried: false},
// //     {name: 'petya', age: 30, isMarried: true},
// //     {name: 'kolya', age: 29, isMarried: true},
// //     {name: 'olya', age: 28, isMarried: false},
// //     {name: 'max', age: 30, isMarried: true},
// //     {name: 'anya', age: 31, isMarried: false},
// //     {name: 'oleg', age: 28, isMarried: false},
// //     {name: 'andrey', age: 29, isMarried: true},
// //     {name: 'masha', age: 30, isMarried: true},
// //     {name: 'olya', age: 31, isMarried: false},
// //     {name: 'max', age: 31, isMarried: true}
// //  ];
 
// // let task = users.sort((a,b)=>{
  
// // return a.age - b.age 
// // // return b.age - a.age // 
// // })
// //  console.log(task)

// //_____________________b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)//


// // let task = users.sort((a,b)=>{
// //     return a.name.length  - b.name.length

// // }) 
// // console.log(task);


// //-_____________________ пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//   // та зберегти це в новий масив (первинний масив залишиться без змін)


  
// // const users = [
// //     {name: 'vasya', age: 31, isMarried: false},
// //     {name: 'petya', age: 30, isMarried: true},
// //     {name: 'kolya', age: 29, isMarried: true},
// //     {name: 'olya', age: 28, isMarried: false},
// //     {name: 'max', age: 30, isMarried: true},
// //     {name: 'anya', age: 31, isMarried: false},
// //     {name: 'oleg', age: 28, isMarried: false},
// //     {name: 'andrey', age: 29, isMarried: true},
// //     {name: 'masha', age: 30, isMarried: true},
// //     {name: 'olya', age: 31, isMarried: false},
// //     {name: 'max', age: 31, isMarried: true}
// //  ];

// // let newusers = JSON.parse(JSON.stringify(users))

// // newusers.map((value,index,)=>{
// //    value.id = index
// //     // console.log(value);
// //      return value
// //  })
// //  console.log(users);
// // console.log(newusers);



// //  let task  = users.map((value,index)=>{
  
// //    value.id = index
// //     // console.log(value);
// //      return value
// //  })
// //  console.log(task);

// //Відфільтрувати масив за наступними крітеріями :
// //- двигун більше 3х літрів
// // const cars = [
// //     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// //     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// //     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// //     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// //     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// //     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// //     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// //     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// //     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// //     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// //     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// //     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// //     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// //  ];

// // //- двигун більше 3х літрів
// //  const filt = cars.filter((value)=> value.volume > 3 )
// //    console.log(filt);
 
// // // - двигун = 2л


// // // - виробник мерс
// // const filt = cars.filter((value)=>value.producer === "mercedes")
// // console.log(filt)

// // - двигун більше 3х літрів + виробник мерседес
// //  const filt = cars.filter((value)=> value.volume >= 3 &&  value.producer === 'mercedes' )
// //    console.log(filt);

// //- сили більше ніж 300 + виробник субару + мотор серіі ej
// // const filt = cars.filter((value)=> value.power >= 300 && value.producer === 'subaru'  )
// // console.log(filt)

// // //- мотор серіі ej
// //  const filt = cars.filter((value)=> value.engine.startsWith('ej') )
// //    console.log(filt);

// //- сили більше ніж 300 + виробник субару + мотор серіі ej
// //  const filt = cars.filter((value)=> value.power > 300 && value.producer ==="subaru" && value.engine.startsWith('ej') )
// //    console.log(filt);


// // const usersWithAddress = [
// //    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
// //    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
// //    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
// //    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
// //    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
// //    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
// //    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
// //    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
// //    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
// //    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
// //    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// // ];

// // //-- Відсортувати їх по ID

// // const task = usersWithAddress.sort((a,b)=> a.id - b.id)
// // console.log(task);  

// // // -- Відсортувати їх по ID в зворотньому порядку
  
// // const task = usersWithAddress.sort((a,b)=>   b.id - a.id)
// // console.log(task);  

// // // -- Відсортувати по віку
// // const task = usersWithAddress.sort((a,b)=>   b.age - a.age)
// // console.log(task); 


// // -- Відсорутвати по імені
// // -- Відсорутвати по назві вулиці
// // -- Відсорутвати по номеру будинку

// // // -- Залигити тільки тих, хто молодший ніж 30 (filter)

// // const filt = usersWithAddress.filter((value)=> value.age > 30 )
// // console.log(filt);

// // // -- Залишити тільки одружених, які молодні за 30

// // const filt = usersWithAddress.filter((value)=> value.isMarried === true && value.age > 30  )
// // console.log(filt);


// // // - Відсорутвати по номеру будинку

// // const filt = usersWithAddress.sort((a,b)=> a.address.number - b.address.number  )
// // console.log(filt);

// // // -- Залишити лише тих, в кого парні номери будинків.


// // const filt = usersWithAddress.filter((value)=> value.address.number %2 === 0 )
// // console.log(filt);

// // -- Порахувати загальний вік всіх людей. (reduce)

// // const usersWithAddress = [
// //     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
// //     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
// //     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
// //     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
// //     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
// //     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
// //     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
// //     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
// //     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
// //     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
// //     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// //  ]; 

// // const task = usersWithAddress.reduce((acc,value)=>{
// //    return acc+value.age

// // },0)
// // console.log(task);



