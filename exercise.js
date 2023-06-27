const isLogged = true;

function firstP(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged === true) {
      resolve(Math.random());
    } else {
      reject("error!");
    }
  });
}

function secondP(firstP) {
  return new Promise((resolve, reject) => {
    if ( firstP > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(" second error!");
    }
  });
}

// firstP()
//  .then((val) => console.log(val))
//  .catch((err) =>console.log(err))

// secondP(firstP())
//  .then((val) => console.log(val))
//  .catch((err) => console.error(err));

firstP(isLogged)
  .then((result) => secondP(result))
  .then((val) => console.log(val))
  .catch((err) => console.error(err))





