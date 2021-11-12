//Задачи на методы массивов - map , index OF i t.d....

/*OTDELNII PRIMER S WARSE COD ---  Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing" */

// ne rabotaet
function getName(string) {
   let arr = string.split(' ')

   for (i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i].toUpperCase()) {
         arr[i - 1] = ' ';
      }
      break;
   }
   return arr
}
console.log(getName("camelCasing"))

/// rabotaet

function solution(string) {
   let arr = string.split(/([A-Z][a-z]+)/);
   arr = arr.filter((item) => {
      return item;
   });
   return arr.join(' ');
}

console.log(solution("camelCasingTheBast"))

/// ne rabotaet

function getName(string) {
   let arr = string.split(/([A-Z].+)/);
   arr.pop();
   return arr.join(' ');
}

console.log(getName("camelCasing"))

///rabotaet


function getName(string = '') {
   const arr = [''];
   let i = 0;
   for (const letter of string) {
      if (letter === letter.toUpperCase()) {
         i += 1;
         arr[i] = '';
      }
      arr[i] += letter;
   }
   return arr.join(' ');
}

console.log(getName("camelCasingTheBast"))


///  Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел. Показать решение.

function getNewArr(arr) {
   let arrNew = arr.map(function (item) {
      return item * 2;
   })
   return arrNew;
}

console.log(getNewArr([1, 2, 3, 4, 5]))







