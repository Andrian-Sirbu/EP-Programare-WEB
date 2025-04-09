function numaraRepetari(lista, element) {
    let numar = 0;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === element) {
        numar++;
      }
    }
    return numar;
  }
  

  const numere = [1, 2, 3, 1, 4, 1];
  const cauta = 1;
  const rezultat = numaraRepetari(numere, cauta);
  console.log(`Elementul ${cauta} apare de ${rezultat} ori.`);