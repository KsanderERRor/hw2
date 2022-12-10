// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
// ===



class PC {
    constructor(RAW,CP,name){
        this.RAW = RAW;
        this.CP = CP;
        this.name = name;
    }
    powerOP(){ 
        
        console.log(`запуск компа ${this.name}`)
        if (this._massa > 2 || this._battery > 4  ){
            console.log('arror, weight exceeded...plz ');
            console.log(('arrorororo'));

            return;
        }
    }
}
const computerHP = new PC (4,2000, 'HP');
console.log (computerHP)
computerHP.powerOP()

// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.

// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===


class LOPTOP extends PC {
    constructor(RAW,CP,name,diagonal){
    super(RAW,CP,name)
    this.diagonal = diagonal;
    this.battery = this.CP / (this.diagonal * RAW);
    }

}
 const lopTopMAC = new LOPTOP (4, 5000, 'MAC', 17);
 console.log(lopTopMAC);
 lopTopMAC.powerOP();

//  Від ноутбука потрібно зробити ультрабук.
//  Він має нову змінну ваги.
//  При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
 class ultraBok extends LOPTOP {
    constructor(RAW,CP,name,diagonal,massa){
    super(RAW, CP, name, diagonal)
    this._massa = massa 
    this._RAW = RAW
    this._CP = CP
    this._name = name 
    this._diagonal = diagonal
    }
     
    


     get massa () {
         return this._massa
}
     set massa (value ) {
        if (value  ) {
           
        }
}
     get battery () {
        return this._battery
         
}
     set battery (value) {
        if (this._battery  ) {

        }
     }

     


    }

const UltraBok = new ultraBok (2, 10000, 'sonu', 20 ,5 )
console.log(UltraBok)
UltraBok.powerOP()
