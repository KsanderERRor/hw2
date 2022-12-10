// function closure() {
//   let x = 0;
//
//   var y = 18;
//
//   function increase() {
//     ++x;
//   }
//
//   function decrease() {
//     --x;
//   }
//
//   function set(newValue) {
//     if (newValue < x) {
//       return
//     }
//
//     x = newValue;
//   }
//
//   function get() {
//     console.log(x);
//   }
//
//   return {
//     increase,
//     decrease,
//     get,
//     set
//   }
// }

//
// let actions = closure();
// let anotherActions = closure();
//
// console.log(actions);
//
// actions.decrease()
// actions.decrease()
// actions.decrease()
//
// anotherActions.increase()
// anotherActions.increase()
//
// actions.get()
// anotherActions.get();
//
// actions.set(-200);
//
// actions.get();
//
// console.log(y);
//
//_______________________________recursion________________________
// function recursion(arrToIterate = [], i = 0) {
//   // debugger;
//   if (!Array.isArray(arrToIterate)) {
//     return;
//   }
//
//   // debugger
//   if (arrToIterate.length <= i) {
//     return;
//   }
//
//   // debugger;
//   console.log(arrToIterate[i])
//
//   // debugger;
//   recursion(arrToIterate, ++i);
//
//   console.log(i);
//   console.log('_______________________');
// }
//
// recursion([10, 20, 30, 40]);
//
//


//__________________________set

// let n = ['067', '093', '911', '067', '122', '122'];
//
const uniqueNumbers = new Set(n);
// const uniqueNumbers = new Set([...n]);

uniqueNumbers.add('222')
uniqueNumbers.add('222')

console.log(uniqueNumbers.size);
console.log(uniqueNumbers.has('911'));
// uniqueNumbers.clear()
// uniqueNumbers.delete('222')

console.log(uniqueNumbers);

// uniqueNumbers.forEach((value, value2, set) => {
//   console.log(value);
// })

const arrayFromSet = Array.from(uniqueNumbers);

console.log(arrayFromSet);
//_____________________________map 
const map = new Map();

const object = { age: 12 }

map.set('age', 12);
//
map.set(object, ['YES']);
map.set(object, 'HELLO');
map.set(new Set([22, 12, 22]), 'SET')
//
// map.set(object, 'HELLO');

console.log(map.get('age'));
console.log(map.get(object));
console.log(map.get({ age: 12 }));
console.log(map.get(new Set([22, 12, 22])));

console.log(map);
