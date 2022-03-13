// Desafio 1
function compareTrue(a, b) {

  if (a && b === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2
  return area
}
calcArea(10, 50)
calcArea(5, 2)
calcArea(51, 1)

// Desafio 3
function splitSentence(string) {
  let listaArray = string.split(" ");

  return listaArray
}


// Desafio 4
function concatName(lista) {
  let ultimaPalavra = lista[lista.length - 1];
  let primeiraPalavra = lista[0];
  return lista = ultimaPalavra + ', ' + primeiraPalavra;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
console.log(concatName(['foguete', 'não', 'tem', 'ré']))
console.log(concatName(['captain', 'my', 'captain']))




// Desafio 5
function footballPoints(a, b) {

  let win = 3;
  let ties = 1;
  let score = (a * win) + (b * ties);
  return score;

}
console.log(footballPoints(14, 8))
console.log(footballPoints(1, 2))
console.log(footballPoints(0, 0))






// Desafio 6
function highestCount(array) {

  let high = array[0];
  let highCount = 0;

  for (let index in array) {
    if (array[index] > high) {
      high = array[index];
    }
  }
  for (let index in array) {
    if (array[index] === high) {
      highCount += 1;
    }
  }
  return highCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

let dist1 = (mouse - cat1) //2
let dist2 = (mouse - cat2) //3

if (Math.abs(dist1) > Math.abs(dist2)) {
  return 'cat2';
}
else if
  (Math.abs(dist1) < Math.abs(dist2)) {
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(10, 4, 22));










// Desafio 8
// codigo baseado na URL: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function fizzBuzz(array2) {

  let recebeArray = [];

  for (let index2 = 0; index2 < array2.length; index2 += 1) {
    if (array2[index2] % 3 === 0 && array2[index2] % 5 !== 0) {
      recebeArray.push("fizz");

    } else if (array2[index2] % 3 !== 0 && array2[index2] % 5 === 0) {
      recebeArray.push("buzz");
    }
    else if (array2[index2] % 3 === 0 && array2[index2] % 5 === 0) {
      recebeArray.push("fizzBuzz");
    } 
    else  {
      recebeArray.push("bug!");
      }
    }
      return recebeArray;
    }











    // Desafio 9
    function encode(param) {
   
      let recebeString = param.split('')

      for (let i= 0; i< recebeString.length; i+= 1) {

        if (recebeString[i] === 'a') {
          recebeString[i] = 1
        }
        else if (recebeString[i] === 'e') {
        recebeString[i] = 2;
        }
        else if (recebeString[i] === 'i') {
        recebeString[i] = 3;
        }
        else if (recebeString[i] === 'o') {
          recebeString[i] = 4;
        }
        else if (recebeString[i] === 'u') {
          recebeString[i] = 5;
        }
      }
      let result = recebeString.join('');
      return result;
    }
  
console.log(encode('lalaland'));





    
    function decode(param2) {
    
    let splitString2 = param2.split('');
console.log(splitString2);
    for (let i2 = 0; i2 < splitString2.length; i2 += 1) {
      if (splitString2[i2] === '1') {
        splitString2[i2] = 'a';
      }
      else if (splitString2[i2] === '2') {
        splitString2[i2] = 'e';
      }
      else if (splitString2[i2] === '3') {
        splitString2[i2] = 'i';
      }
      else if (splitString2[i2] === '4') {
        splitString2[i2] = 'o';
      }
      else if (splitString2[i2] === '5') {
        splitString2[i2] = 'u'; 
      }
    }
    let result2 = splitString2.join('');
    return result2;
    }
console.log(decode('iguii'))








    // Desafio 10
    function techList() {
      // seu código aqui
    }

    module.exports = {
      calcArea,
      catAndMouse,
      compareTrue,
      concatName,
      decode,
      encode,
      fizzBuzz,
      footballPoints,
      highestCount,
      splitSentence,
      techList,
    };
