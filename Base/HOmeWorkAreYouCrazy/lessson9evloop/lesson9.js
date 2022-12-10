

const load = () => {
  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 60; j++) {
      console.log([`i love you`,   'dont sad']);

      if (i === 2 && j === 0) {
        return
      }
    }
  }
}

load()
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cw = c.width = 500;
var ch = c.height = 500;
var cx = cw / 2,  cy = ch / 2;
var rad = Math.PI / 180;
var howMany = 500;
var p = [];
var colors = ["242,41,41", "222,80,80", "247,111,111", "255,145,145", "252,199,199"];
ctx.strokeStyle = "white";
ctx.globalAlpha = .7;

function particles() 
{
  this.r = randomIntFromInterval(2, 12);
  var innerR = Math.round(Math.random() * 130) + 1;
  var innerA = Math.round(Math.random() * 360) + 1;
  this.x = cx + innerR * Math.cos(innerA * rad);
  this.y = cy + 20 + innerR * Math.sin(innerA * rad);
  this.ix = (Math.random()) * (Math.random() < 0.5 ? -1 : 1);
  this.iy = (Math.random()) * (Math.random() < 0.5 ? -1 : 1);
  this.alpha = Math.random();
  this.c = "rgba(" + colors[Math.round(Math.random() * colors.length) + 1] + "," + this.alpha + ")";
}

for (var i = 0; i < howMany; i++) 
{
  p[i] = new particles();
}

function Draw() 
{
  ctx.fillStyle = "rgba(255,255,255,.1)";
  ctx.fillRect(0, 0, cw, ch);
  for (var i = 0; i < p.length; i++) 
{
    ctx.fillStyle = p[i].c;
 
    thePath(p[i].r);

    if (ctx.isPointInPath(p[i].x, p[i].y)) 
{
      p[i].x += p[i].ix;
      p[i].y += p[i].iy;
      ctx.beginPath();
      ctx.arc(p[i].x, p[i].y, p[i].r, 0, 2 * Math.PI);
      ctx.fill();

    } else {
      p[i].ix = -1 * p[i].ix;
      p[i].iy = -1 * p[i].iy;
      p[i].x += p[i].ix;
      p[i].y += p[i].iy;
    }
  }
  window.requestAnimationFrame(Draw);
}
window.requestAnimationFrame(Draw);

function thePath(r) 
{

  ctx.beginPath();
  ctx.moveTo(250, 200);
  ctx.arc(350, 200, 100 - r, Math.PI, Math.PI * 0.23);
  ctx.lineTo(250, 450);
  ctx.arc(150, 200, 100 - r, Math.PI * 0.77, 0);
}

function randomIntFromInterval(mn, mx) 
{
  return ~~(Math.random() * (mx - mn + 1) + mn);
}




//____________________________________LESSON_9-10_EVENT LOPP____________________________________//






//////////////////////////////////////////////////////////////


   //ОБРОБКА АССИНХРОНОСТИ С ПОМОШЬЮ KALL BACK
function doBavovna(donateToBackAlive, cb) {
  setTimeout(() => {
    if (donateToBackAlive >= 20) {
      console.log('BOOOM');

      cb(null, "Тепер Kрим наш по факту");
    } else {
      cb('We need more money', null);
    }
  }, 1000)
}

function goToCrimea(money, cb) {
  setTimeout(() => {
    if (money > 400) {
      console.log('Letumo');

      cb(null, 'Вас вітає Крим. Україна');
    } else {
      cb("Нема грошей");
    }
  }, 500)
}

function buySouvenir(money, cb) {
  setTimeout(() => {
    if (money > 200) {
      console.log('Buy rakushka');

      cb(null, "Купили дуже гарну штучку");
    } else {
      cb('Занадто дррого');
    }
  }, 301)
}

doBavovna(40, (err, data) => {
  if (err) {
    console.error(err);
    return
  }

  console.log(data);

  goToCrimea(200, (err, payload) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(payload);

    buySouvenir(100, (e, msg) => {
      if (e) {
        console.error(e);
        return
      }

      console.log(msg);
      console.log('Go home');
    });
  });
});







//______________________________________LESSON10_PROMISES____________________________________//


function doBavovna(donateToBackAlive) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (donateToBackAlive >= 20) {
        console.log('BOOOM');

        resolve("Тепер Kрим наш по факту");
      } else {
        reject('We need more money');
      }
    }, 1000)
  })
}

function goToCrimea(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 400) {
        console.log('Letumo');

        resolve('Вас вітає Крим. Україна');
      } else {
        reject("Нема грошей");
      }
    }, 500)
  })
}

function buySouvenir(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 200) {
        console.log('Buy rakushka');

        resolve("Купили дуже гарну штучку");
      } else {
        reject('Занадто дррого');
      }
    }, 301)
  });
}


doBavovna(40)
  .then((result) => {
    console.log(result);

    return goToCrimea(1000);
  })
  .then(crimeaResult => {
    console.log(crimeaResult);

    return buySouvenir(301);
  })
  .then(value => {
    console.log(value);
  })
  .catch(e => {
    console.error(e); 
  })
  .finally(() => {
    console.log('FINALLY')
  })

////////////////////////////////////////////////////////////////////////////////
 //PROMISES RACE 

 // ВЫВАОДТЬ САМЫЙ БЫСТРЫЙ РЕЗУЛЬТАТ 
  const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('P1')
  }, 3000)
})

const p2 = new Promise((resolve, rej) => {
  setTimeout(() => {
    rej('P2');
  }, 1099)
})

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('P3')
  }, 5663)
})

Promise.race([p1, p2, p3])
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.error(e);
  })
                                      //////////////
                                      //запускает массив промисов в c++API одновреммено и они логаються после выполнения самой долгой задачи одновременно 
                                    // але якщо хоть один с промиссов валиться(arror). то падает вся цепочка 
                                    // .catch(()=>{}) - поломойный промис не будет падать и ломатьвсю зепочку 
Promise.all([p1, p2.catch(()=>{}), p3])
  .then(value => {
    console.log(value);
  })



                             ///////////////
                                // тоже самое только выдает статус упавших и не ломает цепочку


Promise.allSettled([p1, p2, p3])
  .then(value => {
    for (const valueElement of value) {
      console.log(valueElement.status);
  }
    })


//__________________________________________________async_await_____________________


async function vacation() {
  try {
    const bavovna = await doBavovna(40);
    console.log(bavovna);

    let newVar = await goToCrimea(100);
    console.log(newVar);

    let newVar1 = await buySouvenir(301);
    console.log(newVar1);
  } catch (e) {
    console.error(e);
  } finally {
    console.log('FINALLY')
  }
}

vacation();
