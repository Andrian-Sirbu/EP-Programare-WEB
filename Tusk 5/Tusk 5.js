function objectToArray(obiect) {
    let rezultat = [];
    for (let cheie in obiect) {
      rezultat.push([cheie, obiect[cheie]]);
    }
    return rezultat;
  }
  

  let date = { a: 1, b: 2, c: 3 };
  let arrayPerechi = objectToArray(date);
  console.log(arrayPerechi); 