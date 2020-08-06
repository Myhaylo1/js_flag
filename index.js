/* Работа с флагами в JavaScript */

/* 1. дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет. Если есть - вывести 'есть', если нет - вывести 'нет'. */
console.log('1. Поиск значения в массиве.');
let a = [1, 'c', 2, 5];
let flag = false;
for (let i = 0; i < a.length; i++) if (a[i] === 'c') {
  flag = true;
  break;
}
console.log('Is "c" in mas[]=', a, '? ', flag ? 'есть' : 'нет');
console.log();

/* 2. необходимо создать функцию hasElem, которая параметром будет принимать массив и возвращать true, если 'c' есть в массиве, и false - если нет */
/**
 *
 * @param {Array} a
 * @param {*} findValue
 * @returns {boolean}
 */
function hasElem(a, findValue) {
  let flag = false;
  for (let i = 0; i < a.length; i++) if (a[i] === findValue) {
    flag = true;
    break;
  }
  return flag;
}

console.log('2. Поиск значения в массиве с помощью функции.');
console.log('Is "c" in mas[]=', a, '? ', hasElem(a, 'c'));
console.log();

/* 3. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'. */
console.log('3. Поиск значения в массиве с помощью функции.');
console.log('Is 5 in mas[]=', a, '? ', hasElem(a, 5) ? 'да' : 'нет');
console.log();

/* 4. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'. */
console.log('4. Поиск простых чисел.');
for (let j = 0; j < 5; j++) {
  a = Math.round(Math.random() * 50) + 2;
  flag = true;
  for (let i = 2; i < a; i++) {
    if (!(a % i)) {
      flag = false;
      break;
    }
  }
  console.log(`${a} is simple? ${flag}`);
}
console.log();

/* 5. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'. */
console.log('5. Есть ли в массиве два одинаковых числа подряд?');
let n;
for (let j = 0; j < 5; j++) {
  n = Math.round(Math.random() * 6) + 4;
  a = [];
  for (let i = 0; i < n; i++) a[i] = Math.round(Math.random() * 6);
  flag = false;
  for (let i = 1; i < n; i++) if (a[i - 1] === a[i]) {
    flag = true;
    break;
  }
  console.log(`Has mas=[${a}] a[i-1]=a[i]? ${flag ? 'да' : 'нет'}`);
}

