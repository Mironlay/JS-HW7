// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const masivNum = [9, 14, 60];
masivNum[1] = 15;
console.log(masivNum);
// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const masivStr = ["robocop", "Layla", "Ben"];
masivStr[masivStr.length] = "Sofi";
console.log(masivStr);

// Створити скрипт який поверне суму всіх чисел в масиві.
const masivNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;
for (let i = 0; i < masivNum2.length; i += 1) {
    sum += masivNum2[i]
}
console.log(sum);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const masiv = [10, true, "false", false, "bodka"];
for (let i = 0; i < masiv.length; i += 1) {
    console.log(masiv[i]);
} 

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const masiv2 = ["bombombom", "loli", "kon", "800000", "bodka", "1"];
for (let i = 0; i < masiv2.length; i += 1) {
    if (masiv2[i].length <= 5 ) {
        continue;
    }
    console.log(masiv2[i]);
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const masivNum3 = [1, 10, 16, 4, 7, 13, 17, 12, 29, 26];
let max = masivNum3[0];
for (let i = 0; i < masivNum3.length; i += 1) {
    if (masivNum3[i] > max ) {
        max = masivNum3[i];
    }
}
console.log(max);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const masivNum4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < masivNum4.length; i += 1) {
    if (masivNum4[i] % 2 !== 0) {
        continue;
    }
    console.log(masivNum4[i]);
}



































