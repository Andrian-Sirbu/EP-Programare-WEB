
  let obiect1 = { a: 1, b: 2 };
  let obiect2 = { b: 3, c: 4 };
  let obiectImbinat = mergeObjects(obiect1, obiect2);
function mergeObjects(obj1, obj2) {
    let rezultat = {};
  

    for (let key in obj1) {
      rezultat[key] = obj1[key];
    }

    for (let key in obj2) {
      rezultat[key] = obj2[key];
    }
  
    return rezultat;
  }
  
  console.log(obiectImbinat); 