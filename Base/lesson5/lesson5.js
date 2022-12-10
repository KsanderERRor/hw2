//________________________________________________3 столба (паторна ) OOP__________________________________________________________

//1) инкапсуляция 
//Инкапсуляция – это объединение функций и данных в
//рамках одной структуры, внутреннее состояние которой (данные) скрыто
//от внешнего мира

//2) наследование 

//Наследование – это создание новых «классов» на основе существующих. В
//JavaScript его можно реализовать несколькими путями, один из которых – с
//использованием наложения конструкторов


//3) полииорфизм
//Полиморфизмом является одним из принципов объектно-ориентированного
//программирования (ООП). Это помогает проектировать объекты таким образом, чтобы они могли
//совместно использовать или переопределять любое поведение с конкретными
//предоставленными объектами.

//идея заключается в способности вызывать один и тот же метод для разных объектов, и при этом
//каждый объект реагирует по-своему.
//Чтобы это произошло полиморфизм использует наследование.


//4) абстаракция (претянутый вид )
//Абстракция - это способ создания простой модели, которая содержит только важные свойства с
//точки зрения контекста приложения, из более сложной модели. Иными словами - это способ
//скрыть детали реализации и показать пользователям только функциональность. Абстракция
//гнорирует нерелевантные детали и показывает только необходимые. Важно помнить, что мы не
//можем создать экземпляр абстрактного класса.



//___________________________________________________________________________________________________________



// const mouse1 = {
//   producer: 'AliExpress',
//   color: 'blue',
//   alkaline: 2
// }

// const mouse2 = {
//   producer: 'Logithech',
//   color: 'black',
//   alkaline: 1
// }

// const mouse3 = {
//   producer: 'SpeedLink',
//   color: 'black',
//   alkaline: 1
// }

// function generateMouse(color, producer, alkalineCount) {         // функция для генерации мышек
//   if (!alkalineCount || alkalineCount < 0) {             // можно создаввать проверки 
//     alkalineCount = 1;                              
//   }

//   return {
//     color,
//     producer,
//     alkaline: alkalineCount
//   }
// }

// const mouse4 = generateMouse('yellow', 'Ali', -10);

// const mouse5 = generateMouse('grin', 'sony', 4)

// console.log(mouse4);
// console.log(mouse5);

//.________________________________________________________конструкторы_____________________________________

// class user {
//     constructor(name,age,job) {
//     this.name = name; 
//     this.age = age;
//     this.job = job;
//     this.test();   // wil start at 'new user
//     }
//     sayHello () {                                                 // общее для всех юзеров по-этому пишеться за границами конструктора 
//         console.log(`hello my name is ${this.name}`)
//     }

//     test (){
//         console.log(`this test name ${this.name}`)
//     }
// }

// class Developer extends user {                     // наследник 'user' умеет делать то же что и он и принимает в себя его переменные 
// constructor(name,age,job, skills) {                // так же может добавлять сови 
//     super(name,age,job) // пишем все переменные, что имел родительский класс 
//     this.skills = skills;  // новые свойство, которое передаються для наследника 
// }
//                                                                     //class Developer(новый класс,имя наследника ) extends(наследывает) user(прородитель)
    
//     sayHello(){
//     console.log('ии привет я...... ', this.name);
//     }                                                               
//     coding() {
//       console.log(`i know ${this.skills} such skills`)
//     }
  
// }
  
//  const enriko = new Developer('enriko', '20', 'animeshnick', ['codutu']);
//  enriko.sayHello()
//  enriko.coding()  


// const sergei = new user ('sergei', '20', 'sadovnick');
// const max = new user ('max', 20,'smotryga')
//  sergei.sayHello()


//______________________________________________________2User________________________________//
class User {
    constructor(name,age, job) {
     this._name = name;
     this._age = age;
     this._job = job;
     this._password ='12345'
  }

 get name () {
  return this._name
}
 set name (value) 
 {this._name = value
}
 get age () {
   return this._age
  }
 set age (value) {
  if (value < this._age) {
    console.log('you cannon be younger that u r');
    // retern;
  }


  this._age = value
}
 get job () {
  return this._job
}
 set job (value) {
  this._job = value
  }

  login(LoginPassword) {
     if (this._password !== LoginPassword) {
       console.log('not valid password ');
       return
     }
     console.log('welcome');
     
  }

}

const anna = new User('anna',30 ,'sosalcka') 
            // anna.age = 10
console.log (anna.age)

// anna.login('12345') 
 
       // _____________________________________________________________________________________//

// class Car {
//   constructor (madel,color){
//     this.model = madel;
//     this.color = color;
//   }  
  
//   _checkEngine(){
//     console.log('checking engene')
//   }

//   _checkBreaks(){
//     console.log('checking Breaks')
//   }
       
//   start(){
//    this._checkEngine()
//    this._checkBreaks()
//    console.log('bzbzbzbzzzzbzbz')
//  }
// }

// const myCar = new Car('fiat', 'red');

// myCar.start()



