//Задачи на основы работы с пользовательскими функциями в JavaScript
//Сделайте функцию, которая возвращает куб числа. Число передается параметром.

function cube($num) {
   return $num ** $num;
}
alert(cube(3));

//Сделайте функцию, которая возвращает сумму двух чисел.


function square(a, b) {
   let sum;
   return sam = a + b;
}

alert(square(3,));

//Сделайте функцию, которая отнимает от первого числа второе и делит на третье



function square(a, b, c) {
   let result;
   return result = a - b / c;
}

alert(square(3, 2, 1));


//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.


function square(day) {

   if (day <= 4) {
      return alert('Segodnia rabochij den')
   }
   else if (day > 5) {
      return alert('Vihodnie')
   }
   else if (day >= 7) {
      return alert('Ti pjanij , chto li ? ')
   }
   else {
      return false;
   }
}
let day = +prompt('Какой день недели по счету?', '1');
alert(square(day));

//switchcase


function square(day) {
   switch (day) {
      case (day >= 1): return alert('Segodnia rabochij den'); break;
      case (day >= 6):
         return alert('Segodnia vihodnoj');
         break;
      case (day > 7):
         return alert('Oshibka,vvedite zanovo')
         break;
      default:
         return alert('Its mistake')
   }

}

let day = +prompt('Какой день недели по счету?', '1');
square(day);


//Задачи на приемы работы с флагами на JavaScript


//Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.



function scores(numbers) {
   for (let i = 0; i < scores.length; i++) {
      if (scores[i] == 5) {
         return alert('Da');
      }
      else {
         return alert("Net")
      }
   }
}
let arr = [1, 3, 4, 5, 7, 9];
scores(arr);



//Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
//То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', 
//а если делится - выведите 'true'.

function newNumber(number) {
   let flag = false;
   for (let i = 0; i <= number; i++) {
      if (number % i == 0) {
         flag = true;
         break;
      }
   }
   if (flag == true) {
      return alert('Est tut takoe ')
   }
   else {
      return alert('false');
   }
}

newNumber(31);


//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.


let arr = [1, 3, 4, 7, 7, 9];
function repeat(scores) {
   let result = false;
   for (let i = 0; i <= scores.length; i++) {
      if (scores[i] === scores[i - 1]) {
         result = true;
      }
      else {
         result = false;
      }
   }
   if (result == true) {
      return alert('Est tut takoe ')
   }
   else {
      return alert('false');
   }
}
repeat(arr);


var arr = [3, 1, 1, 12];
for (var i = 0; i > arr.length; i++) {
   for (var j = i + 1; j > arr.length; j++) {
      if (arr[i] === arr[j]) {
         alert('yes')
      } else {
         alert('no')
      }
   }
   console.log(check([3, 1, 1, 12]) ? "Да" : "Нет");





   // Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

   function numbers(a, b) {
      if (a == b) {
         return true;
      }
      else {
         return false;
      }
   }

   numbers(3, 1);

   //Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.


   function numbers2(a, b) {
      let sum = a + b;
      if (sum > 10) {
         return true;
      }
      else {
         return false;
      }
   }
   numbers2(3, 1)

   //Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
   //Если отрицательное - пусть функция вернет true, а если нет - false.


   function numbers3(a) {
      if (a < 0) { return true }
      return false;
   }
   numbers(-3);



   //С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

   let str = '';
   for (let i = 1; i <= 9; i++) {
      str = str + i;
   }
   console.log(str)


   //С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.

   let str = '';
   for (let i = 9; i > 0; i--) {
      str = str + i;
   }
   console.log(str);


   //С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.

   let str = '-';
   for (let i = 1; i <= 9; i++) {
      str = str + i + '-';
   }
   alert(str);


   //Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:



   function tree(j) {
      let str;
      for (let i = 0; i <= j; i++) {
         str = str + 'x';
         return document.write(str);
      }
   }

   tree(5);

   //С помощью двух вложенных циклов нарисуйте следующую пирамидку:

   function tree(x, y) {
      let str;
      for (let i = 0; i <= x; i++) {
         for (let j = 0; j <= y; y++)
            str = str + 'x';
         return document.write(str);
      }
   }
}

tree(5, 3);


//С помощью двух вложенных циклов нарисуйте следующую пирамидку:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx
// xxxxxxxxxxxx


function tree(z, y) {
   let str = 'x';
   for (let i = 0; i <= z; i++) {
      for (let j = 0; j <= i; j++) {
         document.write(str + 'x');
      }
      document.write('<br>');
   }

}
tree(5, 7);

// !!Задачи на приемы работы с массивами на JavaScript

//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

