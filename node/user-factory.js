function createrNewUser(name, age) {
 return {
    name,
    age,
    hello: () => {
        console.log(`hello my name is ${name}`);
    }
 }   
}

////////////////////////////спопсоби експортувати модуль
////////////..... 1 способ 
module.exports = {
    createrNewUser
};            

/////////////////... 2 способ експорту
// module.exports.addNewName = () => {
//     console.log('TEST');
// } 

// module.exports.string = 'STR'


//////////.............3  способ експорту
// module.exports = {
//     addNewName: () => {
//         console.log('TEST');
//     }, 

//     string: 'STR'
// }  