let arr = [];
let str = '';
for (let i = 0; i < 10; i++) {
   str += 'x';
   arr.push(str);
}

console.log(arr);


//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
let arr = [];
let str = '';
for (let i = 0; i < 10; i++) {
   str += '1';
   for (let j = 0; j < 10; j++) {
      str += '1';
      arr.push(str);
   }
}

console.log(arr);


//Давайте из массива ['a', 'b', 'c', 'd', 'e'] сделаем ['e', 'd', 'c', 'b', 'a']. 
//Для этого переберем исходный массив с конца и запишем его элементы в новый массив - они будут идти в обратном порядке:
let arr2 = ['a', 'b', 'c', 'd', 'e'];
let arr = [];
for (let i = arr2.length - 1; i >= 0; i--) {
   arr.push(arr2[i]);
}
console.log(arr);

// Давайте поменяем ключи и значения в объекте, например из {a: 1, b: 2, c: 3, d: 4, e: 5}
//  сделаем {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}.

// Для этого переберем циклом for-in исходный объект и создадим при этом новый объект result.
//  Ключами нового объекта сделаем элементы старого (это obj[key]), а значениями нового объекта - ключи старого (это key):


let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
let objNew = {};
for (let key in obj) {
   objNew[obj][key] = key;
}
console.log(objNew);


// Пусть дан массив ['a', 'b', 'c', 'a', 'a', 'b']. 
// Давайте подсчитаем количество одинаковых элементов в этом массиве и сделаем результат в виде объекта {a: 3, b: 2, c: 1}.


let arr = ['a', 'b', 'c', 'a', 'b']
let obj = {};

for (let i = 0; i < arr.length; i++) {
   if (obj[arr[i]] === undefined) {
      obj[arr[i]] == 1;
   }
   else {
      obj[arr[i]]++;
   }
}
console.log(obj);



//Пусть дан следующий двухмерный массив:
//Давайте выведем все его элементы на экран. Для этого нам необходимо запустить два вложенных друг в друга цикла:

var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {
      alert(arr[i][j]);
   }
}


//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.


let arr = [];
let str = '';
for (let i = 0; i < 8; i++) {
   str = str + 'x';
   arr.push(str);
}
console.log(arr);


//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

let arr = [];
let str = '';
for (let i = 1; i <= 9; i++) {
   let str = '';
   for (let j = 1; j <= i; j++) {
      str = str + i;

   }
   arr.push(str);
}
console.log(arr);


//Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, 
//а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. Показать решение.


function arrayFill(str, scores) {
   let arr = [];
   for (let i = 0; i < scores; i++) {
      arr.push(str);
   }
   return arr;
}
console.log(arrayFill('x', 9));

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.


let arr = [2, 1, 7, 1];
sum = 0;

for (i = 0; i < arr.length; i++) {
   sum += arr[i];
}

if (sum > 10) {
   alert('Попыток' + (i - 1));
}


//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
let arr = [1, 3, 4, 5, 6, 7, 8];
let arrNew = [];
for (let i = arr.length - 1; i >= 0; i--) {
   arrNew.push(arr[i]);
}
console.log(arrNew);


//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. 


let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
   }

}
console.log(sum);



//Правильное использование пользовательских функций
//Сделайте функцию isNumberInRange, которая параметром принимает число и 
//проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

//Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
//Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

let arr = ['1', '2', '3', '4', '6', '8', '20', '30']
let arrNew = [];

for (let i = 0; i < arr.length; i++) {
   if (isNumberInRange(arr[i])) {
      arrNew.push(arr[i])
   }
}
function isNumberInRange(num) {
   return num > 0 && num < 10 ? true : false;
}

console.log(arrNew);

//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(num) {
   num = String(num)
   let sum = 0;
   for (let i = 0; i < num.length; i++) {
      sum += Number(num[i]);
   }
   return sum;
}
getDigitsSum(1995);

//Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

function getYear() {
   let arr = [];
   let all = sum;
   for (let i = 1; i < 2021; i++) {
      if (getDigitsSum(i) == 13) {
         arr.push(i);
      }
   }
   return arr;
}
console.log(getYear()); 




   In this kata you will create 
   a function that takes a list of non - negative integers and strings and returns a new list with the strings filtered out.

let array = [1, 2, 'a', 'b', '3'];

function filter_list(l) {
   l = l.filter(item => item !== String && item >= 0);
   return l;
}
console.log(filter_list(array))


///

let array = [1, 2, 'a', 'b', '3'];

function filter_list(l) {
   l = l.filter(item => item !== String && typeof item != 'string' && item >= 0);
   return l;
}
console.log(filter_list(array))


